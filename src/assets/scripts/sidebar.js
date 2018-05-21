/**
 * Sidebar toggle function to use this function
 * import Sidebar from @here and then intialize using Sidebar()
 */
'use strict'

import $ from 'jquery'

let Sidebar = function () {
  let $document = $(document)
  let $sidebar = $('.js-page-sidebar')

  $('.c-navbar').on('click', '.c-sidebar-toggle', function (e) {
    $('.js-page-sidebar').addClass('is-visible')
    return false
  })

  $document.on('click', function (e) {
    let $target = $(e.target)
    $($target).closest($sidebar).length || $sidebar.removeClass('is-visible')
  })
}

export default Sidebar
