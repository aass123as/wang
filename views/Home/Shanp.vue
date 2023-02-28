<template>
  <div>
    <h3 class="h31">新品首发</h3>
    <p>为你寻觅世间好物</p>
    <div
      class="fzj"
      v-for="item in dd"
      :key="item"
      @mouseover="showHover = true"
      @mouseleave="showHover = false"
    >
        
      <div class="drg">
        <img :src="item.t1s"  v-if="showHover" alt="" />
        <img :src="item.t1" v-else alt="" />

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowHover",
  data() {
    return {
      showHover: false,
      dd: [
        { t1s: require("@/assets/8085f5bc74c0c05f55a76d8120287cae.webp") },
        { t1: require("@/assets/00724305b7653c0699dd7e2bd3fa5d51.webp") },
        
      ],
    };
  },

  components: {},

  props: {},

  methods: {},

  created() {},
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  align-self: 0;
  box-sizing: border-box;
}
.fzj {
  position: absolute;
  height: 265px;
  opacity: 999;
background-color: #333;    
  float: left;
  .drg{
    position: inherit;
    width: 265px;
    height: 265px;
  }
}
.h31{
    float: left;
    font-size:44px;
    padding-left: 20px;
}

</style>
