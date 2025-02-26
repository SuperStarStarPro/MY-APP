<template>
    <div>
        <PersonalInfo v-model="phoneInfo" :zip-code.sync="zipCode" />
        
        <PersonalInfo
        :phone-info="phoneInfo"
        :zip-code="zipCode"
        @change="val => (phoneInfo = val)"
        @updata:ZipCode="val => (zipCode = val)" 
        />

        phoneInfo: {{ phoneInfo }}
        <br/>
        zipCode:{{ zipCode }}
    </div>
</template>
<script>
import PersonalInfo from './PersonalInfo.vue'
export default {
    components: {
        PersonalInfo
    },
    data() {
        return {
            phoneInfo:{
                areaCode:"+86",
                phone:""
            },
            zipCode:""
        };
    }
};

</script>