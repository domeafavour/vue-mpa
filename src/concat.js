import Vue from 'vue'
import Concat from './Concat.vue'
import router from './router/login'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Concat/>',
  router,
  components: { Concat }
})
