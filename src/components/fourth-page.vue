<template>
  <div>
    <div class="title">
      <div>贝德玛舒妍修护爽肤水</div>
      <div>专用生物纤维膜布</div>
    </div>
    <div aspectratio class="content-1 marginAuto" w-519-137>
      <div aspectratio-content>
        <img :src="require('@/assets/4-1.png')" class="w100">
      </div>
    </div>
    <div class="box">
      <div aspectratio class="marginAuto gif" w-708-407>
        <div aspectratio-content class="gif-one">
          <img :src="require('@/assets/4-2.gif')" class="gif-two">
        </div>
      </div>
      <span class="two-bgc" :style="{backgroundImage: 'url(' + require('@/assets/1-5.png') + ')'}"></span>
    </div>
    <div class="content-2">抢先体验舒妍修护限量套装</div>
    <div class="button" style="margin-bottom: 43px;">
      <div class="button-one" @touchstart="$emit('showDialog', 0)">
        申领试用
      </div>
    </div>
    <div class="button">
      <div class="button-one" @touchstart="$emit('showDialog', 1)">
        预约线下体验
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    },
    components: {
      
    }
  }
</script>

<style scoped lang='less'>
  [w-519-137] {
    width: 519px;
    overflow: hidden;
  }
  [w-519-137] {
    aspect-ratio: '519:137';
  }
  [w-708-407] {
    width: 708px;
    overflow: hidden;
  }
  [w-708-407] {
    aspect-ratio: '708:407';
  }
  .title {
    font-size: 35px;
    font-family: '华文黑体';
    > div:first-child {
      padding: 60px 0 22px 0;
    }
    > div:last-child {
      color: #536782;
    }
  }
  .content-1 {
    margin-top: 75px;
    margin-bottom: 65px;
  }
  .box {
    position: relative;
    .gif {
      box-shadow: 3px 7px 6px rgb(197, 197, 197);
      .gif-one {
        line-height: 407px;
        display: flex;
        justify-content: center;
        align-items: center;
        .gif-two {
          width: 689px;
        }
      }
    }
    .two-bgc {
      display: inline-block;
      width: 178px;
      height: 261px;
      position: absolute;
      left: -24px;
      top: 369px;
      z-index: -1;
    }
  }
  .content-2 {
    margin-top: 126px;
    margin-bottom: 60px;
    text-align: center;
    font-size: 35px;
    color: #536782;
    font-family: '华文黑体';
  }
  .button {
    .button-one {
      margin: 0 auto;
      width: 453px;
      height: 97px;
      background-color: #536782;
      color: #fff;
      line-height: 97px;
      font-size: 35px;
      font-family: '华文黑体';
      box-shadow: 5px 8px rgba(7, 45, 94, .3);
    }
  }
</style>
