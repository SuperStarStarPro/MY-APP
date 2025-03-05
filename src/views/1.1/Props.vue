<template>
    <div class="props-demo">
      <p>消息：{{ message }}</p>
      <p>计数：{{ count }}</p>
      <p>是否有效：{{ isValid ? '是' : '否' }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: String,
      count: Number,
      isValid: Boolean
    }
  }
  </script>