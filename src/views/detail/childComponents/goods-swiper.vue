<template>
  <Swiper class="detailSwiper" ref="swiper">
    <SwiperItem v-for="(item, index) in topImages" :key="item">
      <img :src="item" @load="swiperImageLoad" >
    </SwiperItem>
  </Swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper/index';
    export default {
      name: "goods-swiper",
      props: {
        topImages: {
          type: Array,
          default() {
            return [];
          }
        }
      },
      components: {
        Swiper,
        SwiperItem
      },
      methods: {
        swiperImageLoad() {
          this.$emit('imageLoaded');
        }
      }
    }
</script>

<style scoped>
  .detailSwiper{
    height: 260px;
    overflow: hidden;
  }
  .detailSwiper .swiper{
    height: 100% !important;
  }
  .slide{
    overflow: hidden;
  }
</style>
