/**
 * Sidebar toggle function to use this function
 * import Sidebar from @here and then intialize using Sidebar()
 */
'use strict'

import $ from 'jquery'

let Sidebar = function () {
  let $document = $(document)
  let $sidebar = $('.js-page-sidebar')
  let $sidebarToggle = $('.c-sidebar-toggle')
  let $navbar = $('.c-navbar')
  let $sidebarItem = $('.c-sidebar__item')
  let $sidebarMenu = $('.c-sidebar__submenu')

  $navbar.on('click', function (e) {
    let $target = $(e.target)
    if ($($target).closest($sidebarToggle).length) return $sidebar.addClass('is-visible')
  })
  $sidebarMenu.on('show.bs.collapse', function () {
    $(this).parent($sidebarItem).addClass('is-open')
  })

  $sidebarMenu.on('hide.bs.collapse', function () {
    $(this).parent($sidebarItem).removeClass('is-open')
  })

  $document.on('click', function (e) {
    let $target = $(e.target)
    $($target).closest($sidebar).length || $sidebar.removeClass('is-visible')
  })
}

export default Sidebar
