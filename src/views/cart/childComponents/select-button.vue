<template>
  <div class="box">
    <icon-font v-if="!isSelected" type="icon-not-select" />
    <icon-font v-else type="icon-selected"/>
  </div>
</template>

<script>
    import { Icon } from 'ant-design-vue';
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_2851552_wo5nn2x2kz.js',
    });
    export default {
      name: "select-button",
      props: {
        isSelected: {
          type: Boolean,
          default() {
            return false;
          }
        }
      },
      components: {
        IconFont
      }
    }
</script>

<style scoped>
  .box >>> .anticon {
    font-size: 30px;
    position: relative;
    top: calc(50% - 15px);
  }
</style>
