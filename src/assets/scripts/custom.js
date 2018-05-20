
'use strict'
import $ from 'jquery'

$('[data-toggle=popover]').popover({
  trigger: 'focus',
  template: '<div class="c-popover popover"><div class="c-popover__arrow popover-arrow"></div><div class="c-popover__body popover-body"></div></div>'
})

// $('[data-toggle="datepicker"]').datepicker()

// $('#datatable').DataTable({
//   searching: !1,
//   lengthChange: !1,
//   order: [],
//   ordering: !0,
//   columnDefs: [{
//     orderable: !1,
//     targets: 'no-sort'
//   }]
// })

// Use this with select2 to be installed
// var t = $('.c-select'),
//   e = $('.c-select.has-search'),
//   n = $('.c-select.c-select--multiple'),
//   i = $('.c-select.is-disabled')
// t.select2({
//   width: '100%',
//   minimumResultsForSearch: 1 / 0
// }), e.select2({
//   width: '100%'
// }), n.select2({
//   width: '100%',
//   multiple: !0
// }), i.select2({
//   width: '100%',
//   disabled: !0
// })
