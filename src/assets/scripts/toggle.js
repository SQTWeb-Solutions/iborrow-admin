/**
 * Toggle function to use this function
 * import Toggle from @here and then intialize using Toggle()
 */
'use strict'

import $ from 'jquery'

let Toggle = function () {
  $('.c-toggle').on('click', '.c-toggle__btn', function (t) {
    return $(this).addClass('is-active').siblings().removeClass('is-active')
  })
}

export default Toggle
