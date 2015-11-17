var Vue = require('vue')
var fetch = require('superagent')
Vue.config.debug = true
Vue.directive('preload', require('../lib/index').directive)
new Vue({
  el: '#app',
  data: function () {
    return {
      leftTip: null,
      rightTip: null
    }
  },
  methods: {
    handlePreload: function (pr, e) {
      fetch.get('http://lib.avosapps.com/tips')
        .end(function(err, res) {
          pr.set({rightTip: JSON.parse(res.text)})
          pr.end()
        })
    },
    handleLoad: function () {
      fetch.get('http://lib.avosapps.com/tips')
        .end(function(err, res) {
          this.leftTip = JSON.parse(res.text)
        }.bind(this))
    }
  }
})
