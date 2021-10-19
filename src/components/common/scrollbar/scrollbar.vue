<template>
    <div class="scroll-bar">
      <div class="bar-item" v-for="(title, index) in titles" @click="itemClick(index)">
        <span v-text="title" :class="{active: index == currentIndex}"></span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "scrollBar",
      props: {
        titles: {
          type: Array,
          default() {
            return [];
          }
        }
      },
      data() {
        return {
          currentIndex: 0
        }
      },
      methods: {
        itemClick(index) {
          this.currentIndex = index;
          this.$emit('itemClick', index);
        }
      }
    }
</script>

<style scoped>
  .scroll-bar {
    height: 44px;
    line-height: 44px;
    text-align: center;
    display: flex;
    z-index: 999;
  }
  .bar-item {
    flex: 1;
  }
  .active {
    padding: 8px 4px;
    color: var(--color-tint);
    border-bottom: 2px solid var(--color-tint);
  }
</style>
