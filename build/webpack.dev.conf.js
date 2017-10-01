const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const fs = require('fs')

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev.client'].concat(
    baseWebpackConfig.entry[name])
})

let htmls = fs.readdirSync(path.resolve(__dirname, '..'))
  .filter(cv => cv.endsWith('.html'))
const prefix = './'
htmls = htmls.map(function (html) {
  return new HtmlWebpackPlugin({
    filename: prefix + html,
    template: prefix + html,
    inject: true,
    chunks: [html.split('.')[0]]
  })
})

module.exports = merge(baseWebpackConfig, {
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ].concat(htmls)
})