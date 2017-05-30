// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    msg: 'Lifecycle'
  },
  methods: {
    getList () {
      return 'getList调用'
    }
  },
  beforeCreate () {
    // console.log('beforeCreate', this.msg, this.getList())
  },
  created () {
    console.log('Created', this.msg, this.getList())
  },
  beforeMount () {

  },
  mounted () {

  },
  beforeUpdate () {

  },
  updated () {

  },
  beforeDestroy () {

  },
  destroyed () {

  },
  activated () {

  },
  deactivated () {

  }
})
