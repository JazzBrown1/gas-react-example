const path = require('path');

const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');

// see below for details on the options
const inputOptions = {
  input: path.join(process.cwd(), '/server/index.js'),
  plugins: [resolve()],
  context: process.cwd()
};
const outputOptions = {
  file: path.join(process.cwd(), '/clasp/api.js'),
  format: 'es',
  globals: ['api']
};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);
  console.log(bundle.watchFiles);
  return bundle.write(outputOptions);
}

build();
