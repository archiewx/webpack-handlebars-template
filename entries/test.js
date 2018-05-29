/**
 *  creator: zheng
 *  date: 2017/10/15
 *  email: zhenglfsir@gmail.com
 */
import '~src/cascade.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'font-awesome/css/font-awesome.min.css'
import testHelpers from '~src/test/test-helper.hbs'

$(function () {
  $('#app').append(testHelpers({}))
  $('.cascade').find('input').on('focus', function () {
    $(this).next().show()
  })
  $('.cascade').find('input').on('blur', function () {
    $(this).next().hide()
  })
  $('.cascade').find('li').on('mouseover', function () {
    $(this).addClass('active')
  })
  $('.cascade').find('li').on('mouseout', function () {
    $(this).removeClass('active')
  })
  $('.cascade').find('li').on('click', function () {
    console.log('click')
    $('.cascade').find('input').val('3/32')
  })
})
