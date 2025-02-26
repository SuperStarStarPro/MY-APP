<template>
    <div>
        <p>props.info:{{ info }}</p>
        <p>props.name:{{ name }}</p>
        <p>props.list:{{ list }}</p>
        <p>props.a:{{ a }}</p>
        <p>
            <button @click="handleBChande">change data.b</button>
        </p>
    </div>
</template>
<script>
export default {
  name: 'PropsAndData',
  props: {
    info:Object,
    name:String,
    list:Array
  },
  data() {
    return {
        a:"hello",
        b:"world"
    };
},
updated(){
    console.log("触发 PropsAndData 更新");
},
methods: {
    handleBChande() {
        this.b = "vue" + Date.now();
        console.log("data.b 发生了变化，但并没有触发组件更新",this.b);
    }
};
</script>