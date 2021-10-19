module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视口的宽度，对应设计稿的宽度/2，一般设置为750
      viewportHeight: 667, //视口的宽度，对应设计稿的宽度
      unitPrecision: 4, //指定‘px’转换为当前设置的单位‘vw’是会有小数的，设置小数最多保留4位
      viewportUnit: 'vw', //指定转换的单位为vw
      selectorBlackList: ['ignore'],  //指定不需要转换的类选择器。
      minPixelValue: 1, //小于或等于‘1px’不转换为视口单位
      mediaQuery: false, //允许在媒体查询中转换为‘px’
      exclude: [] //匹配不要转换的组件文件名的正则表达式。
    }
  }
}
