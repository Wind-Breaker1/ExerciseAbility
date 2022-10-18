<template>
  <div class="select" :style="{width:Width}">
    <span class="texttip">{{Text}}</span>
      <a-space direction="vertical" size="large">
        <a-cascader :options="data" :style="{width:'591px'}" :placeholder="Placeholder" />
        <a-button type="primary" v-show="IsShowBtn">添加</a-button>
      </a-space>
  </div>
</template>
<script>

export default {
  props: {
    Width: String,
    Text: String,
    Placeholder: String,
    IsShowBtn: Boolean
  },
  setup() {
    const data = [{
      value: 'beijing',
      label: 'Beijing',
      other: 'extra'
    }, {
      value: 'shanghai',
      label: 'Shanghai',
      other: 'extra'
    }, {
      value: 'guangzhou',
      label: 'Guangzhou',
      other: 'extra'
    }, {
      value: 'chengdu',
      label: 'Chengdu',
      other: 'extra'
    }]

    return {
      data
    }
  }
}
</script>

<style lang="less" scoped>
// 选择
  .select{
  width: 100%;
  height: 68px;
  background: #FFFFFF;
  border-radius: 2px;
  position: relative;
  text-align: left;
  margin: 34px 0 35px 0;
    .texttip{
      float: left;
      display: block;
      padding-left: 26px;
      width: 149px;
      height: 68px;
      font-size: 15px;
      font-weight: 400;
      color: #1E293B;
      line-height: 68px;
      box-sizing: border-box;
    }
    .arco-space{
      // width: 60px;
      float: left;
      height: 34px;
      background: #F1F5F9;
      border-radius: 4px;
      border: none;
      margin-top: 17px;
      // margin-left: 34px;
      line-height: 34px;
      
      /deep/.arco-space-item:last-child{
        position: absolute;
        right: 26px;
      }
      /deep/input{
        font-size: 15px;
        font-weight: 400;
        color: #333333;
      }
    }
}
</style>