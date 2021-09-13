const path = require('path');
const {
  merge
} = require('webpack-merge');
const common = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = merge(common, {
  entry: {
    index: './demo/index.js'
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.join(__dirname, '../demo/dist'),
    clean: true
  },
  resolve: {
    alias: {
      '@': '/demo/assets/',
      '~': '/demo/component/',
      'pages': '/demo/pages/'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          limit: 5000,
          name: 'imgs/[hash].[ext]'
        }
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.s[ac]ss$/i,
      use: [
        // 将 JS 字符串生成为 style 节点
        'style-loader',
        // 将 CSS 转化成 CommonJS 模块
        'css-loader',
        // 将 Sass 编译成 CSS
        'sass-loader',
      ],
    }, ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './demo/index.html'
    }),
    new VueLoaderPlugin()
  ],
});