<template>
  <div id="app" class="g-fullPage" ref="gFullPage">
    <div class="f-pageFirst" ref="fPageFirst">
      <first-page></first-page>
    </div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<script>
import firstPage from 'components/first-page'

export default {
  name: 'app',
  data() {
    return {}
  },
  mounted() {
    this.fullPage(3)
  },
  methods: {
    fullPage(num) {
      console.log(this.$refs.gFullPage)

      var startX = 0, //初始横坐标
        startY = 0, //初始纵坐标
        marginTop = 0, //上下滑动变量
        touchNum = 0, //上滑极限，是否可以上滑
        touchFlag = true, //可滑动标志 true 可滑动，false 不可滑
        bodyHeight = document.body.offsetHeight,
        page = this.$refs.gFullPage,
        pageFirst = this.$refs.fPageFirst

      //获取触摸的初识坐标
      page.addEventListener('touchstart', function(e) {
        e.preventDefault()
        startX = e.targetTouches[0].clientX
        startY = e.targetTouches[0].clientY
      })
      //重置触摸的坐标值
      page.addEventListener('touchend', function(e) {
        e.preventDefault()
        startX = 0
        startY = 0
        touchFlag = true
      })

      //监听并实现 上、下 滑动效果
      page.addEventListener('touchmove', function(e) {
        e.preventDefault()
        var newX = e.targetTouches[0].clientX,
          newY = e.targetTouches[0].clientY
        if (newY - startY > 50) {
          if (touchFlag == true && touchNum > 0) {
            console.log('下滑')
            touchFlag = false
            marginTop += 1
            touchNum -= 1
            pageFirst.style.marginTop = marginTop * bodyHeight + 'px'
          }
        } else if (newY - startY < -50) {
          if (touchFlag == true && marginTop > -num + 1) {
            console.log('上滑')
            touchFlag = false
            marginTop -= 1
            touchNum += 1
            pageFirst.style.marginTop = marginTop * bodyHeight + 'px'
          }
        }
      })
    }
  },
  components: {
    firstPage
  }
}
</script>

<style lang="less">
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    > div {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 100%;
      transition: 0.5s ease-in;
    }
  }
</style>
