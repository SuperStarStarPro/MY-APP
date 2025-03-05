<!-- 模版 -->
<template>
  <div id="app">


    <img alt="Vue logo" src="./assets/logo.png">

<!-- 组件中添加路由视图 -->
    <nav>
      <router-link to="/BigProps">BigProps</router-link>
      <router-link to="/Event">Event</router-link>
      <router-link to="/index">index</router-link>
      <router-link to="/Props">Props</router-link>
      <router-link to="/Slot">Slot</router-link>
    </nav>
    <router-view> </router-view> <!-- 显示匹配的组件 -->


    {{msg}}

<!-- 组件中添加路由视图 -->
    <div>
      <input type="text" v-model="info">
      <button v-on:click="handleClick">添加</button>

    </div>


    <ul>
      <todo-item v-for="item in list" :key="item">
        <template v-slot:item="itemProps">
        <span  :style="{fontSize:'20px',color: itemProps.checked ? 'red' : 'blue'}">{{item}}</span>
      </template>
      </todo-item>
    </ul>

  </div>
</template>

<!--逻辑 -->
<script>
import TimeDemo from './components/TimeDemo.vue'


export default {
  name: 'App',
  components: {
    TimeDemo, // 注册组件
    
  }
  },
  data() {
    return {
      msg: 'Hello Vue!',
      info: '',
      list: [
      ]
    }
  },
  methods: {
    handleClick() {
      this.list.push(this.info)
      this.info = ''
    }
  },
}
</script>





<!--逻辑 -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
