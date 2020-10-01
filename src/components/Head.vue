<template>
  <div class="head">
    <p class="boxcenter">
      <img src="@/assets/images/tomato.png" alt /> itsource.cn
    </p>
    <button class="boxcenter">
      <img src="@/assets/images/set.png" alt /><span class="setting-text">设置</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.head {
  width: 620px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.10);
  p {
    font-size: 20px;
  }
  button {
   
    height: 34px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-size: 16px;
    outline: none;
  }
}
@media screen and (max-width: 600px){
    .setting-text {
      display: none;
    }
}
</style>