<template>
  <div id="home">
    <Navbar class="home-nav">
      <div slot="center">购物街</div>
    </Navbar>
    <ScrollBar ref="scrollbar1" class="scrollTab" :titles="titles" @itemClick="itemClick" v-show="fixed"/>
    <Bscroll class="home-content"
             ref="scroll"
             @showBackTop="showBackTop"
             @pullingUp="loadMore"
             :probe-type="3"
             :pull-up-load="true">
      <HomeSwiper :banner="banner" @imageLoaded="imageLoaded"/>
      <HomeRecommend :recommend="recommend"/>
      <HomePopular />
      <ScrollBar ref="scrollbar2" class="scroll-bar" :titles="titles" @itemClick="itemClick"/>
      <Goods :goods="showGoods" @imageLoaded="imageLoaded"/>
    </Bscroll>

    <BackTop @click.native="backTop" v-show="isShow"/>
  </div>
</template>

<script>
    import Navbar from 'components/common/navbar/navbar'
    import HomeSwiper from './childComponents/home-swiper'
    import HomeRecommend from './childComponents/home-recommend'
    import HomePopular from './childComponents/home-popular'
    import ScrollBar from 'components/common/scrollbar/scrollbar'
    import Goods from "components/content/goods/goods"
    import Bscroll from "components/common/bscroll/bscroll"

    import {getHomeMultidata, getHomeGoods} from 'network/home';

    import {debounce} from "common/untils";
    import {backTopMixin} from "common/mixins";


    export default {
      name: "home",
      components: {
        Bscroll,
        Goods,
        Navbar,
        HomeSwiper,
        HomeRecommend,
        HomePopular,
        ScrollBar
      },
      mixins: [backTopMixin],
      data() {
        return {
          banner: [],
          recommend: [],
          titles: ['流行', '新款', '精选'],
          goods: {
            'pop': {page: 0, list: []},
            'new': {page: 0, list: []},
            'sell': {page: 0, list: []}
          },
          currentType: 'pop',
          scrollY: 0,
          offsetTop: 0,
          fixed: false,
          refresh: null
        }
      },
      created() {
        this.getMultidata();
        this.getGoods('pop');
        this.getGoods('new');
        this.getGoods('sell');
      },
      mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 50);
      },
      computed: {
        showGoods() {
          return this.goods[this.currentType].list;
        }
      },
      methods: {
        /*请求数据的方法*/
        getMultidata() {
          getHomeMultidata().then(res => {
            this.banner = res.data.banner.list;
            this.recommend = res.data.recommend.list;
          });
        },
        getGoods(type) {
          let page = this.goods[type].page+1; //每次请求的都是下一页数据
          getHomeGoods(type, page).then(res => {
            let items = res.data.list;
            this.goods[type].list.push(...items);
            this.goods[type].page++; //改变goods中的page
          });
        },
        showBackTop(position) {
          this.isShow = position.y < -1000; //显示返回顶部的箭头按钮
          //吸顶效果不能用class类来实现，因为better-scroll会使这个类的样式不起作用，而且fixed类定位用fixed会脱离文档流
          //滑动动过程中会突然跳一下，最后用两个相同的组件来实现，控制另一个组件的显示与隐藏
          this.fixed = - position.y > this.offsetTop;
        },
        /**
         * home组件的方法
         */
        itemClick(index) {
          switch (index) {
            case 0:
              this.currentType = 'pop';
              break;
            case 1:
              this.currentType = 'new';
              break;
            case 2:
              this.currentType = 'sell';
              break;
          }
          this.$refs.scrollbar1.currentIndex = index;
          this.$refs.scrollbar2.currentIndex = index;
        },
        loadMore() {
          this.getGoods(this.currentType);
          this.$refs.scroll.flushPullUp()
        },
        imageLoaded() {
          this.refresh();
          this.offsetTop = this.$refs.scrollbar2.$el.offsetTop;
        }
      }
    }
</script>

<style scoped>
  .home-nav{
    background-color: #ff8198;
    color: #fff;
  }
  #home {
    height: 100vh;
    position: relative;
  }
  .scroll-bar {
    background-color: #fefefe;
  }
  .home-content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px
  }
  .fixed{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }
  .scrollTab{
    position: relative;
    margin-top: -1px;
    z-index: 9;
  }
</style>
