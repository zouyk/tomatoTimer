<template>
  <div class="btn_box">
    <button
      class="btn_span"
      :class="{ 'conterBtn-pressed': isPress }"
      :style="fontC"
      @click="bandleBtnClick"
    >
      {{ isPress ? "停止" : "开始" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isPress: {
      //按鈕是否被按下
      type: Boolean,
      required: true,
    },
    theme: {
      //按鈕的主題
      type: Number,
      default: 0,
    },
    onPressedChange: {
      //按鈕狀態的回調
      type: Function,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    fontC() {
      let color;
      switch (this.theme) {
        case 0:
          color = "#f05b56";
          break;
        case 1:
          color = "#4ca6a9";
          break;
        case 2:
          color = "#498fc1";
          break;
        default:
          color = "#f05b56";
          break;
      }
      return { color };
    },
  },
  methods: {
    bandleBtnClick() {
      //当点击按钮时
      let isPress = !this.isPress;
      this.onPressedChange(isPress)
    },
  },
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
  outline: none;
  border: none;

  box-shadow: rgb(235, 235, 235) 0 6px 0;
  transition: color 0.5s ease-in-out;
  transform: none;
}
.conterBtn-pressed {
  box-shadow: none;
}
</style>