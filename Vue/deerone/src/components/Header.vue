<template>
  <div class="menu-demo">
    <div class="nav">
      <div class="logo">
        <img src="../../public/logo.png" alt="" />
      </div>
      <div class="nav-main">
        <a-menu mode="horizontal" :selected-keys="[selected]">
          <a-menu-item :key="workbench" @click="changeRouter(workbench)"
            >工作台</a-menu-item
          >
          <a-menu-item key="/home/monitor" @click="changeRouter(monitor)"
            >监控</a-menu-item
          >
          <a-menu-item :key="material" @click="changeRouter(material)"
            >素材库</a-menu-item
          >
          <a-menu-item key="/home/setup" @click="changeRouter(account)"
            >设置</a-menu-item
          >
        </a-menu>
      </div>
    </div>
    <a-popover :arrow-style="{height:'0px'}" :content-style="[{'width':'100px', 'margin':'-25px 20px 0 0' }]">
      <div class="user-info">
        <div class="user-img"></div>
        <div class="user-name">wpf</div>
      </div>
      <template #content>
        
        <div style="cursor:pointer;">退出登录</div>
      </template>
    </a-popover>
    
  </div>
</template>
<script>
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const $router = useRouter();
    const $route = useRoute();
    let material = "/home/material";
    let monitor = "/home/monitor/advertprogram";
    let workbench = "/home/workbench";
    let account = "/home/setup/account";
    let changeRouter = function (path) {
      $router.push(path);
    };
    let selected = computed(() => {
      if ($route.path.includes("/home/monitor")) {
        return "/home/monitor";
      } else if ($route.path.includes("/home/setup")) {
        return "/home/setup";
      } else {
        return $route.path;
      }
    });

    return {
      material,
      monitor,
      workbench,
      account,
      selected,
      changeRouter,
    };
  },
};
</script>

<style lang="less" scoped>
.menu-demo {
  position: fixed;
  top: 0;
  width: 100%;
  height: 68px;
  background: #ffffff;
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
  font-family: PingFangSC-Regular, PingFang SC;
  z-index: 1000;
  .nav {
    // 导航栏
    width: 1400px;
    height: 68px;
    position: relative;
    float: left;
    // 导航栏logo
    .logo {
      width: 192px;
      height: 68px;
      float: left;
      img {
        width: 175px;
        height: 34px;
        margin: 17px 0 0 17px;
      }
    }
    // 导航栏主体
    .nav-main {
      width: 1208px;
      position: absolute;
      left: 192px;
      text-align: left;
      /deep/.arco-menu-inner {
        padding: 0 0 0 133px;
        height: 68px;
        .arco-menu-selected-label {
          left: 0;
          right: 0;
        }
        a {
          width: 0;
          height: 0;
        }
      }
      .arco-menu-item {
        padding: 5px 0;
        font-size: 15px;
        font-weight: 400;
        color: #1e293b;
        margin: 0 43px 0 0;
      }

      .arco-menu-item:first-child {
        margin-left: 133px;
      }
    }
  }
  // 用户信息
  .user-info {
    height: 68px;
    width: 136px;
    position: absolute;
    left: 1400px;
    .user-img {
      float: left;
      margin-top: 17px;
      width: 34px;
      height: 34px;
      background-image: url("../../public/user.svg");
      background-repeat: no-repeat;
    }
    .user-name {
      float: left;
      margin-top: 16px;
      margin-right: 4px;
      height: 30px;
      font-size: 15px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 30px;
    }
  }
}
</style>