import Vue from 'vue'
import App from './App.vue'
const VueInputMask = require('vue-inputmask').default
import VueMask from 'v-mask'
Vue.use(VueMask);
 
Vue.use(VueInputMask)

Vue.config.productionTip = false

Vue.directive('summ', {
  bind (el) {
    el.oninput = function (e) {
      if (!e.isTrusted) {
        return
      }

      const x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})/)

      this.value = x[8] ? x[1] + x[2] + ' ' + x[3] + x[4] + x[5] + ' ' + x[6] + x[7] + x[8] : x[7] ? x[1] + ' ' + x[2] + x[3] + x[4] + ' ' + x[5] + x[6] + x[7] : x[6] ? x[1] + x[2] + x[3] + ' ' + x[4] + x[5] + x[6] : x[5] ? x[1] + x[2] + ' ' + x[3] + x[4] + x[5] : x[4] ? x[1] + ' ' + x[2] + x[3] + x[4] : x[1] + x[2] + x[3]
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
