require('eventsource-polyfill')
const hotClient = require(
  'webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  // console.log('[hot client]', event.action)
  if (event.action === 'reload') {
    window.loaction.reload()
  }
})