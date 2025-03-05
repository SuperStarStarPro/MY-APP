<template>
    <div class="big-props">
      <h2>{{ title }}</h2>
      <p>用户年龄: {{ user.age }}</p>
      <p>用户职业: {{ user.occupation }}</p>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      user: {
        type: Object,
        default: () => ({ age: 18, occupation: '未设置' })
      },
      items: {
        type: Array,
        default: () => []
      }
    }
  }
  </script>