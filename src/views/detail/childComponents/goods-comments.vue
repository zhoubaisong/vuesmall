<template>
  <div class="comments">

    <div class="content">

      <div class="top">
        <span class="left">用户评价</span>
        <span class="right">更多</span>
      </div>

      <div v-if="goodsComments.length > 0">
        <div class="item" v-for="(item, index) in goodsComments" :key="index">
          <div>
            <div class="userInfo">
              <img :src="item.user.avatar">
              <span>{{item.user.uname}}</span>
            </div>
            <div class="commentContent">
              {{item.content}}
            </div>
            <div class="bottom">
              <span class="date">{{item.created | showTime}}</span>
              <span class="goodsInfo">{{item.style}}</span>
            </div>
          </div>
        </div>
      </div>


      <div class="empty" v-else>
        暂无评论
      </div>

    </div>


  </div>
</template>

<script>
    import {dateFormat} from "common/untils";

    export default {
      name: "goods-comments",
      props: {
        goodsComments: {
          type: Array,
          default() {
            return [];
          }
        }
      },
      updated() {
        console.log(this.goodsComments)
      },
      filters: {
        showTime(dateTime) {
          const date = new Date(dateTime * 1000);
          return dateFormat(date, "yyyy-MM-dd HH:mm:ss");
        }
      }
    }
</script>

<style scoped>
  .comments {
    padding-bottom: 4px;
    background-color: rgb(242, 245, 248);
  }
  .content{
    background: #fff;
    padding: 0 14px;
  }
  .left {
    font-size: 18px;
    font-weight: 600;
  }
  .top{
    height: 48px;
    line-height: 48px;
    border-bottom: 2px solid rgb(242, 245, 248);
  }
  .userInfo {
    padding: 8px 0;
  }
  .userInfo img{
    height: 42px;
    float: left;
  }
  .userInfo span {
    line-height: 42px;
    margin-left: 10px;
  }
  .commentContent{
    text-indent: 24px;
  }
  .bottom {
    margin-top: 8px;
    padding-bottom: 8px;
    font-size: 14px
  }
  .goodsInfo {
    float: right;
  }
  .empty {
    height: 50px;
    line-height: 50px;
    text-align: center;
    opacity: 0.8;
  }
</style>
