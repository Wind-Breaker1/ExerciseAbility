<template>
  <div id="login-page">
    <div id="login-main">
      <div id="login-logo">
          <img src="../../public/img/logo.jpg"/>
        </div>
        <div id="login-box">
          <span class="login-box-title">账号登录</span>
          <div class="login-box-body">
            <a-form :model="loginInfo" :style="{width:'341px'}" @submit="handleSubmit" layout="vertical">
              <a-form-item field="name" label="输入账号" class="label-name">
                <a-input v-model="loginInfo.name" placeholder="请输入您用于登录账号的手机号" />
              </a-form-item>
              <span class="forget-pass">忘记密码?</span>
              <a-form-item field="post" label="输入密码" class="label-pass">
                <a-input v-model="loginInfo.post" placeholder="请输入您设置的密码" />
                <i class="iconfont icon-no_eye" style="margin-right:17px;"></i>
              </a-form-item>
              <a-form-item field="isRead" class="check">
                <a-checkbox v-model="loginInfo.isRead">
                  自动登录
                </a-checkbox>
              </a-form-item>
              <a-form-item class="submit">
                <a-button html-type="submit">登录</a-button>
              </a-form-item>
            </a-form> 
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { reactive } from 'vue';

export default {
  name: 'Login',
  setup() {
    const loginInfo = reactive({
      name: '',
      post: '',
      isRead: false,
    })
    const handleSubmit = (data) => {
      console.log(data)
    }

    return {
      loginInfo,
      handleSubmit
    }
  },
}
</script>

<style lang="less" scoped>
@color-label:rgba(30, 41, 59, 0.85);
// 表单input框公共样式
.input-style{
  height: 41px;
  background: #FFFFFF;
  border-radius: 2px;
  border: 1px solid #D9D9D9;
  span{
    background: #FFFFFF;
    border: none;
    padding-left: 16px ;
    input{
      font-size: 15px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.25);
      height: 31px;
    }
  }
}
#login-page{
  width: 100%;
  height: 100%;
  background: url("../../public/img/bg.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
  // 登录控制表单logo居中
  #login-main{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
   
    // logo样式
    #login-logo{
      width:204px;
      height: 34px;
      margin: auto;
    }
    // 表单框样式
    #login-box{
      width: 427px;
      height: 417px;
      margin-top: 26px;
      background: #FFFFFF;
      box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.15);
      border-radius: 1px;
      font-family: PingFangSC-Medium, PingFang SC;
      padding: 30px 43px 51px;
      box-sizing: border-box;

      .login-box-title{
        height: 30px;
        font-size: 21px;
        font-weight: 500;
        color: @color-label;
        line-height: 30px;
        display: block;
      }
      .login-box-body{
        margin-top: 27px;
        position: relative;
        .forget-pass{
          position: absolute;
          right: 0;
          top: 90px;
          height: 23px;
          font-size: 15px;
          font-weight: 400;
          color: #2563EB;
          line-height: 23px;
        }
        // label公共样式
        /deep/ label{
          font-size: 15px;
          font-weight: 400;
          color: @color-label;
          line-height: 21px;
          margin-bottom: 1px;
        }
        // 账号输入框区域
        /deep/ .label-name {
          margin-bottom: 17px;
          .arco-form-item-wrapper-col{
           .input-style;
         }
        }
        // 密码输入框区域
        /deep/ .label-pass {
          margin-bottom: 26px;
          .arco-form-item-wrapper-col{
            .input-style;
          }
        }
        // 单选框
        .check{
          margin-bottom: 26px;
          height: 23px;
          font-size: 15px;
          font-weight: 400;
          line-height: 23px;
          .arco-checkbox-label{
            color: rgba(0, 0, 0, 0.65);
          }
          // 清除无效label的影响
        /deep/.arco-form-item-label-col{
            height: 0;
            margin-bottom: 0;
          }
          // 单选框
        /deep/ .arco-checkbox-icon{
            width: 17px;
            height: 17px;
            border-radius: 2px;
            border: 1px solid #D9D9D9;
          }
        }
        // 登录按钮
        .submit{
          // 清除无效label的影响
         /deep/ .arco-form-item-label-col{
            height: 0;
            margin-bottom: 0;
          }
          button{
            font-size: 17px;
            font-family: AppleSystemUIFont;
            color: #FFFFFF;
            width: 341px;
            height: 43px;
            background: #2563EB;
            border-radius: 2px;
          }
        }
        
      }
    }
  }
 
}
</style>