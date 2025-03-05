<template>
    <div class="event-demo">
      <button @click="handleClick">点击我</button>
      <input 
        type="text" 
        @input="handleInput"
        placeholder="输入内容..."
      />
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick() {
        this.$emit('button-clicked', '按钮被点击')
      },
      handleInput(event) {
        this.$emit('input-changed', event.target.value)
      }
    }
  }
  </script>