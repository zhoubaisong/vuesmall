<template>
    <div class="tabbar-item" @click="jump">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="currentColor"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        props: {
          path: {
            type: String,
            required: true
          },
          color: {
            type: String,
            default: 'red'
          }
        },
        data() {
            return {
              /*isActive: true*/
            }
        },
        computed: {
          isActive() {
            return this.$route.path.indexOf(this.path) != -1
          },
          currentColor() {
            return this.isActive ? {color: this.color} : {}
          }
        },
        methods: {
          jump() {
              this.$router.replace(this.path);
          }
        }
    }
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tabbar-item img{
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>
