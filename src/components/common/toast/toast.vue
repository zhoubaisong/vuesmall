<template>
    <div class="toastContent" v-if="isShow">
      {{message}}
    </div>
</template>

<script>
    export default {
      name: "toast",
      data() {
        return {
          message: '',
          isShow:false
        }
      },
      methods: {
        showToast(message, duration=2000) {
          this.message = message;
          this.isShow = true;
          setTimeout(() => {
            this.isShow = false;
          }, duration)
        }
      }
    }
</script>

<style scoped>
  .toastContent {
    padding: 8px 12px;
    background-color: rgba(0, 0, 0, .75);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    z-index: 999;
  }
</style>
