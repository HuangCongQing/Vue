import Vue from 'vue'
import Router from 'vue-router'
// console.log(Vue)

// 我直接写模板，就不引入组件了
// 基础
const Who = { template: '<transition name="slide"><div>首页：这是Who</div></transition>' }
const Hu = { template: '<transition name="slide"><div>这是胡颖</div></transition>' }
const Huang = { template: '<div>这是重庆</div>' }
const Qi = { template: '<div>这是小青</div>' }
// const Yuan = { template: '<div>这是圆哥</div>' }
// const Huang = { template: '<div>这是重庆</div>' }
const MU = { template: '<div>这是牧牧</div>' }
const Tan = { template: '<div>这是唐燕</div>' }
const Bai = { template: '<div>这是白帮议</div>' }
const Yang = { template: '<div>这是杨怡</div>' }
// 动态路由匹配模板
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
// 嵌套路由模板
const User1 = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
const people1 = {
  template: '<div>牧牧去{{ $route.params.id }}</div>'
}
const people2 = {
  template: '<div>people2 {{ $route.params.id }}</div>'
}
//
// 如果使用模块化机制编程,要调用 Vue.use(Router)
// .use(插件)，引入插件
Vue.use(Router)

export default new Router({
  // history模式
  mode: 'history',
  routes: [
  // 这里面的组件都通过<router-view></router-view>渲染出来
    {
      // 直接进入界面就能看到
      path: '/',
      name: 'index',
      components: {
        default: Who,
        a: Tan,
        b: Bai,
        c: Yang
      }
    },
    {
      path: '/Hu',
      name: 'Hu',
      component: Hu
    },
    {
      path: '/Huang',
      name: 'Huang',
      component: Huang
    },
    // 动态路径参数 以冒号开头
    { path: '/user/:id',
      name: 'user',
      component: User
      // beforeEnter: (to, from, next) => {
      //   // next(false)
      // }
    },
    // 嵌套路由
    { path: '/user1/:id',
      component: User1,
      children: [
        {
          // 当 /user1/:id/ 匹配成功，
          // people1 会被渲染在 User1 的 <router-view> 中
          path: '/',
          component: people1
        },
        {
          // 当 /user1/:id/people2 匹配成功
          // people2 会被渲染在 User 的 <router-view> 中
          path: '/people2',
          component: people2
        }
      ]
    },
    // 编程路由
    // path路径和goto函数里的路径相同
    { path: '/lll/1',
      component: Qi
    },
    // 重定向和命名
    {
      path: '/重定向',
      redirect: '/Huang'
    },
    // 导航钩子
    {
      path: '/导航钩子',
      component: MU,
      beforeEnter: (to1, from, next) => {
        next('/Huang')
        console.log('asdf')
        next('/Hu')
        next(false)
        next('/Tan')
        // to.path = "/Hu"
        // console.log(to1)
        // console.log(from)
        // console.log(next)
        // next('/Huang')// 指向首页
        // console.log(next)
      }
    }
  ]
  // 滚动行为
  // scrollBehavior (to, from, savedPosition) {
  //   // return 期望滚动到哪个的位置
  //   console.log(to)
  //   console.log(from)
  //   console.log(savedPosition)
  //   if (savedPosition) {
  //     // savedPosition is only available for popstate navigations.
  //     return savedPosition
  //   } else {
  //     const position = {}
  //     // new navigation.
  //     // scroll to anchor by returning the selector
  //     if (to.hash) {
  //       position.selector = to.hash
  //     }
  //     // check if any matched route config has meta that requires scrolling to top
  //     if (to.matched.some(m => m.meta.scrollToTop)) {
  //       // cords will be used if no selector is provided,
  //       // or if the selector didn't match any element.
  //       position.x = 0
  //       position.y = 0
  //     }
  //     // if the returned position is falsy or an empty object,
  //     // will retain current scroll position.
  //     return position
  //   }
  // }
})
// export default VueRouter
// VueRouter.beforeEach((to, from, next) => {
//   console.log(from)
//   next('/Mu')
// })
// VueRouter.beforeEach((to, from, next) => {
//   console.log('asdfg111111')
// })
// VueRouter.beforeEach((to, from, next) => {
//   console.log('asdfghhhhhhhhhh')
// })
