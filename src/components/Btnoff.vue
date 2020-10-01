<template>
  <div class="btn_box">
    <span class="btn_span" :style="fontC">开始</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
   computed:{
       ...mapState({
           fontC:state=>{
               return {color:state.history.bg}
           }
       })
   }
  //开始还是停止
};
</script>

<style lang="less" scoped>
.btn_box {
  display: flex;
  justify-content: center;
  margin-top: 26px;
}
.btn_span {
  display: inline-block;
  width: 200px;
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  font-size: 22px;
  line-height: 60px;
  text-align: center;
  font-family: PingFangSC-Semibold;
  transition: color 1s;
  // transform: scaleY(1.1);
}
</style>