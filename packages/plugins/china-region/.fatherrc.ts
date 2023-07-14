
import { defineConfig } from 'father';
import LodashWebpackPlugin from 'lodash-webpack-plugin';
import { builtinModules } from 'module';
import path from 'path';
import fs from 'fs';
import spawn from 'cross-spawn';
import { dependencies, devDependencies, name } from './package.json';

export default getFatherBuildConfig({
  clientExtraExternals: [],
  serverExtraExternals: [],
  sourcemap: true,
})

interface BuildOptions {
  /**
   * When client build, **exclude** these packages.
   *
   * devDependencies in package.json will be excluded automatically.
   */
  clientExtraExternals?: string[];
  /**
   * When server build, **exclude** these packages.
   *
   * devDependencies in package.json will be excluded automatically.
   */
  serverExtraExternals?: string[];
  /**
   * Whether to generate source map
   * @default  true
   */
  sourcemap?: boolean;
}

function getFatherBuildConfig(options: BuildOptions) {
  const SRC = 'src'
  const DIST = 'lib'
  const SERVER = 'server'
  const CLIENT = 'client'
  const srcDir = path.join(__dirname, SRC);
  const distDir = path.join(__dirname, DIST);

  function isBuiltinModule(packageName: string) {
    return builtinModules.includes(packageName);
  }
  function getSrcPackages(sourceDir: string): string[] {
    const importedPackages = new Set<string>();
    const exts = ['.js', '.ts', '.jsx', '.tsx'];

    const importRegex = /import\s+.*?\s+from\s+['"]([^'"\s.].+?)['"];?/g;
    const requireRegex = /require\s*\(\s*[`'"]([^`'"\s.].+?)[`'"]\s*\)/g;
    function setPackagesFromContent(reg: RegExp, content: string) {
      let match: RegExpExecArray | null;
      while ((match = reg.exec(content))) {
        let importedPackage = match[1];
        if (importedPackage.startsWith('@')) {
          // @aa/bb/ccFile => @aa/bb
          importedPackage = importedPackage.split('/').slice(0, 2).join('/');
        } else {
          // aa/bbFile => aa
          importedPackage = importedPackage.split('/')[0];
        }

        if (!isBuiltinModule(importedPackage)) {
          importedPackages.add(importedPackage);
        }
      }
    }

    function traverseDirectory(directory: string) {
      const files = fs.readdirSync(directory);

      for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          // recursive
          traverseDirectory(filePath);
        } else if (stat.isFile() && !filePath.includes('__tests__')) {
          if (exts.includes(path.extname(filePath).toLowerCase())) {
            const content = fs.readFileSync(filePath, 'utf-8');

            setPackagesFromContent(importRegex, content);
            setPackagesFromContent(requireRegex, content);
          }
        }
      }
    }

    traverseDirectory(sourceDir);

    return [...importedPackages];
  }

  function getPackageJsonPackages(): string[] {
    return [...Object.keys(devDependencies || {}), ...Object.keys(dependencies || {})];
  }

  function checkPackages(srcPackages: string[], packageJsonPackages: string[]) {
    const missingPackages = srcPackages.filter((packageName) => !packageJsonPackages.includes(packageName));
    if (missingPackages.length) {
      console.error(
        `[Plugin Build Error]: Missing packages \`\x1b[31m%s\x1b[0m\` \nPlease add them to "devDependencies" or "dependencies" in package.json\n`, missingPackages.join(', ')
      );
      process.exit(-1);
    }
  }

  function getServerIncludePackages(srcServerPackages: string[], serverExtraExternals: string[] = []) {
    const serverExcludePackages = [...serverExtraExternals, ...(devDependencies ? Object.keys(devDependencies) : [])];
    const serverIncludePackages = srcServerPackages.filter((packageName) => !serverExcludePackages.includes(packageName));
    return serverIncludePackages;
  }

  function getClientExcludePackages(clientExtraExternals: string[] = []) {
    return [...clientExtraExternals, ...(devDependencies ? Object.keys(devDependencies) : [])];
  }

  const srcClientPackages = getSrcPackages(path.join(srcDir, CLIENT));
  const srcServerPackages = getSrcPackages(path.join(srcDir, SERVER));

  const packageJsonPackages = getPackageJsonPackages();
  checkPackages([...srcClientPackages, ...srcServerPackages], packageJsonPackages);

  const serverIncludePackages = getServerIncludePackages(srcServerPackages, options?.serverExtraExternals);
  const clientExcludePackages = getClientExcludePackages(options?.clientExtraExternals);

  class InstallDepsPlugin {
    apply(compiler) {
      // listen to webpack `done` event
      compiler.hooks.done.tap('InstallDepsPlugin', () => {
        const distPackageJSON = path.join(distDir, 'package.json');

        const distDependencies = Object.keys(dependencies).reduce((acc, cur) => {
          if (serverIncludePackages.includes(cur)) {
            acc[cur] = dependencies[cur];
          }
          return acc;
        }, {});

        fs.writeFileSync(distPackageJSON, JSON.stringify({ dependencies: distDependencies }), 'utf-8');
        spawn.sync('npm', ['install'], { stdio: 'inherit', shell: true, cwd: distDir });
        fs.unlinkSync(distPackageJSON);
        fs.unlinkSync(path.join(distDir, 'package-lock.json'));
      });
    }
  }
  function baseFatherBuildConfig(options: BuildOptions = {}) {
    return defineConfig({
      umd: {
        name,
        entry: `${SRC}/${CLIENT}`,
        platform: 'browser',
        sourcemap: options.sourcemap ?? true,
        output: `${DIST}/${CLIENT}`,
        chainWebpack: (memo) => {
          memo.optimization.minimize(false);
          memo.output.filename('index.js');
          memo.output.libraryTarget('amd');
          memo.plugin('InstallDepsPlugin').use(InstallDepsPlugin);
          return memo;
        },
        externals: {
          ...clientExcludePackages.reduce<Record<string, string>>((prev, curr) => {
            prev[`${curr}/${CLIENT}`] = curr;
            prev[curr] = curr;
            return prev;
          }, {}),
        },
      },
      cjs: {
        input: `${SRC}/${SERVER}`,
        output: `${DIST}/${SERVER}`,
      },
      // prebundle: {
      //   output: DIST,
      //   deps: {
      //     ...serverIncludePackages.reduce<Record<string, { minify: boolean; dts: boolean }>>((prev, curr) => {
      //       prev[curr] = { minify: false, dts: false };
      //       return prev;
      //     }, {}),
      //   },
      // },
    });
  }

  return baseFatherBuildConfig(options)
}
