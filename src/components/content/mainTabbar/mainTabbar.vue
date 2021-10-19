<template>
    <div>
      <Tabbar>
        <TabbarItem path="/home">
          <img slot="item-icon" src="~assets/img/tabbar/1.png">
          <img slot="item-icon-active" src="~assets/img/tabbar/2.png">
          <div slot="item-text">首页</div>
        </TabbarItem>
        <TabbarItem path="/category">
          <img slot="item-icon" src="~assets/img/tabbar/3.png"> <!--在html代码中使用 配置文件中配置的别名alias需要加上~符号-->
          <img slot="item-icon-active" src="~assets/img/tabbar/4.png">
          <div slot="item-text">分类</div>
        </TabbarItem>
        <TabbarItem path="/cart">
          <img slot="item-icon" src="~assets/img/tabbar/5.png">
          <img slot="item-icon-active" src="~assets/img/tabbar/6.png">
          <div slot="item-text">购物车</div>
        </TabbarItem>
        <TabbarItem path="/profile">
          <img slot="item-icon" src="~assets/img/tabbar/7.png">
          <img slot="item-icon-active" src="~assets/img/tabbar/8.png">
          <div slot="item-text">我的</div>
        </TabbarItem>
      </Tabbar>
    </div>
</template>

<script>
  import Tabbar from "components/common/tabbar/tabbar";
  import TabbarItem from 'components/common/tabbar/tabbar-item'
    export default {
        name: "MainTabbar",
        components: {
          Tabbar,
          TabbarItem
        }
    }
</script>

<style>

</style>
