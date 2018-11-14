<template>
  <div>
    <div aspectratio w-750-975>
      <div aspectratio-content>
        <img :src="require('@/assets/2-1.png')" class="w100">
      </div>
    </div>
    <div class="describ">
      <div aspectratio w-675-275>
        <div aspectratio-content>
          <img :src="require('@/assets/2-2.png')" class="w100">
        </div>
      </div>
    </div>
    <arrow-down></arrow-down>
  </div>
</template>

<script>
  import arrowDown from "components/down";
  export default {
    data() {
      return {

      }
    },
    components: {
      arrowDown
    }
  }
</script>

<style scoped lang='less'>
  [w-750-975] {
    width: 750px;
    background: #fff;
    overflow: hidden;
  }
  [w-750-975] {
    aspect-ratio: '750:975';
  }
  [w-675-275] {
    width: 675px;
    overflow: hidden;
  }
  [w-675-275] {
    aspect-ratio: '675:275';
  }
  .twice-bgc {
    width: 100%;
  }
  .describ {
    margin-top: 42px;
    text-align: center;
    > div {
      margin: 0 auto;
    }
  }
</style>