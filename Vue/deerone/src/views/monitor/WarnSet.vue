<template>
  <div>
    <div class="warn-container">
      <TextTip Text="插件成本" :IsShowBtn="false"/>
      <!-- <div class="warn-select">
          <span class="search-tip">插件成本小于</span>
            <a-space direction="vertical" size="large">
              <a-cascader :options="options" :style="{width:'591px'}" placeholder="选择账户" />
              <a-button type="primary">添加</a-button>
            </a-space>
        </div> -->
        <Select width="1212px" Text="插件成本小于" Placeholder="输入最小数值" :IsShowBtn="true"/>  
        <TextTip Text="计划预算" :IsShowBtn="false"/>
      <!-- <div class="warn-select">
          <span class="search-tip">单计划预算小于</span>
            <a-space direction="vertical" size="large">
              <a-cascader :options="options" :style="{width:'591px'}" placeholder="选择账户" />
              <a-button type="primary">添加</a-button>
            </a-space>
        </div> -->
        <Select width="1212px" Text="单计划预算小于" Placeholder="输入最小数值" :IsShowBtn="true"/>  
    </div>
    
  </div>
</template>

<script>
import TextTip from '@/components/TextTip.vue'
import Select from '@/components/Select.vue'
export default {
  components:{
    TextTip,
    Select
  }
}
</script>

<style lang="less" scoped>
 .warn-container{
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  position: absolute;
  left: 222px;
  top: 0px;
  width: 1314px;
  padding:0 51px;
  box-sizing: border-box;
  .select{
    margin:0;
  }
 
 }
</style>