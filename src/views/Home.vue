<template>
  <div class="main" :style="styleColor">
    <!-- 头部样式 -->
    <Head />
    <div class="cont">
      <div class="select_div">
        <div class="btn_div'">
          <router-link
            class="btnstyle"
            to="/tomatotime"
            :class="{avtive:history.currenpage===0}"
          >来次番茄</router-link>
          <router-link class="btnstyle" to="/resttime" :class="{avtive:history.currenpage===1}">休息片刻</router-link>
          <router-link class="btnstyle" to="/halftime" :class="{avtive:history.currenpage===2}">小憩一会</router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
import { mapState } from 'vuex'
export default {
  components: {
    Head,
  },
  computed: {
    ...mapState({
      history:"history",
      styleColor:state=>{
        return {'background-color':state.history.bg}
      }
    }),  
  }
};

</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  transition:background 1s;
  .cont {
    width: 620px;
    height: 356px;
    // background-color: coral;
    padding: 40px 70px 0 70px;
    box-sizing: border-box;
    .select_div {
      padding: 30px 108px 0 108px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      height: 100%;
      .btn_div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

// 选中
.avtive {
  background: rgba(0, 0, 0, 0.15);
}
a {
  text-decoration: none;
}
</style>