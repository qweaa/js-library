const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false,
      terserOptions: {
        // 删除注释
        output: {
          comments: false
        },
        // 删除console
        compress: {
          warnings: false,
          drop_console: true, //console
        }
      }
    })],
  },
});