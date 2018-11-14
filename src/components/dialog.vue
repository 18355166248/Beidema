<template>
  <div class="dialog" @click="$emit('changeData', 'show', false)">
    <div class="content" @click.stop>
      <div class="border-box">
        <img :src="list.url">
      </div>
      <ul>
        <li class="gift" v-for="v in list.list" :key="v">{{v}}</li>
      </ul>
      <div class="gift">（限量500份 先到先得）</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['list'],
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang='less'>
  .dialog {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    left: 0;
    top: 0;
    color: #fff;
    .content {
      width: 454px;
      height: 584px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -227px;
      margin-top: -292px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .border-box {
        width: 280px;
        height: 285px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #7e8a9c;
        img {
          width: 258px;
          height: 258px;
        }
      }
      ul {
        margin-top: 40px;
        li {
          margin-bottom: 20px;
        }
      }
      .gift {
        font-size: 36px;
        font-family: '华文黑体';
        text-align: center;
      }
    }
  }
</style>
