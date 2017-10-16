import './conf/dependency'
import 'datatables.net/js/jquery.dataTables'
import 'datatables.net-bs/js/dataTables.bootstrap'
import 'datatables.net-bs/css/dataTables.bootstrap.css'
import aside from '~src/main/aside.hbs'
import header from '~src/main/header.hbs'
import content from '~src/main/content.hbs'
import list from '~src/common/list-item.hbs'
import chinese from './conf/chinese.json'

$('#index').append(header({}))
$('#index').append(aside({}))
$('#index').append(content({
  tips: '主页',
  subTips: '数据列表'
}))

$('#btn').on('click', function () {
  $('#box').html(list({
    list: [
      {name: 'list', age: 15, id: 4},
      {name: 'www', age: 16, id: 5}
    ]
  }))
})

$('#data_table').DataTable({
  'paging': true,
  'lengthChange': false,
  'searching': false,
  'ordering': false,
  'info': true,
  'autoWidth': false,
  'language': chinese
})
