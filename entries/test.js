/**
 *  creator: zheng
 *  date: 2017/10/15
 *  email: zhenglfsir@gmail.com
 */
import testHelpers from '~src/test/test-helper.hbs'

$(function () {
  $('#app').append(testHelpers({
    array: ['zheng', 1, {name: 'zs', age: 12}]
  }))
})
