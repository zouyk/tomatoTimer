<template>
  <div>
    <span class="timerstlyl">{{ tomatoTime }}</span>
    <Btnoff :theme="0" :isPress="isPress" :onPressedChange="pressedChange" />
  </div>
</template>

<script>
import Btnoff from "./Btnoff";
import { mapState } from "vuex";
import * as types from "@/store/mutation-types";
export default {
  components: {
    Btnoff,
  },
  computed: {
    ...mapState({
      tomatoTime: "tomatoTime",
      isPress: (state) => {
        //如果当前没有计时器
        if (state.currentCounter === null) {
          return false;
        }
        //如果当前有计时器
        if (state.currentCounter.type === 0) {
          return true;
        }
        return false;
      },
    }),
  },
  methods: {
    pressedChange(toisPress) {
      if (toisPress) {
        //按下
        console.log("点击按钮");
        this.$store.dispatch(types.START_COUNTING, 0);
      } else {
        //抬起按钮
        this.$store.commit(types.SET_COUNTER_TIMER, null);
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>