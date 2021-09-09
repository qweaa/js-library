const path = require('path');
const {
  merge
} = require('webpack-merge');
const common = require('./webpack.base');

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'xfzhUtils.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    library: {
      name: 'xfzhUtils',
      type: 'umd',
    },
  },
});