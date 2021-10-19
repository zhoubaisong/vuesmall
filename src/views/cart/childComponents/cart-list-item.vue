<template>
    <div class="info-item">
      <SelectButton @click.native="btnClick" :is-selected="goodsItem.isSelected"></SelectButton>
      <div class="info-left">
        <img :src="goodsItem.img">
      </div>
      <div class="info-right">
        <div class="title">{{goodsItem.title}}</div>
        <div class="desc">{{goodsItem.desc}}</div>
        <div class="info-bottom">
          <span class="price">¥{{goodsItem.price}}</span>
          <span class="count">x{{goodsItem.count}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  import SelectButton from './select-button';
  export default {
      name: "cartListItem",
      props: {
        goodsItem: {
          type: Object,
          default() {
            return []
          }
        }
      },
      components: {
        SelectButton
      },
      methods: {
        btnClick() {
          this.goodsItem.isSelected = !this.goodsItem.isSelected;
        }
      }
    }
</script>

<style scoped>
  .info-item {
    border-bottom: 2px solid #eee;
    background-color: #fff;
    width: 100%;
    display: flex;
  }
  .info-left img{
    width: 90%;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .info-left {
    width: 35%;
  }
  .info-right {
    width: calc(100% - 126px);
  }
  .title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 12px;
    color: #000;
    text-overflow: ellipsis;
    font-weight: 600;
  }
  .desc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    margin-top: 10px;
  }
  .info-bottom {
    margin-top: 30px;
  }
  .price {
    color: var(--color-tint);
    padding-left: 3px;
  }
  .count {
    float:right;
    padding-right: 40px;
  }
</style>
