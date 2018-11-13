<template>
  <div>
    <div>
      <img :src="titleUrl" class="header-title">
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
      <video-player  class="vjs-custom-skin"
                         ref="videoPlayer"
                         :options="playerOptions"
                         :playsinline="true">
          </video-player>
    </div>
    <div class="footer">
      <div class="text">其实</div>
      <div class="text">缺乏安全感</div>
      <div class="text">并不如想象中那般如临大敌</div>
      <div class="text-two">
        <span>告别不安</span><span>很简单</span>
      </div>
      <div class="foot-bgc" :style="{backgroundImage:'url('+require('@/assets/1-5.png')+')'}"></div>
    </div>
    <!-- 向下箭头 -->
    <arrow-down></arrow-down>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import "./custom-theme.css";
import { videoPlayer } from "vue-video-player";
import arrowDown from "components/down";

export default {
  data() {
    return {
      titleUrl: require("@/assets/logo.png"),
      list: [
        { url: require("@/assets/1-1.png") },
        { url: require("@/assets/1-2.png") },
        { url: require("@/assets/1-3.png") }
      ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "https://upload.cdn.be-xx.com/bioderma/video/video1.mp4"
          }
        ],
        poster: require("@/assets/1-4.png"), //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  mounted() {},
  computed: {
    player() {
      console.log(213);
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {},
  components: {
    videoPlayer,
    arrowDown
  }
};
</script>

<style scoped lang='less'>
.header-title {
  margin: 60px 0 47px;
  display: inline-block;
  width: 314px;
  height: 30px;
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
    height: 375px;
    overflow: hidden;
  }
}
.footer {
  margin-top: 35px;
  text-align: center;
  font-size: 28px;
  font-family: "华文细黑";
  position: relative;
  > div {
    &.text {
      margin-bottom: 30px;
    }
    &.text-two {
      color: #5e7692;
      font-size: 40px;
      padding-top: 26px;
      span:first-child {
        margin-right: 15px;
      }
    }
  }
  .foot-bgc {
    width: 178px;
    height: 261px;
    left: 6px;
    top: 96px;
    position: absolute;
  }
}
</style>
