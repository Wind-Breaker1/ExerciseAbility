<template>
  <div class="tip">
    <span>{{Text}}</span>
    <a-button type="primary" v-if="IsShowBtn">添加</a-button>
  </div>
</template>

<script>
export default {
  props:{
    Text:String,
    IsShowBtn:Boolean
  }
}
</script>

<style lang="less" scoped>
.tip{
    text-align: left;
    height: 95px;
    width: 100%;
    line-height: 95px;
    font-size: 19px;
    color: #1E293B;
    button{
      width: 70px;
      height: 34px;
      border-radius: 4px;
      float: right;
      margin-top: 34px;
    }
  }
</style>