import Application from '../application';
import { waitFor } from 'xstate/lib/waitFor';

describe('application fsm', () => {
  let app: Application;
  beforeEach(() => {
    app = new Application({
      database: {
        dialect: 'sqlite',
        storage: ':memory:',
      },
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  it('should get fsm', () => {
    const fsmInterpreter = app.getFsmInterpreter();
    expect(fsmInterpreter.state.value).toBe('idle');
  });

  it('should call start on state transform', async () => {
    const jestFn = jest.fn();

    app.on('beforeStart', async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      jestFn();
    });

    app.getFsmInterpreter().send('start');

    await waitFor(app.getFsmInterpreter(), (state) => state.matches('started'));

    expect(jestFn).toBeCalledTimes(1);
  });

  it('should stop application', async () => {
    app.getFsmInterpreter().send('start');

    await waitFor(app.getFsmInterpreter(), (state) => state.matches('started'));

    const jestFn = jest.fn();
    app.on('beforeStop', async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      jestFn();
    });

    app.getFsmInterpreter().send('stop');

    await waitFor(app.getFsmInterpreter(), (state) => state.matches('idle'));

    expect(jestFn).toBeCalledTimes(1);
  });

  it('should transition to error state when application not start', async () => {
    const fsmInterpreter = app.getFsmInterpreter();
    fsmInterpreter.send('start', {
      checkInstall: true,
    });

    await waitFor(fsmInterpreter, (state) => state.matches('error'));

    expect(fsmInterpreter.state.value).toBe('error');

    const jestFn = jest.fn();
    app.on('beforeInstall', async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      jestFn();
    });

    fsmInterpreter.send('work', {
      workingType: 'install',
    });

    await waitFor(fsmInterpreter, (state) => state.matches('started'));
    expect(jestFn).toBeCalledTimes(1);
  });

  it('should run install', async () => {
    const fsmInterpreter = app.getFsmInterpreter();
    await waitFor(fsmInterpreter, (state) => state.matches('idle'));
    const jestFn = jest.fn();
    app.on('beforeInstall', async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      jestFn();
    });

    fsmInterpreter.send('work', {
      workingType: 'install',
    });

    await waitFor(fsmInterpreter, (state) => state.matches('idle'));
    expect(jestFn).toBeCalledTimes(1);
  });
});
