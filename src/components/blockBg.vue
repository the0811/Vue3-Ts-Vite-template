<template>
  <div class="blockBox">
    <div class="blockTitle"
         v-if="title">
      <span>{{ title }}</span>
    </div>
    <div class="blockBgBox">
      <div class="blockBgTop"></div>
      <div class="blockBgMid"></div>
      <div class="blockBgBot"></div>
      <div class="blockCont">
        <slot name="blockCont"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.blockBox {
  min-height: 120px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  position: relative;
}

.blockTitle {
  text-align: center;
  height: 18px;
  position: absolute;
  top: 20px;
  left: 30px;
  z-index: 2;

  span {
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #ffffff;
    line-height: 36px;
    background: linear-gradient(0deg, #76c0ff 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.blockBgBox {
  position: relative;
  width: 100%;
  display: flex;
  height: 100%;
  overflow: hidden;
  .blockBgTop {
    width: 100%;
    position: absolute;
    top: 0px;
    height: 85px;
    background: url('@imgs/home/left_Top.png') no-repeat;
    background-size: 100% 100%;
  }
  .blockBgMid {
    width: 100%;
    position: absolute;
    top: 85px;
    bottom: 57px;
    background: url('@imgs/home/left_Mid.png') no-repeat;
    background-size: 100% 100%;
  }
  .blockBgBot {
    width: 100%;
    position: absolute;
    bottom: 0px;
    height: 57px;
    background: url('@imgs/home/left_Bot.png') no-repeat;
    background-size: 100% 100%;
  }
  .blockCont {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    z-index: 2;
  }
}
</style>