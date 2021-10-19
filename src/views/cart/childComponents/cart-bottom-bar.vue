<template>
  <div class="bottom-tools">
    <div class="left" @click="selectAll">
      <icon-font v-if="!isSelected" type="icon-not-select" />
      <icon-font v-else type="icon-selected"/>
      <div class="txt">
        全选
      </div>
    </div>
    <div class="center">
      合计：¥{{totalPrice}}
    </div>
    <div class="right" @click="goComputed">
      去计算({{length}})
    </div>
  </div>
</template>

<script>
    import { Icon } from 'ant-design-vue';
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_2851552_wo5nn2x2kz.js',
    });
    import {mapGetters} from 'vuex';
    export default {
      name: "cart-bottom-bar",
      components: {
        IconFont
      },
      computed: {
        ...mapGetters({
          length: 'selectedLength'
        }),
        isSelected() {
          //如果有返回值说明有为选中的，则全选按钮为false
          if(this.$store.state.cartList.length == 0) {
            return false;
          }
          return !this.$store.state.cartList.find(item => {
            return !item.isSelected; //item中的isSelected是false返回该值。
          })
        },
        totalPrice() {
          return this.$store.state.cartList.filter(item => {
            return item.isSelected
          }).reduce(((prevValue, item) => {
            return prevValue + item.price * item.count;
          }), 0).toFixed(2);
        }
      },
      methods: {
        selectAll() {
          if(this.isSelected) {
            this.$store.state.cartList.forEach(item => {
              item.isSelected = false;
            })
          }else {
            this.$store.state.cartList.forEach(item => {
              item.isSelected = true;
            })
          }
        },
        goComputed() {
          this.$toast.showToast("当前选择计算商品数量为：" + this.length);
        }
      }
    }
</script>

<style scoped>
  .bottom-tools >>> .anticon {
    font-size: 30px;
    position: relative;
    top: calc(50% - 15px);
  }
  .bottom-tools {
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #f6f6f6;
    text-align: center;
  }
  .left {
    display: flex;
    width: 68px;
  }
  .txt {
    line-height:40px;
  }
  .center {
    width: 140px;
    line-height: 40px;
  }
  .right {
    width: 90px;
    line-height: 40px;
    background-color: #ff8198;
    color: #fff;
  }
</style>
