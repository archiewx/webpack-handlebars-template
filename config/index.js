const path = require('path')
const fs = require('fs')
let htmls = fs.readdirSync(path.resolve(__dirname, '..'))
  .filter(cv => cv.endsWith('.html'))
const suffix = '.vm'
const files = {}
htmls = htmls.map(function (html) {
  const name = html.split('.')[0]
  files[name] = path.resolve(__dirname, '../dist', name + suffix)
})
module.exports = {
  build: Object.assign({
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: true,
    productionGizpExtensions: ['js', 'css'],
    bundleAnlyzerReport: false
  }, files),
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}