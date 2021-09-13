module.exports = {
  mode: 'development',
  devtool: 'source-map',
  stats: 'errors-only',
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