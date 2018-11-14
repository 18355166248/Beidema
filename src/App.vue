<template>
  <div id="app">
    <div class="g-fullPage" ref="gFullPage">
      <div class="page1" ref="fPageFirst">
        <first-page :touchNum='touchNum'></first-page>
      </div>
      <div class="page1">
        <twice-page></twice-page>
      </div>
      <div class="page1">
        <third-page :touchNum='touchNum'></third-page>
      </div>
      <div class="page1">
        <fourth-page @showDialog="showDialog"></fourth-page>
      </div>
    </div>

    <!-- 弹窗 -->
    <transition name="fade">
      <template v-if="show">
        <my-dialog :list="list" @changeData="changeData"></my-dialog>
      </template>
    </transition>
  </div>
</template>

<script>
  import firstPage from "components/first-page"
  import twicePage from "components/twice-page"
  import thirdPage from "components/third-page"
  import fourthPage from "components/fourth-page"
  import myDialog from 'components/dialog'

  export default {
    name: "app",
    data() {
      return {
        show: false,
        touchNum: 0,
        wechatList: {url: require('@/assets/wechat1.png'), list: ['长按扫描二维码', '关注法国贝德玛公众号', '申领试用']},
        smallList: {url: require('@/assets/small-p.png'), list: ['长按识别小程序', '查询法国贝德玛线下门店', '预约体验']},
        list: {url: '', list: []}
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.fullPage(4)
      })
    },
    methods: {
      fullPage(num) {
        var that = this,
          startX = 0, //初始横坐标
          startY = 0, //初始纵坐标
          marginTop = 0, //上下滑动变量
          touchNum = null, //上滑极限，是否可以上滑
          touchFlag = true, //可滑动标志 true 可滑动，false 不可滑
          bodyHeight = document.body.offsetHeight,
          page = this.$refs.gFullPage,
          pageFirst = this.$refs.fPageFirst;

        //获取触摸的初识坐标
        page.addEventListener("touchstart", function (e) {
          e.preventDefault();
          startX = e.targetTouches[0].clientX;
          startY = e.targetTouches[0].clientY;
        });
        //重置触摸的坐标值
        page.addEventListener("touchend", function (e) {
          e.preventDefault();
          startX = 0;
          startY = 0;
          touchFlag = true;
        });

        //监听并实现 上、下 滑动效果
        page.addEventListener("touchmove", e => {
          e.preventDefault();
          // var newX = e.targetTouches[0].clientX
          var newY = e.targetTouches[0].clientY;
          if (newY - startY > 40) {
            if (touchFlag == true && touchNum > 0) {
              touchFlag = false;
              marginTop += 1;
              touchNum -= 1;
              pageFirst.style.marginTop = marginTop * bodyHeight + "px";
              
              that.touchNum = touchNum
            }
          } else if (newY - startY < -40) {
            if (touchFlag == true && marginTop > -num + 1) {
              touchFlag = false;
              marginTop -= 1;
              touchNum += 1;
              pageFirst.style.marginTop = marginTop * bodyHeight + "px";
              
              that.touchNum = touchNum
            }
          }
        });
      },
      changeData(name, data) {
        this[name] = data
      },
      showDialog(type) {
        if (type) {
          this.list = this.smallList
        } else {
          this.list = this.wechatList
        }
        this.show = true
      }
    },
    components: {
      firstPage,
      twicePage,
      thirdPage,
      fourthPage,
      myDialog
    }
  };
</script>

<style lang="less">
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .g-fullPage {
      width: 100%;
      height: 100%;
    }
    div.page1 {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 100%;
      transition: 0.5s ease-in;
      position: relative;
      top: 0;
      left: 0;
    }
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .fade-enter-active {
    opacity: 1;
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>