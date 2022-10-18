<template>
  <Infomation Title="汇总数据" :IsShowChoose="true"/>
  <Infomation Title="成本数据" :IsShowChoose="false"/>
    
  
  <div class="account-info">
    <div class="account-info-title">广告账户健康数据（8）</div>
    <div class="account-info-main">
      <a-list :bordered="false">
    <a-list-item>
      <a-list-item-meta title="武汉得鹿网络科技有限公司">
        <template #avatar>
          <a-avatar shape="square">
            <img alt="avatar" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
          </a-avatar>
        </template>
        <template #description>
          <div class="account-info-des-item">
            <img src="../../public/workUser.png" />
            <span class="account-info-text">
              粉丝价格
            </span>
            <span class="account-info-abnomal">异常</span>
          </div>
          <div class="account-info-des-item">
            <img src="../../public/workAD.png" />
            <span class="account-info-text">
              账户质量
            </span>
            <span class="account-info-nomal">正常</span>
          </div>
        </template>
      </a-list-item-meta>
      
    </a-list-item>
    <a-list-item>
      <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                        description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
      >
        <template #avatar>
          <a-avatar shape="square">
            <img alt="avatar" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
          </a-avatar>
        </template>
      </a-list-item-meta>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                        description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
      >
        <template #avatar>
          <a-avatar shape="square">
            <img alt="avatar" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
          </a-avatar>
        </template>
      </a-list-item-meta>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                        description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
      >
        <template #avatar>
          <a-avatar shape="square">
            <img alt="avatar" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
          </a-avatar>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
    </div>
  
  </div>
</template>

<script>
import {IconUserAdd} from '@arco-design/web-vue/es/icon';
import Infomation from '@/components/Information.vue'
export default {
  components: {
    IconUserAdd,
    Infomation
  },
setup() {
    return {
      onSelect(dateString, date) {
        console.log('onSelect', dateString, date);
      },
      onChange(dateString, date) {
        console.log('onChange: ', dateString, date);
      },
    };
  },
}
</script>

<style lang="less" scoped>
// .work-body {
//   margin-top:68px;
//   border: 1px solid transparent;
// }
/deep/.selected{
  color: #2563EB !important;
}
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
.account-info{
  width: 1434px;
  margin: 0 51px;
  font-family: PingFangSC-Medium, PingFang SC;
  box-sizing: border-box;
  text-align: left;
  // 列表项标题
  .account-info-title{
    font-size: 19px;
    font-weight: 500;
    color: #1E293B;
    margin-bottom: 34px;
  }
  
  /deep/.arco-list-content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // 列表项
    .arco-list-item{
      width: 461px;
      height: 128px;
      background: #FFFFFF;
      border-radius: 2px;
      margin-bottom: 25px;
      padding: 0;
      box-sizing: border-box;
      .arco-list-item-meta{
        padding: 0;
        // 图片
        .arco-list-item-meta-avatar{
          margin: 0;
        }
        .arco-avatar{
          width: 77px;
          height: 77px;
          margin: 26px;
        }
        // 标题
        .arco-list-item-meta-title{
          font-size: 15px;
          font-weight: 500;
          color: #1E293B;
        }
        .arco-list-item-meta-description{
          margin-top: 17px;
          // 列表项粉丝项文字
          .account-info-des-item{
            width:126px;
            float:left;
            & > img{
              width: 13px;
              height: 15px;
            }
            // 列表项粉丝项文字提示
            .account-info-text{
              font-size: 15px;
              font-weight: 400;
              color: #475569;
              margin:0 17px 0 6px;
              display: inline-block;
            }
            
            // 异常
            .account-info-abnomal{
              color: #F5222D;
            }
            //正常
            .account-info-nomal{
              color: #52C41A;
            }
          }
          .account-info-des-item:first-child{
              margin-right: 43px;
            }
        }
      }
      
    }
  }
}

</style>