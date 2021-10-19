<template>
  <div id="detail">
    <GoodsNavBar class="navBar" ref="navbar" @toPosition="toPosition"></GoodsNavBar>
    <Bscroll class="content" :probeType="3" ref="scroll" @showBackTop="selectNavbar">
      <GoodsSwiper :top-images="topImages" @imageLoaded="imageLoaded"></GoodsSwiper>
      <GoodsBaseInfo :goods="goods"></GoodsBaseInfo>
      <GoodsShopInfo :shop="shop"></GoodsShopInfo>
      <GoodsGoodsInfo :detailInfo="detailInfo" @imageLoaded="imageLoaded"></GoodsGoodsInfo>
      <goods-param-info :param-info="paramInfo" ref="params"></goods-param-info>
      <GoodsComments :goods-comments="goodsComments" ref="comments"></GoodsComments>
      <GoodsRecommend :goods="recommend" ref="recommends" @imageLoaded="imageLoaded"></GoodsRecommend>
    </Bscroll>
    <GoodsBottom class="bottom" @addCart="addToCart"></GoodsBottom>
    <BackTop @click.native="backTop" v-show="isShow"/>
  </div>
</template>

<script>
    import GoodsNavBar from "./childComponents/goods-navbar"
    import GoodsSwiper from './childComponents/goods-swiper'
    import GoodsBaseInfo from './childComponents/goods-base-info'
    import GoodsShopInfo from './childComponents/goods-shop-info'
    import GoodsGoodsInfo from './childComponents/goods-goods-info'
    import GoodsParamInfo from './childComponents/goods-param-info'
    import GoodsRecommend from 'components/content/goods/goods'
    import GoodsComments from './childComponents/goods-comments'
    import GoodsBottom from './childComponents/goods-bottom'

    import Bscroll from "components/common/bscroll/bscroll"
    import {getGoodsDetail, Goods, Shop, GoodsParam, recommend} from 'network/detail'


    import {debounce} from "common/untils";
    import {backTopMixin} from "common/mixins";

    export default {
      name: "goodsDetail",
      components: {
        GoodsNavBar,
        GoodsSwiper,
        GoodsBaseInfo,
        GoodsShopInfo,
        GoodsGoodsInfo,
        GoodsParamInfo,
        GoodsRecommend,
        GoodsComments,
        GoodsBottom,
        Bscroll
      },
      mixins: [backTopMixin],
      data() {
        return {
          topImages: [],
          goods: {},
          shop: {},
          detailInfo: {},
          paramInfo: {},
          recommend: recommend,
          goodsComments: [],
          themeTopYs: [],
          refresh: null
        }
      },
      created() {
        this.goodsDetail(this.$route.params.iid);
        this.$nextTick(() => {
          this.refresh = debounce(this.$refs.scroll.refresh, 50);
        })
      },
      methods: {
        goodsDetail(iid) {
          getGoodsDetail(iid).then(res => {
            const result = res.result;
            this.topImages = result.itemInfo.topImages;//轮播图
            this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services);
            this.shop = new Shop(result.shopInfo);
            this.detailInfo = result.detailInfo;
            // 5.获取参数的信息
            this.paramInfo = new GoodsParam(result.itemParams.info, result.itemParams.rule);
            this.goodsComments = result.rate.list;
          })
        },
        imageLoaded() {
          this.refresh();
          this.themeTopYs = [];
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
        },
        toPosition(index) {
          this.$refs.scroll.scrollTop(0, -this.themeTopYs[index], 200);
        },
        addToCart() {
          let product = {};
          product.title = this.goods.title;
          product.price = this.goods.realPrice;
          product.desc = this.goods.desc;
          product.img = this.topImages[0];
          product.count = 1;
          product.iid = this.$route.params.iid;
          this.$store.dispatch("addGoods", product).then((msg) => {
            this.$toast.showToast(msg, 2500);
          })
        },
        selectNavbar(position) {
          this.isShow = position.y < -1000;
          let topY = -position.y;
          let currentIndex = 0;
          if(topY >= this.themeTopYs[0] && topY < this.themeTopYs[1]) {
            currentIndex = 0;
          }else if(topY >= this.themeTopYs[1] && topY < this.themeTopYs[2]) {
            currentIndex = 1;
          }else if(topY >= this.themeTopYs[2] && topY < this.themeTopYs[3]) {
            currentIndex = 2;
          }else if(topY >= this.themeTopYs[3]) {
            currentIndex = 3;
          }
          this.$refs.navbar.currentIndex = currentIndex;
        }
      },
      inject: ['reload'],
      watch: {
        '$route'(to, from){ //1、在当前页面跳转到当前页面行不通，改为监听路由的变化，先将路由替换，然后进行刷新。
          this.$router.replace(to.path);
          this.reload();
        }
      }
    }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 999;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 93px);
    background-color: #fff;
    z-index: 999;
    margin-top: 44px;
  }
  .navBar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 9;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
