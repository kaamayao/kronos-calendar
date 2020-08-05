import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import VueDayjs from 'vue-dayjs-plugin'
import calendarService from './service/calendarService/calendarService.js'

Vue.$calendarService = calendarService;

Object.defineProperty(Vue.prototype, '$calendarService', {
  get () {
    return calendarService
  }
})

Vue.config.productionTip = false

Vue.use(VueDayjs);

Vue.mixin({
  methods: {
    createArray(size) {
      return Array.from(Array(size).keys());
    },
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
