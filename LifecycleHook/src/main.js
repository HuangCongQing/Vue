// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
console.log(Vue)
import App from './App'
import router from './router'

import Resource from 'vue-resource'
Vue.use(Resource)

let url = 'http://rapapi.org/mockjs/19895'
// 'http://news-at.zhihu.com/api/7/prefetch-launch-images/1080*1920'

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  // el: '#app',
  router,
  // template: '<App/>',
  components: { App },
  data: {
    msg: 'Lifecycle',
    imgs: null,
    arr: [2, 4, 7]
  },
  methods: {
    getList () {
    // return 'getList调用'
      this.$http.post(url).then(res => {
        // 请求数据，此方法在beforeCreated无法识别
        console.log(res.data)
        this.message = res.data.msg
      })
    },
    init () {
      // do something,
    }
  },
  beforeCreate () {
    // console.log('beforeCreate', this.msg, this.getList())
  },
  created () {
    // 异步数据的请求适宜在created的钩子中,还有初始化
    console.log('Created', this.msg, this.getList())
    this.getList()
    this.init()
    // console.log('Created', document.querySelectorAll('li'))
    // 模拟异步,数据更新
    setTimeout(() => {
      this.arr = [4.5, 5.0, 6.0, 7.0]
      // console.log(document.querySelectorAll('li'))
      this.$nextTick(() => {
        console.log('nextTick', document.querySelectorAll('li'))
      })
    }, 0)
    setTimeout(() => {
      this.arr = [4.5, 5.0, 6.0, 7.0, 1234]
      // console.log(document.querySelectorAll('li'))
      this.$nextTick(() => {
        console.log('nextTick', document.querySelectorAll('li'))
      })
    }, 1000)
  },
  beforeMount () {
    // console.log('beforeMount', document.querySelectorAll('li'))
  },
  mounted () {
    // 初始数据的dom渲染完毕，可以获取到dom
    console.log('mounted', document.querySelectorAll('li'))
  },
  beforeUpdate () {
    console.log('beforeUpdate', document.querySelectorAll('li'))
  },
  updated () {
    // 数据更新完毕：如果对数据更新统一处理在 updated钩子中即可
    // 如果想分别区别不同的数据更新，同时对dom操作，，使用nextTick处理。
    console.log('updated', document.querySelectorAll('li'))
  },
  beforeUpdatereDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  activated () {

  },
  deactivated () {

  },
  // 对具体某个数据变化做统一处理
  watch: {
    'arr': function () {

    }
  }

}).$mount('#app')

vm.$destroy()
