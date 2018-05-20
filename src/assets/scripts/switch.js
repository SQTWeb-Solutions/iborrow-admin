/**
 * Switch toggle function to use this function
 * import Swithc from @here and then intialize using Switch()
 */
'use strict'

import $ from 'jquery'

let Switch = function () {
  $('.c-switch').on('click', function (t) {
    var e = $(this).find('.c-switch__input')
    return $(this).hasClass('is-disabled') || ($(this).hasClass('is-active') && e.attr('checked') ? (e.removeAttr('checked'), $(this).removeClass('is-active')) : (e.attr('checked', 'checked'), $(this).addClass('is-active')))
  })
}

export default Switch
