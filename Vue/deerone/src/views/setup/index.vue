<template>
  <Aside :Location=Location :Text=Text />
  <router-view></router-view>
</template>

<script>
export default {
  setup() {
    let Location = ['/home/setup/account', '#'];
    let Text = ["广告账户", "公众号授权"]
    return {
      Location,
      Text
    }
  }
}
</script>

<style>

</style>