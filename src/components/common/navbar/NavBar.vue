<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar {
  position: relative;
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  width: 100%;
  background-color: #ff8198;
  z-index: 10;
  color: #fff;
  font-size: 16px;
}

.nav-left, .nav-right{
  width: 60px;
}

.nav-center {
  flex: 1
}
</style>