<template>
  <Aside :Location=Location :Text=Text />
  <router-view></router-view>
</template>

<script>
export default {
  setup() {
    let Location = ["/home/monitor/advertprogram", "/home/monitor/advertprodiagnose","/home/monitor/warnset"];
    let Text = ["广告计划", "广告计划诊断", "预警设置"]
    return {
      Location,
      Text
    }
  }
}
</script>

<style>

</style>