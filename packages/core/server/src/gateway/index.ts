import { EventEmitter } from 'events';
import http, { IncomingMessage, ServerResponse } from 'http';
import { AppSupervisor } from '../app-supervisor';
import Application, { ApplicationOptions } from '../application';
import { WSServer } from './ws-server';
import { parse } from 'url';
import { resolve } from 'path';
import { IPCSocketServer } from './ipc-socket-server';
import { IPCSocketClient } from './ipc-socket-client';
import { Command } from 'commander';
import { getErrorWithCode } from './errors';

export interface IncomingRequest {
  url: string;
  headers: any;
}

export type AppSelector = (req: IncomingRequest) => string | Promise<string>;

interface StartHttpServerOptions {
  port: number;
  host: string;
  callback?: (server: http.Server) => void;
}

interface RunOptions {
  mainAppOptions: ApplicationOptions;
}

export class Gateway extends EventEmitter {
  private static instance: Gateway;
  /**
   * use main app as default app to handle request
   */
  appSelector: AppSelector;
  public server: http.Server | null = null;
  public ipcSocketServer: IPCSocketServer | null = null;
  private port: number = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : null;
  private host = '0.0.0.0';
  private wsServer: WSServer;
  private socketPath = resolve(process.cwd(), 'storage', 'gateway.sock');

  private constructor() {
    super();
    this.reset();
  }

  public static getInstance(options: any = {}): Gateway {
    if (!Gateway.instance) {
      Gateway.instance = new Gateway();
    }

    return Gateway.instance;
  }

  destroy() {
    this.reset();
    Gateway.instance = null;
  }

  public reset() {
    this.setAppSelector(() => process.env['STARTUP_SUBAPP'] || 'main');

    if (this.server) {
      this.server.close();
      this.server = null;
    }
    if (this.ipcSocketServer) {
      this.ipcSocketServer.close();
      this.ipcSocketServer = null;
    }
  }

  setAppSelector(selector: AppSelector) {
    this.appSelector = selector;
    this.emit('appSelectorChanged');
  }

  responseError(
    res: ServerResponse,
    error: {
      status: number;
      maintaining: boolean;
      message: string;
      code: string;
    },
  ) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = error.status;
    res.end(JSON.stringify(error));
  }

  responseErrorWithCode(code, res, ...args) {
    const error = getErrorWithCode(code);
    this.responseError(res, {
      ...error,
      message: error.message(...args),
    });
  }

  async requestHandler(req: IncomingMessage, res: ServerResponse) {
    const handleApp = await this.getRequestHandleAppName(req as IncomingRequest);
    const app: Application = await AppSupervisor.getInstance().getApp(handleApp);

    if (!app) {
      this.responseErrorWithCode('APP_NOT_FOUND', res, handleApp);
      return;
    }

    const appInterpreter = app.getFsmInterpreter();

    // if app is not ready, return 503
    if (!appInterpreter.state.matches('running')) {
      if (appInterpreter.state.matches('error')) {
        this.responseErrorWithCode('APP_ERROR', res, app);
      } else {
        this.responseErrorWithCode(`APP_${app.getFsmState()}`, res, app);
      }

      return;
    }

    // if request health check, return 200
    if (req.url.endsWith('/__health_check')) {
      res.statusCode = 200;
      res.end('ok');
      return;
    }

    app.callback()(req, res);
  }

  async getRequestHandleAppName(req: IncomingRequest) {
    const defaultAppName = process.env['STARTUP_SUBAPP'] || 'main';
    return (await this.appSelector(req)) || defaultAppName;
  }

  getCallback() {
    return this.requestHandler.bind(this);
  }

  async run(options: RunOptions) {
    const isStart = this.isStart();
    if (isStart) {
      const startOptions = this.getStartOptions();
      const port = startOptions.port || process.env.APP_PORT || 13000;
      const host = startOptions.host || process.env.APP_HOST || '0.0.0.0';

      this.start({
        port,
        host,
      });
    } else {
      const ipcClient = await this.tryConnectToIPCServer();

      if (ipcClient) {
        ipcClient.write({ type: 'passCliArgv', payload: { argv: process.argv } });
        ipcClient.close();
        return;
      }
    }

    const mainApp = AppSupervisor.getInstance().bootMainApp(options.mainAppOptions);
    mainApp.runAsCLI();
  }

  isStart() {
    const argv = process.argv;
    return argv[2] === 'start';
  }

  getStartOptions() {
    const argv = process.argv;
    const program = new Command();

    program
      .allowUnknownOption()
      .option('-s, --silent')
      .option('-p, --port [post]')
      .option('-h, --host [host]')
      .option('--db-sync')
      .parse(process.argv);
    const options = program.opts();

    return options;
  }

  start(options: StartHttpServerOptions) {
    this.startHttpServer(options);
    this.startIPCSocketServer();
  }

  startIPCSocketServer() {
    this.ipcSocketServer = IPCSocketServer.buildServer(this.socketPath);
  }

  startHttpServer(options: StartHttpServerOptions) {
    if (options?.port !== null) {
      this.port = options.port;
    }

    if (options?.host) {
      this.host = options.host;
    }

    if (this.port === null) {
      console.log('gateway port is not set, http server will not start');
      return;
    }

    this.server = http.createServer(this.getCallback());

    this.wsServer = new WSServer();

    this.server.on('upgrade', (request, socket, head) => {
      const { pathname } = parse(request.url);

      if (pathname === '/ws') {
        this.wsServer.wss.handleUpgrade(request, socket, head, (ws) => {
          this.wsServer.wss.emit('connection', ws, request);
        });
      } else {
        socket.destroy();
      }
    });

    this.server.listen(this.port, this.host, () => {
      console.log(`Gateway HTTP Server running at http://${this.host}:${this.port}/`);
      if (options?.callback) {
        options.callback(this.server);
      }
    });
  }

  async tryConnectToIPCServer() {
    try {
      const ipcClient = await this.getIPCSocketClient();
      return ipcClient;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async getIPCSocketClient() {
    return await IPCSocketClient.getConnection(this.socketPath);
  }

  close() {
    this.server?.close();
    this.wsServer?.close();
  }
}
