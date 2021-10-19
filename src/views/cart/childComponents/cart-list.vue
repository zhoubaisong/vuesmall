<template>
    <div>
      <CartListItem v-for="(item, index) in cartGoods" :key="index" :goodsItem="item"></CartListItem>
    </div>
</template>

<script>
    import CartListItem from './cart-list-item';

    import {mapGetters} from 'vuex';
    export default {
      name: "cartList",
      components: {
        CartListItem
      },
      computed: {
        ...mapGetters({
          cartGoods: 'cartList'
        })
      }
    }
</script>

<style scoped>

</style>
