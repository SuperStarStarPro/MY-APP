<template>
    <div>
        <PersonalInfo 
        v-model="phoneInfo"
        required
        :validata = "validata"
        message="手机号为空或不合法"
        :zip-code.sync="zipCode"
        />
        
        phoneInfo: {{ phoneInfo }}
        <br/>
        zipCode: {{ zipCode }}
    </div>
</template>


<script>
import PersonalInfo from './PersonalInfo.vue';

export default {
    components: {
        PersonalInfo
    },
    //定义数据
    data() {
        return {
            phoneInfo: {
                areaCode: "+86",
                phone: ""
            },
            zipCode: ""
        };
    },
    //定义方法
    methods: {
             handleError(err) {
            this.error = err;
            // 这里可以增加更多的错误处理逻辑,比如显示错误提示给用户
            console.error('Error from PersonalInfo component:', err);
        }
    }
};
</script>
