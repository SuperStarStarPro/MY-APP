<template>
    <div>
        <p>Reversed message1:"{{  reversedMessage1 }}"</p>
        <p>Reversed message2:"{{  reversedMessage2 }}"</p>
        <p>{{ now }}</p>
        <button @click="$forceUpdate()">forceUpdate</button>
        <br />
        <input v-model="message" />
    </div>
</template>

<script>
    export default {
        data() {    
            return {
                message1: 'Hello World',
                message2: 'Goodbye World',
                now: new Date().toLocaleString()
            };
        },  

        computed: {
            //计算属性 getter
            reversedMessage1:function() {
                console.log("执行reversedMessage1计算属性");
                return this.message
                    .split('')
                    .reverse()
                    .join('');
            },
            now:function() {
                console.log("执行now计算属性");
                return Date.now();
            }
        },  
        methods: {
            reverseMessage2() {
                console.log("执行reverseMessage2方法");
                return this.message
                    .split('')
                    .reverse()
                    .join('');
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>    