<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
    import BSscroll from 'better-scroll'
    export default {
      name: "bscroll",
      props: {
        probeType: {
          type: Number,
          default: 0
        },
        pullUpLoad: {
          type: Boolean,
          default: false
        }
      },
      data() {
        return {
          scroll: null
        }
      },
      mounted() {
        this.scroll = new BSscroll(this.$refs.wrapper, {
          probeType: this.probeType,
          useTransition: false, //不使用css3的动画效果，使用css3的动画效果画面很模糊，而且有时还会突然回跳
          pullUpLoad: this.pullUpLoad,
          click: true,
          startY: true,
          observeImage:true,
          disableMouse: true
        });
        if(this.probeType == 2 || this.probeType == 3) {
          this.scroll.on('scroll', (position) => {
            this.$emit('showBackTop', position);
          });
        }

        if(this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp');
          })
        }
      },
      methods: {
        scrollTop(x, y, time=300) {
          this.scroll && this.scroll.scrollTo(x, y, time);
        },
        flushPullUp() {
          this.scroll && this.scroll.finishPullUp();
        },
        getScrollY() {
         return this.scroll ? this.scroll.scrollY : 0;
        },
        refresh() {
          this.scroll && this.scroll.refresh();
        }
      }
    }
</script>

<style scoped>

</style>
