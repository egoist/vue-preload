import Vue from 'vue'
import VuePreload from '../vue-preload'
import fetch from 'superagent'
if (location.hostname === 'localhost') {
  Vue.config.debug = true
  window._ = Vue.util
}
Vue.use(VuePreload, {
  showProgress: true,
  onStart() {
    console.log('start')
  },
  onEnd() {
    console.log('end')
  }
})
new Vue({
  el: '#app',
  data() {
    return {
      leftTip: null,
      rightTip: null
    }
  },
  methods: {
    handlePreload(pr, e) {
      fetch.get('http://lib.avosapps.com/tips')
        .end((err, res) => {
          pr.set({rightTip: JSON.parse(res.text)})
          pr.end()
        })
    },
    handleLoad() {
      fetch.get('http://lib.avosapps.com/tips')
        .end((err, res) => {
          this.leftTip = JSON.parse(res.text)
        })
    }
  }
})
