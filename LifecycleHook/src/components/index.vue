<template>
	<div class="First">
		<h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in list">
        <h1>{{item.title}}</h1>
        <img :src="item.images[0] | imgfilter">
      </li>
    </ul>
	</div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'First',
  data () {
    return {
      msg: '黄重庆，笑口常开，好彩自然来！。。。',
      list: [] // return出去
    }
  },
  created () {
    var _this = this
    axios.get('/api/4/news/latest')
    .then(function (res) {
      var data = res.data.stories
      console.log(_this)
      _this.list = data
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  filters: {
    imgfilter (url) {
      return 'https://images.weserv.nl/?url=' + url.slice(7)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
