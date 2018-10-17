// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import VueSweetalert2 from 'vue-sweetalert2'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import DatePicker from 'vue-md-date-picker'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueResource)
Vue.use(DatePicker)
Vue.use(require('vue-moment'))
Vue.use(VueSweetalert2)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
