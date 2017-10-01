const merge = require('webpack-merge')
const proEnv = require('./prod.env')

module.exports = merge(proEnv, {
  NODE_ENV: '"development"'
})