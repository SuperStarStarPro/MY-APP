<template>
    <div>
        <p>props.info:{{ info }}</p>
        <p>props.name:{{ name }}</p>
        <p>props.list:{{ list }}</p>
        <p>data.a:{{ a }}</p> <!-- 注意这里应该是 data.a -->
        <p>data.b:{{ b }}</p> <!-- 添加对 b 的显示 -->
        <p>
            <button @click="handleBChange">change data.b</button>
        </p>
    </div>
</template>
<script>
export default {
  name: 'PropsAndData',
  props: {
    info: Object,
    name: String,
    list: Array
  },
  data() {
    return {
        a: "hello",
        b: "" // 添加 b 的初始值
    };
  },
  updated() {
    console.log("触发 PropsAndData 更新");
  },
  methods: {
    handleBChange() {
        this.b = "vue" + Date.now();
        console.log("data.b 发生了变化，会触发组件更新", this.b);
    }
  }
}
</script>
