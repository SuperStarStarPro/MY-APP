<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- 优化后的导航路由 -->
    <nav>
      <router-link 
        v-for="route in routes" 
        :key="route.path" 
        :to="route.path"
      >
        {{ route.name }}
      </router-link>
    </nav>
    <router-view />

    <!-- 消息展示 -->
    <div class="message">{{ msg }}</div>

    <!-- 带验证的输入组件 -->
    <div class="input-group">
      <input 
        type="text" 
        v-model.trim="info" 
        placeholder="请输入内容"
        @keyup.enter="handleClick"
      >
      <button 
        :disabled="!infoValid" 
        @click="handleClick"
      >
        添加
      </button>
    </div>

    <!-- 优化后的列表渲染 -->
    <ul v-if="hasItems">
      <todo-item 
        v-for="(item, index) in list" 
        :key="`item-${index}`"
      >
        <template v-slot:item="{ checked }">
          <span 
            class="item-text"
            :class="{ active: checked }"
          >
            {{ item }}
          </span>
        </template>
      </todo-item>
    </ul>
    <p v-else class="empty-tip">暂无数据</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // 移除未使用的TimeDemo组件
  },
  data() {
    return {
      msg: 'Hello Vue!',
      info: '',
      list: [],
      routes: [
        { name: 'BigProps', path: '/BigProps' },
        { name: 'Event', path: '/Event' },
        { name: 'index', path: '/index' },
        { name: 'Props', path: '/Props' },
        { name: 'Slot', path: '/Slot' }
      ]
    }
  },
  computed: {
    infoValid() {
      return this.info.length > 0 && !this.list.includes(this.info)
    },
    hasItems() {
      return this.list.length > 0
    }
  },
  methods: {
    handleClick() {
      try {
        if (!this.infoValid) {
          if (this.info) {
            alert('不能添加重复内容')
          }
          return
        }
        
        this.list = [...this.list, this.info] // 保持数据不可变
        this.info = ''
      } catch (error) {
        console.error('添加操作失败:', error)
        alert('操作失败，请重试')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-group {
  margin: 20px 0;
}

.item-text {
  font-size: 20px;
  color: blue;
}

.item-text.active {
  color: red;
}

.empty-tip {
  color: #999;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
