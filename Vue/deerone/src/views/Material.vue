<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="main">
        <Select Text="广告账户" Placeholder="选择账户" :IsShowBtn="false"/>
        <div class="matter-main">

          <div class="matter-main-left">
            <div class="title">优秀素材 TOP 20</div>
            <div class="matter-main-body">
              
              <a-list :bordered="false" >
                <a-list-item >
                  <div class="matter-index">
                    <img src="../../public/first.svg" alt="">
                  </div>
                
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
                <a-list-item >
                  <div class="matter-index">
                    <img src="../../public/second.svg" alt="">
                  </div>
                
                  <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                    description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in Chinam gfhjdhafgjsdhgjdsghasdgadgsgfsgsfgasgfsfgsfgsfag"
                  >
                    <template #avatar>
                      <a-avatar shape="square">
                        <img alt="avatar" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                      </a-avatar>
                    </template>
                  </a-list-item-meta>
                </a-list-item>
                <a-list-item >
                  <div class="matter-index">
                    <img src="../../public/third.svg" alt="">
                  </div>
                
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
          <div class="matter-main-right">
            <div class="title">差素材 TOP 20</div>
            <div class="matter-main-body">
              <a-list :bordered=false>
                <a-list-item >
                  <div class="matter-index" >
                    1
                  </div>
                
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
                <a-list-item >
                  <div class="matter-index">1</div>
                
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
                <a-list-item >
                  <div class="matter-index">1</div>
                
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
        </div>
      </div>
      
    </div>
  </div>
  
</template>

<script>
import Select from '../components/Select.vue'
export default {
  components:{
    Select
  },

}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  background-color: var(--color-neutral-2);
  overflow: hidden;
  .main{
    width: 1434px;
    margin: 0 51px;
    background-color: rgb(241,245,249);
    font-family: PingFangSC-Regular, PingFang SC;
    // 选择账户样式
    // .matter-header{
    //   width: 100%;
    //   height: 68px;
    //   background: #FFFFFF;
    //   border-radius: 2px;
    //   margin-top: 34px;
    //   margin-bottom: 35px;
    //     .search-tip{
    //       float: left;
    //       display: block;
    //       margin-left: 26px;
    //       width: 60px;
    //       height: 68px;
    //       font-size: 15px;
    //       font-weight: 400;
    //       color: #1E293B;
    //       line-height: 68px;
    //     }
    //     .arco-space{
    //       width: 60px;
    //       float: left;
    //       height: 34px;
    //       background: #F1F5F9;
    //       border-radius: 4px;
    //       border: none;
    //       margin-top: 17px;
    //       margin-left: 38px;
    //       line-height: 34px;
    //       /deep/input{
    //         font-size: 15px;
    //         font-weight: 400;
    //         color: #333333;
    //       }
    //     }
    // }
    // 列表
    .matter-main{
      overflow: hidden;
      .matter-main-left, .matter-main-right{
        float: left;
        width: 704px;
        border-radius: 2px;
        // top 样式
        .title{
          width: 153px;
          height: 27px;
          font-size: 19px;
          font-weight: 500;
          color: #1E293B;
          line-height: 27px;
          margin-bottom:37px;
        }
        // 列表主体
        .matter-main-body{
          border-radius: 2px;
          padding:17px 26px 18px;
          box-sizing: border-box;
          background: #FFFFFF;
          // 列表项
          .arco-list-item{
            padding: 0;
            height: 83px;
            margin-bottom: 21px;
            border:none;
            // 列表序号
            .matter-index{
              float:left;
              width: 17px;
              margin: 0 21px 26px;
            }
            .arco-list-item-meta{
              text-align: left;
              padding: 0;
              font-size: 15px;
              // 图片样式
              .arco-list-item-meta-avatar{
                margin-right: 21px;
                .arco-avatar{
                  min-width: 137px;
                  min-height: 83px;
                }
              }
              // 文字区域
              /deep/.arco-list-item-meta-content{
                height: 83px;
                // 文字标题
                /deep/.arco-list-item-meta-title{
                  // width: 457px;
                  height: 28px;
                  font-weight: 500;
                  color: #1E293B;
                  line-height: 28px;
                  margin-bottom: 9px;
                }
                // 文字描述
                /deep/.arco-list-item-meta-description{
                  height: 23px;
                  font-weight: 400;
                  color: #475569;
                  line-height: 23px;
                }
              }
            }
          }
          // 列表最后一项下外边距
          .arco-list-item:last-child{
            margin-bottom: 0;
          }
        }
      }
      .matter-main-left{
        margin-right: 26px;
      }
      
    //     
    }
  }

  
  
}

</style>