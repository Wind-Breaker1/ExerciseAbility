<template>
  <div class="information">
    <div class="work-container">
    <div class="info-tip" >
      <span class="info-title"> </span>
      <div class="info-select" v-show="IsShowChoose">
        <a-button type="text" @click="handleChange(1)" :class="{selected:selectIndex === 1 }">实时</a-button>
        <a-button type="text" @click="handleChange(2)" :class="{selected:selectIndex === 2 }">昨天</a-button>
        <a-button type="text" @click="handleChange(3)" :class="{selected:selectIndex === 3 }">7天</a-button>
         <a-range-picker
          
          style="width: 239px;height:34px; marginBottom: 20px;"
        />
      </div>
    </div>
    <div class="info-main">
      <div class="info-item">
        <div class="info-item-title">总账户数</div>
        <div class="info-item-data">15</div>
      </div>
      <div class="info-item">
        <div class="info-item-title">总账户数</div>
        <div class="info-item-data">15</div>
      </div>
      <div class="info-item">
        <div class="info-item-title">总账户数</div>
        <div class="info-item-data">15</div>
      </div>
      <div class="info-item">
        <div class="info-item-title">总账户数</div>
        <div class="info-item-data">15</div>
      </div>
      <div class="info-item">
        <div class="info-item-title">总账户数</div>
        <div class="info-item-data">15</div>
      </div>
      <div class="info-item">
        <div class="info-item-title">总账户数</div>
        <div class="info-item-data">15</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  props:{
    Title:String,
    IsShowChoose:Boolean
  },
  setup() {
    let selectIndex = ref(0);
    function handleChange (index) {
      selectIndex.value = index;
    }
    return {
      selectIndex,
      handleChange
    }
  }
}
</script>

<style lang="less" scoped>
.information{
  font-weight: 400;
  font-family: PingFangSC-Regular, PingFang SC;
  width: 1434px;
  height: 209px;
  background: #FFFFFF;
  margin: 34px 51px;
  text-align: left;
  box-sizing: border-box;
  .work-container{
    padding: 0 26px;
    .info-tip{
    width:100%;
    height: 57px;
    line-height: 57px;
    
    .info-title{
      font-size: 19px;
      font-weight: 500;
      color: #1E293B;
    }
    .info-select{
      float: right;
      font-size: 15px;
      button{
        width: 56px;
        font-size: 15px;
        color: #1E293B;
      }
      /deep/.arco-picker{
        margin-left: 30px;
        color: #64748BFF;
        margin-bottom: 0 !important;
      }
    }
  }
  .info-main{
    width: 100%;
     display: flex;
     justify-content: space-between;
     padding:0  100px  0 8px;
     box-sizing: border-box;
    .info-item{
      height: 152px;
      padding-top: 34px;
      box-sizing: border-box;
      width: 105px;
      .info-item-title{
        font-size: 15px;
        color: #475569;
        margin-bottom: 10px;
      }
      .info-item-data{
        font-size: 41px;
        color: #1E293B;
      }
    }
  }
  }
}
</style>