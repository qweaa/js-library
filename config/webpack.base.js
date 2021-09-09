const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  mode: 'development',
  resolve: {},
  devtool: 'source-map',
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
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          cacheDirectory: true,
        }
      }
    }]
  },
}