<template>
  <div id="app">
    <keep-alive exclude="goodsDetail">
      <!--跳转商品详情页的时候，需要排除该组件，因为如果该组件被缓存，将不会被销毁，如果不销毁，
      那么在created生命周期中接收参数，将只有第一次能接收到参数。-->
      <router-view v-if="isShow"></router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>

import MainTabbar from "components/content/mainTabbar/mainTabbar";

export default {
  components: {
    MainTabbar
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return{
      isShow: true
    }
  },
  methods: {
    reload() {
      this.isShow = false;
      this.$nextTick(() => {
        this.isShow = true;
      })
    }
  }
}

</script>

<style>
  @import "assets/css/base.css";

</style>
