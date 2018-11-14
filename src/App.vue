<template>
  <div id="app">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page page1">
          <first-page></first-page>
        </div>
        <div class="page-2 page page1">
          <twice-page></twice-page>
        </div>
        <div class="page-3 page page1">
          <third-page></third-page>
        </div>
         <div class="page-4 page page1">
           <fourth-page></fourth-page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firstPage from "components/first-page"
  import twicePage from "components/twice-page"
  import thirdPage from "components/third-page"
  import fourthPage from "components/fourth-page"

  export default {
    name: "app",
    data() {
      return {
        opts: {
          start: 0,
          dir: 'v',
          duration: 500
        }
      };
    },
    mounted() {
    },
    methods: {
      
    },
    components: {
      firstPage,
      twicePage,
      thirdPage,
      fourthPage
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

  .page-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>