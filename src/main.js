import Vue from 'vue'
import store from './store/index'
import router from './router/index'

// set up extend layout option for the vue
import {
  VueExtendLayout,
  layout
} from 'vue-extend-layout'
import VeeValidate from 'vee-validate'
// Import Vue Tastr plugin for notification
import Toastr from 'vue-toastr'
import VueAuthImage from 'vue-auth-image'
import VueContentPlaceholders from 'vue-content-placeholders'
import './registerServiceWorker'

// Expose all the resources/plugins
import './resources'

import 'bootstrap/scss/bootstrap.scss'
import 'vue-toastr/src/vue-toastr.scss'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

fontawesome.library.add(brands, solid)

require('bootstrap')
require('@/assets/main.js')

Vue.config.productionTip = false
Vue.use(VueAuthImage)
Vue.use(VueExtendLayout)
Vue.use(VeeValidate)
Vue.use(Toastr)
Vue.use(VueContentPlaceholders)

Vue.component('vue-toastr', Toastr)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  ...layout
}).$mount('#app')
