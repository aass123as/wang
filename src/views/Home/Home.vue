<template>


<div>
    <div style="text-align: -webkit-center">
      <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    
  >
    <el-menu-item index="1"
    >首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>下拉框</template>
      <el-menu-item index="2-1">
        你</el-menu-item>
      <el-menu-item index="2-2">愁</el-menu-item>
      <el-menu-item index="2-3">啥</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>嘛</template>
        <el-menu-item index="2-4-1">你</el-menu-item>
        <el-menu-item index="2-4-2">愁</el-menu-item>
        <el-menu-item index="2-4-3">啥</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="3">
    <template #title>居家生活</template>
        <el-menu-item index="3-1">你</el-menu-item>
        <el-menu-item index="3-2">愁</el-menu-item>
        <el-menu-item index="2-4-3">啥</el-menu-item>

</el-sub-menu>
    <el-menu-item index="4" #title>数码家电</el-menu-item>
    <el-menu-item index="5" #title>宠物生活</el-menu-item>
    <el-menu-item index="6">服饰鞋包</el-menu-item>
    <el-menu-item index="7">美食酒水</el-menu-item>
  </el-menu>
</div>


    <div class="ds">
   <el-carousel :height="bannerHeight + 'px'" indicator-position="outside">
    <el-carousel-item  v-for="item in ff" :key="item">
        <img style="width: 100%; height: auto;" :src="item.url" alt="" />
    </el-carousel-item>
  </el-carousel>
    </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
          bannerHeight:500,
            ff: [
        { url: require("@/assets/1.png") },
        { url: require("@/assets/2.jpg") },
        { url: require("@/assets/3.jpg") },
        { url: require("@/assets/4.jpg") },
      ],
        }
    },

    components:{},

    props:{},

    methods:{},

    created(){},

}
</script>

<style lang='less' scoped>


.el-menu-demo{

height: 30px;
width: max-content
}

</style>