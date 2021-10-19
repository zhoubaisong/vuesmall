<template>
    <div class="goods">
      <div class="goods-item"  v-for="goodsItem in goods" @click="itemClick(goodsItem)">
        <img v-lazy="showImage(goodsItem)" alt="" @load="imageLoaded">
        <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "goods",
      props: {
        goods: {
          type: Array,
          default() {
            return []
          }
        }
      },
      computed: {
        showImage() {
          return (goodsItem) => {
            return goodsItem.show ? goodsItem.show.img : goodsItem.img
          }
        }
      },
      methods: {
        itemClick(goodsItem) {
          this.$router.push('/detail/' + goodsItem.iid);
        },
        imageLoaded() {
          this.$emit('imageLoaded');
        }
      }
    }
</script>

<style scoped>
  .goods{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 6px;
    padding: 0 4px;
  }
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 50%;
    text-align: center;
  }

  .goods-item img {
    width: 96%;
    height: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>
