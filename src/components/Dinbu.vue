<template>
  <div class="dinbu">
    <div class="w">
      <ul>
        <li v-if="userinfo.to">
          <a href="https://juejin.cn/post/6844903520441729037">{{userinfo.to}}</a>
        </li>
        <li v-else>
          <a href="https://juejin.cn/post/6844903520441729037">登录/注册</a>
        </li>
        <li>
          <a href="https://juejin.cn/post/6844903520441729037">我的订单</a>
        </li>
        <li><a href="javascript:;">反馈</a></li>
        <li>
          <a href="#">
            <i class="iconfont icon-shouji1"></i>
            APP
            </a
          >
        </li>
      </ul>
    </div>
   
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
export default {
setup(props) {
  const store= useStore();
  let userinfo=computed(()=>{
    return store.state.user.userinfo
  })
return {userinfo}
},

  data() {
    return {};
  },

  components: {},

  props: {},

  methods: {
    
  },

  created() {},
};
</script>

<style lang="less" scoped>
.dinbu {
  background-color: #333;
  ul {
    display: flex;
    height: 53px;
    line-height: 53px;
    justify-content: flex-end;
    li {
      list-style-type: none;

      a {
        color: azure;
        padding: 0 10px;
        border-left: 1px solid #ccc;
        &:hover {
          color: @xtxColor;
        }
      }
    }
    li:nth-child(1) {
      a {
        border-left: 0;
      }
    }
  }
}
</style>
