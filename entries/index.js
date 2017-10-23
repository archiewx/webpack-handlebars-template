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
  'language': chinese,
  data: [],
  ajax: {
    url: '/test.json'
  },
  serverSide: true,
  columns: [
    {data: 'id'},
    {data: 'name'},
    {data: 'domin'},
    {data: 'email'},
    {data: null}
  ],
  columnDefs: [
    {
      targets: 4,
      render: function (data, type, row, meta) {
        return `
        <a href="javascript:;" class="opt-detail" data-id="${data.id}">详情</a> 
        <a href="javascript:;" class="opt-delete" data-id="${data.id}">删除</a> 
        <a href="javascript:;" class="opt-update" data-id="${data.id}">更新</a> 
        `
      }
    }
  ]
})

$('#data_table').on('click', 'td a.opt-delete', function (ev) {
  const target = ev.target
  console.log('删除的id为', target.dataset.id)
})
$('#data_table').on('click', 'td a.opt-update', function (ev) {
  const target = ev.target
  console.log('更新的id为', target.dataset.id)
})
