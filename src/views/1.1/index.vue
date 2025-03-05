<template>
    <div class="container">
      <h1>组件演示</h1>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    // 可以在这里引入其他组件
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>