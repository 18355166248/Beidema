<template>
  <div>
    <div class="title">
      <img src="@/assets/logo.png" alt="logo">
    </div>
    <ul class="reveal">
      <li v-for="item in list" :key="item.url" class="fl">
        <img :src="item.url">
      </li>
    </ul>
    <div class="title2">
      <span>生活</span><span>会遭遇不安和敏感</span>
    </div>
    <div class="video">
      <video class="video" id="video1" src="https://upload.cdn.be-xx.com/bioderma/video/video1.mp4" poster="@/assets/1-4.png" preload="auto" controls="" x5-playsinline="" playsinline="" webkit-playsinline=""></video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { url: require("@/assets/1-1.png") },
        { url: require("@/assets/1-2.png") },
        { url: require("@/assets/1-3.png") }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang='less'>
.title {
  img {
    display: inline-block;
    width: 314px;
    height: 30px;
    margin: 60px 0 47px;
  }
}
.reveal {
  overflow: hidden;
  padding: 0 25px;
  li {
    width: 232px;
    margin-right: 2px;
    img {
      width: 100%;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
.title2 {
  margin: 47px 0;
  span {
    font-size: 30px;
    font-family: Verdana, "华文细黑";
  }
  span:first-child {
    margin-right: 10px;
  }
}
.video {
  width: 100%;
  video {
    width: 100%;
  }
}
</style>
