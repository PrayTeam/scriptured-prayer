import * as esbuild from 'esbuild'

// from https://www.npmjs.com/package/esbuild-plugin-external-global
const externalGlobalPluginName = 'external-global-plugin';
const externalGlobalPlugin = (externals) => ({
  name: externalGlobalPluginName,
  setup(build) {
    build.onResolve({
      filter: new RegExp('^(' + Object.keys(externals).join('|') + ')$'),
    }, (args) => ({
      path: args.path,
      namespace: externalGlobalPluginName,
    }));
    build.onLoad({
      filter: /.*/,
      namespace: externalGlobalPluginName,
    }, (args) => {
      const contents = `module.exports = ${externals[args.path]}`;
      return { contents };
    });
  }
});

let options = {
  entryPoints: ['src/**/*.tsx'],
  outdir: '../prayerapp/static/compiled',
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  plugins: [
    externalGlobalPlugin({
      'react': 'window.React',
      'react-dom': 'window.ReactDOM',
    }),
  ]
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
