<template>
  <div class="aside-container">
    <div class="aside-main">
      <a-menu  :selected-keys ="[$route.path]">
      <router-link v-for="(item, index) in Location" :to="item"  :key="item">
        <a-menu-item :key="item">
          <template #icon><icon-user-add></icon-user-add></template>
          {{Text[index]}}
        </a-menu-item>
      </router-link>
      <!-- <router-link :to="secondLocation">
      <a-menu-item :key="secondLocation">
        <template #icon><icon-wechat ></icon-wechat></template>
        {{secondText}}
      </a-menu-item>
      </router-link> -->
      </a-menu>
    </div>
  </div>
</template>

<script>
// 引入图标
import {
  IconUserAdd,
  IconWechat
} from '@arco-design/web-vue/es/icon';
export default {
  props:{
    Location:Array,
    Text:Array
    // firstLocation:String,
    // firstText:String,
    // secondLocation:String,
    // secondText:String
  },
  components: {
    IconUserAdd,
    IconWechat
  },
 
}
</script>

<style lang="less" scoped>
.aside-container{
  position: fixed;
  top: 69px;
  box-sizing: border-box;
  height: 100%;
  width: 222px;
  .aside-main {
  // margin-top: 1px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  width: 222px;
  height:  100%;
  background: #FFFFFF;
  box-shadow: 0px 2px 6px 0px rgba(0,21,41,0.35);

  /deep/.arco-menu-inner {
      padding: 21px 0 0 0;
      font-size: 15px;
      color: #2563EB;
      line-height: 23px;
      // 导航栏选项
      .arco-menu-item {
        height: 43px;
        width: 222px;
        padding: 0 0 0 17px;
        // 字体图标
        .arco-menu-icon{
          font-size: 13px;
          margin-right: 15px;
        }
        // .arco-menu-icon:nth-child(2){
        //   width:16px;
        //   height: 13px;
          
        // }
        .arco-menu-item-inner{
          text-align: left;
        }
      }
      .arco-menu-selected{
        background-color:#E6F2FE; 
      }
    }
  }

}

</style>