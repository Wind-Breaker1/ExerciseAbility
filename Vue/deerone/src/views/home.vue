<template>
  <Header/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container{
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  position: absolute;
  top: 68px;
  width: 100%;
  height: 860px;
  box-sizing: border-box;
  background-color: var(--color-neutral-2);
  
}

</style>