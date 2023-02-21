<template>
    <div class="myt">
    <el-input v-model="input" class="kuang" placeholder="你愁啥" />
    <el-button type="success" round class="ss">搜索</el-button>
    
    </div>
</template>

<script>

export default {
    data(){
        return {
            
        }
    },

    components:{},

    props:{},

    methods:{},

    created(){},

}
</script>

<style lang='less' scoped>
.myt{
height: 50px;
width: 550px;
padding: 25px 0 0 0;
margin: 0 auto;
.ss{
    width: 90px;
    height: 38px;
}
.kuang{
    padding: 0 25px 0 0;
    width: 442px;
    height: 38px;
}
}
</style>