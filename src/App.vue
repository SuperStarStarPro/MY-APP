<!-- 模版 -->
<template>
  <div id="app">
    {{msg}}
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
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'App',
  components: {//注册组件
    TodoItem
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
