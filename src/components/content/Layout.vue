<template>
  <div>
    <nav-bar bgColor="red">
      <span slot="left">返回</span>
      <span slot="center">购物街</span>
      <span slot="right">我的</span>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>