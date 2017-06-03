<template>
  <div id="app">
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/Hu">找胡颖</router-link>
      <router-link to="/Huang">找重庆</router-link>

      <!-- 动态路由显示 -->
      <p>动态路由显示
         <router-link to="/user/去到25栋">有人：去到25栋</router-link>
         <router-link to="/user/去到27栋">有人：去到27栋</router-link>
      </p>
      <!-- 嵌套路由 -->
      <p>嵌套路由
         <router-link to="/user1/中心">有人：中心</router-link>
         <router-link to="/user1/千喜鹤">有人：千喜鹤</router-link>
      </p>
    </p>
    <!-- 编程路由 -->编程路由
    <div @click="goto()">点击：找人</div>
    <div @click="goto1()">记录go():回退两次记录</div>
    <!-- 命名路由 -->
    <p>命名路由
      <router-link :to="{ name: 'index', }">点击回到首页</router-link>
    </p>
    <!-- 重定向和命名 -->
    <p>
      <router-link to="重定向">重定向回重庆</router-link>
    </p>
    <!-- 导航钩子 -->
    <p>导航钩子
      <router-link to="导航钩子">导航钩子：指向牧牧</router-link>
    </p>
    <!-- 路由出口 -->
   <!-- 路由匹配到的组件将渲染在这里 -->
   <!-- 模板里引入router-view -->
    <transition name="fade">
    <router-view class="view one"></router-view>
    </transition>
    <!-- <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
    <router-view class="view four" name="c"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  //
  methods: {
    goto: function () {
      let url = '/lll/' + 1
      // console.log(this.$router)
      this.$router.push({
        path: url
      })
    },
    goto1: function () {
      this.$router.go(-2)
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
