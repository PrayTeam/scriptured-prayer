import * as esbuild from 'esbuild'

let options = {
  entryPoints: ['src/**/*.jsx'],
  outdir: '../cardbox/static/compiled',
  packages: 'external',
  bundle: true,
  minify: true,
  format: 'esm',
};

let scripts = {
  dev: { ...options, sourcemap: true },
  build: { ...options },
};

// ignore Serve and Rebuild APIs; not relevant to our needs
let mode = process.argv.includes('--watch') ? 'context' : 'build';

let ctx = await esbuild[mode](scripts[process.argv[2]]);

if (mode === 'context') {
  await ctx.watch();
  console.log('Watching for changes...');
};
