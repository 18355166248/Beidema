<template>
  <img src="@/assets/down.png" alt="">
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang='less'>
  img {
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -20px;;
    text-align: center;
    -webkit-animation: down 2s ease-in-out infinite;
    display: inline-block;
    width: 40px;
  }
  @keyframes down {
    0 {
      bottom: 20px;
    }
    44% {
      bottom: 70px;
      transform: scale(1.06)
    }
    100% {
      bottom: 20px;
      transform: scale(1)
    }
  }
</style>
