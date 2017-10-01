import './src/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import template from './src/main/template.hbs'
import sidebars from './src/common/sidebars.hbs'
import list from './src/common/list-item.hbs'

$('#index').html(template({
  user: {
    name: 'jack',
    info: [
      {status: 'leaving'}
    ]
  },
  sidebars: sidebars({
    title: '我是侧边栏'
  }),
  list: list({
    list: [
      {name: 'zhengsan1', age: 12, id: 1},
      {name: 'zhengsan2', age: 13, id: 2},
      {name: 'zhengsan3', age: 14, id: 3},
      {name: 'zhengsan4', age: 15, id: 4},
      {name: 'zhengsan5', age: 16, id: 5}
    ]
  })
}))

$('#btn').on('click', function () {
  $('#box').html(list({
    list: [
      {name: 'list', age: 15, id: 4},
      {name: 'www', age: 16, id: 5}
    ]
  }))
})
