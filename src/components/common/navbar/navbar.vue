<template>
    <div class="navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
  .navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    z-index: 999
  }
  .left, .right{
    width: 50px;
  }
  .center{
    flex: 1;
  }
</style>
