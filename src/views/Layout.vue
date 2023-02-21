<template>
<div>
    

    <Dinbu/>
    <Mytou/>
    <router-view/>
   </div>
</template>

<script>
import Dinbu from "@/components/Dinbu.vue";
import Mytou from "@/components/Mytou.vue";
export default {
    
    data(){
        return {
            
        }
    },

    components:{
        Dinbu,
        Mytou
    },

    props:{},

    methods:{},

    created(){},

}
</script>

<style lang='less' scoped>
sds{
    background-attachment: fixed;
}
</style>