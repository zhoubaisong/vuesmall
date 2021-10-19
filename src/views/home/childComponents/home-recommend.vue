<template>
    <div class="recommend">
      <div v-for="item in recommend" class="recommend-item">
        <a :href="item.link">
          <div>
            <img :src="item.image">
          </div>
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
      name: "home-recommend",
      props: {
        recommend: Array
      }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    padding: 10px 0 18px 0;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
    font-size: 10px
  }
  .recommend-item img{
    width: 86%;
    margin-bottom: 8px;
  }
</style>
