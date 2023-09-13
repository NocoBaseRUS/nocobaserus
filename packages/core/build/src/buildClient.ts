import path from 'path';
import fg from 'fast-glob';
import fs from 'fs-extra';
import { build as viteBuild } from 'vite';
import { build as tsupBuild } from 'tsup';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import react from '@vitejs/plugin-react';

import { PkgLog } from './utils';
import { globExcludeFiles } from './constant';


export async function buildClient(cwd: string, sourcemap: boolean = false, log: PkgLog) {
  log('build client');
  const cwdWin = cwd.replaceAll(/\\/g, '/');
  const cwdUnix = cwd.replaceAll(/\//g, '\\');
  const external = function (id: string) {
    if (id.startsWith('.') || id.startsWith(cwdUnix) || id.startsWith(cwdWin)) {
      return false;
    }
    return true;
  }
  await buildEsm(cwd, sourcemap, external, log);
  await buildLib(cwd, sourcemap, external, log);
  await buildLocale(cwd);
}

type External = (id: string) => boolean;

export function buildEsm(cwd: string, sourcemap: boolean, external: External, log: PkgLog) {
  log('build client esm');
  const entry = path.join(cwd, 'src/index.ts').replaceAll(/\\/g, '/');
  const outDir = path.resolve(cwd, 'es');
  return viteBuild({
    mode: 'production',
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
      minify: false,
      outDir,
      cssCodeSplit: true,
      emptyOutDir: true,
      sourcemap,
      lib: {
        entry,
        formats: ['es'],
        fileName: 'index',
      },
      target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14'],
      rollupOptions: {
        cache: true,
        treeshake: true,
        external,
      },
    },
    plugins: [react(), libInjectCss()],
  });
}

export async function buildLib(cwd: string, sourcemap: boolean, external: External, log: PkgLog) {
  log('build client lib');
  const outDir = path.resolve(cwd, 'lib');
  const esDir = path.resolve(cwd, 'es');
  const entry = path.join(esDir, 'index.ts')

  fs.removeSync(entry);
  fs.linkSync(path.join(cwd, 'es/index.mjs'), entry);

  await viteBuild({
    mode: 'production',
    esbuild: {
      format: 'cjs'
    },
    build: {
      outDir,
      minify: false,
      sourcemap,
      lib: {
        entry: path.join(cwd, 'es/index.ts'),
        formats: ['cjs'],
        fileName: 'index',
      },
      rollupOptions: {
        external,
      },
    },
  });

  fs.removeSync(entry);

  const css = fg.sync('*.css', { cwd: esDir, absolute: true });
  css.forEach((file) => {
    fs.copySync(file, path.join(outDir, path.basename(file)));
  });
}

export function buildLocale(cwd: string) {
  const entry = fg.globSync(['src/locale/**', ...globExcludeFiles], { cwd, absolute: true });
  const outDir = path.resolve(cwd, 'lib', 'locale');
  return tsupBuild({
    entry,
    splitting: false,
    clean: false,
    bundle: false,
    silent: true,
    treeshake: false,
    target: 'node16',
    keepNames: true,
    outDir,
    format: 'cjs',
    skipNodeModulesBundle: true,
  });
}
