<template>
  <div>
    <ul class="title">
      <li>法国贝德玛</li>
      <li>舒妍修护限量套装贴心上市</li>
      <li>
        <span>温和舒缓</span><span>/</span><span>水润修护</span>
      </li>
    </ul>
    <div class="aspectratio content-1" w-699-429>
      <div class="aspectratio-content">
        <img :src="require('@/assets/3-1.png')" class="w100">
      </div>
    </div>
    <p class="tutorial"><span>舒妍修护限量套装</span><span>使用教程</span></p>
    <video-player  class="vjs-custom-skin"
                    ref="videoPlayer"
                    :options="playerOptions"
                    :playsinline="true">
    </video-player>
    <arrow-down></arrow-down>
  </div>
</template>

<script>
import arrowDown from 'components/down'
import { videoPlayer } from 'vue-video-player'

export default {
  props: ['touchNum'],
  watch: {
    touchNum(newval) {
      if (newval === 3 || newval === 1) this.player.el_.firstChild.pause()
    }
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4',
            src: 'https://upload.cdn.be-xx.com/bioderma/video/video2.mp4'
          }
        ],
        poster: require('@/assets/videoPoster2.jpg'), //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    }
  },
  mounted() {
    console.log('this is current player instance object 333', this.player)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  components: {
    arrowDown,
    videoPlayer
  }
}
</script>

<style scoped lang='less'>
[w-699-429] {
  width: 699px;
}
[w-699-429] {
  aspect-ratio: '699:429';
}
.title {
  padding-top: 62px;
  font-size: 35px;
  color: #585858;
  font-family: '华文黑体';
  > li {
    margin-bottom: 22px;
  }
  > li:nth-child(3) {
    font-size: 40px;
    color: #536782;
    margin: 0;
    line-height: 40px;
    span:nth-child(2) {
      padding: 0 25px;
    }
  }
}
.content-1 {
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 100px;
}
.tutorial {
  font-size: 35px;
  font-family: '华文黑体';
  color: #536782;
  margin-bottom: 29px;
  span:first-child {
    margin-right: 10px;
  }
}
</style>