<template>
  <div>
    <a class="jl">
    <h3 class="h31">新品首发</h3>
    <p >为你寻觅世间好物</p>
    </a>
    <div
      class="fzj"
      v-for="item in dd"
      :key="item"
     
    >
        
      <div class="drg1"  @mouseover="showHover = true"
      @mouseleave="showHover = false">
        <img :src="item.t1" class="qm-img"  v-if="showHover" alt="" />
        <img :src="item.t1s" class="qm-img"  alt="" v-else />
      </div>
      <div class="drg2"  @mouseover="showHoverq = true"
      @mouseleave="showHoverq = false">
      <div>
        <img :src="item.t2" class="qm-img"  v-if="showHoverq" alt="" />
        <img :src="item.t2s" class="qm-img"  alt="" v-else />
        </div>
      </div>
      <div class="drg3"  @mouseover="showHover3 = true"
      @mouseleave="showHover3 = false">
        <img :src="item.t3" class="qm-img"  v-if="showHover3" alt="" />
        <img :src="item.t3s" class="qm-img"  alt="" v-else />
      </div>
      <div class="drg4"  @mouseover="showHover4 = true"
      @mouseleave="showHover4 = false">
        <img :src="item.t4" class="qm-img"  v-if="showHover4" alt="" />
        <img :src="item.t4s" class="qm-img"  alt="" v-else />
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      showHover: false,
      showHoverq: false,
      showHover3: false,
      showHover4: false,

      dd: [
        { t1s: require("@/assets/00724305b7653c0699dd7e2bd3fa5d51.webp") },
        { t1: require("@/assets/8085f5bc74c0c05f55a76d8120287cae.webp") },
        { t2s: require("@/assets/027e3e9e244859b31904abb49d97165b.webp") },
        { t2: require("@/assets/244b4df74c85419feb671218d06538d8.webp") },
        { t3s: require("@/assets/d210f5d984e6d72a1457f46f32c748a8.webp") },
        { t3: require("@/assets/640227d7ec30bf78113cda2e3d4c2e95.webp") },
        { t4s: require("@/assets/bbab8f85d69ee64320c796a315573ab2.webp") },
        { t4: require("@/assets/758818c96ab057c0d728441ec7dd877d.webp") },
        
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
  float: left;
  .drg1{
    position: inherit;
    width: 265px;
    height: 265px;
    margin: 20px 0 0 150px;
  }
  .drg2{
position: inherit;
margin: 20px 0 0 800px;
  }
  .drg3{
position: inherit;
margin: 20px 0 0 450px;
  }
  .drg4{
position: inherit;
margin: 20px 0 0 1100px;
  }
  
}
.qm-img{
    opacity: 1;

}
.jl{

    padding: 0 0 0 500px;
}
.h31{
    float: left;
    font-size:28px;
    padding: 25px 0 0 55px;
    
}
p{
    font-size: 14px;
    padding: 20px 0 0 190px;
}

</style>
