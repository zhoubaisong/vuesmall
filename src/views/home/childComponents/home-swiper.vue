<template>
  <Swiper>
    <SwiperItem v-for="item in banner">
      <a :href="item.link">
        <img :src="item.image" @load="swiperImageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index';
  export default {
    name: "home-swiper",
    props: {
      banner: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        loaded: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      swiperImageLoad() {
        if(!this.loaded) {
          this.$emit('imageLoaded');
          this.loaded = true;
        }

      }
    }
  }
</script>

<style scoped>

</style>
