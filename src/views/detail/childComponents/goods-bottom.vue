<template>
  <div class="bottom">
    <div class="bottom-one">
      <icon-font type="icon-kefu" />
      <div class="txt">
        客服
      </div>
    </div>
    <div class="bottom-two">
      <icon-font type="icon-dianpu" />
      <div class="txt">
        店铺
      </div>
    </div>
    <div class="bottom-three">
      <icon-font type="icon-shoucang" />
      <div class="txt">
        收藏
      </div>
    </div>
    <div class="bottom-four" @click="addCart">
      <button>
        加入购物车
      </button>
    </div>
    <div class="bottom-five">
      <button>
        购买
      </button>
    </div>
  </div>
</template>
<script>
  import { Icon } from 'ant-design-vue';

  const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2851552_wo5nn2x2kz.js',
  });
  export default {
    name: "goods-bottom",
    components: {
      IconFont
    },
    methods: {
      addCart() {
        this.$emit('addCart');
      }
    }
  };
</script>
<style scoped>
  .bottom >>> .anticon {
    margin-top: 2px;
    font-size: 24px;
  }
  .bottom {
    display: flex;
    flex-wrap: nowrap;
    height: 49px;
    background-color: #fff;
  }
  .bottom-one {
    text-align: center;
    flex-grow: 0;
    flex-shrink: 0;
    width: 16%;
  }
  .bottom-two {
    text-align: center;
    flex-grow: 1;
    flex-shrink: 1;
    width: 16%;
  }
  .bottom-three {
    text-align: center;
    flex-grow: 2;
    flex-shrink: 2;
    width: 16%;
  }
  .bottom-four {
    flex-grow: 3;
    flex-shrink: 3;
    width: 28%;
  }
  .bottom-four button {
    border: none;
    width: 100%;
    height: 100%;
    background-color: #ffde0f;
  }
  .bottom-five {
    flex-grow: 4;
    flex-shrink: 4;
    width: 24%;
  }
  .bottom-five button {
    border: none;
    width: 100%;
    height: 100%;
    background-color: #ff779a;
    color: #fff;
  }
  .txt {
    font-size: 13px;
    margin-top: -3px
  }
</style>
