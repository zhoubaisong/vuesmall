<template>
    <div class="cart">
      <NavBar class="cart-nav">
        <div slot="center">
          购物车({{length}})
        </div>
      </NavBar>
      <Bscroll class="content" ref="scroll">
        <CartList></CartList>
      </Bscroll>
      <CartBottomBar class="bottom-bar"></CartBottomBar>
      <Toast></Toast>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navbar';
  import CartList from "./childComponents/cart-list";
  import CartBottomBar from "./childComponents/cart-bottom-bar";
  import Toast from 'components/common/toast/toast';

  import Bscroll from 'components/common/bscroll/bscroll';

  import {mapGetters} from 'vuex';
    export default {
      name: "cart",
      components: {
        NavBar,
        CartList,
        CartBottomBar,
        Toast,
        Bscroll
      },
      computed: {
        ...mapGetters({
          length: 'cartListLength'
        })
      },
      activated() {
        this.$refs.scroll.refresh();
      }
    }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .cart-nav {
    background-color: var(--color-tint);
    text-align: center;
    color: #fff
  }
  .content {
    height: calc(100% - 133px);
    overflow: hidden;
  }
  .bottom-bar {
    position: relative;
    bottom: 0;
    left: 0;
    right:0;
  }
</style>
