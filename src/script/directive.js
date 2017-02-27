import Vue from 'vue'
import _$ from 'jquery'

Vue.directive('foot', {
  bind: function (el, binding, vnode) {
    _$(el).on('click', function () {
      var page = _$(this).data('page')
      window.location.hash = '#/' + page
      _$(this).addClass('active')
      _$(this).siblings().removeClass('active')
    })
  }
})
