<template>
    <div>
      <Navbar>
        <div slot="left" class="backIcon" @click="back">
          <img src="~assets/img/common/back.svg">
        </div>
        <div slot="center" class="titles">
          <div v-for="(item, index) in titles"
               :class="{active: index == currentIndex}"
                @click="titleClick(index)"
                class="titleItem"
                >
            {{item}}
          </div>
        </div>
      </Navbar>
    </div>
</template>

<script>
    import Navbar from 'components/common/navbar/navbar'
    export default {
      name: "goodsNavBar",
      data() {
        return {
          currentIndex: 0,
          titles: ['商品', '参数', '评论', '推荐']
        }
      },
      components: {
        Navbar
      },
      methods: {
        titleClick(index) {
          this.currentIndex = index;
          this.$emit('toPosition', index);
        },
        back() {
          this.$router.back();
        }
      }
    }
</script>

<style scoped>
  .titles {
    display: flex;
  }
  .titleItem {
    flex: 1;
  }
  .backIcon img{
    vertical-align: middle;
  }
  .active{
    color: var(--color-tint);
  }
</style>
