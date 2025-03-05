<template>
    <div class="slot-demo">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot>默认内容</slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  .slot-demo {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
  }
  </style>