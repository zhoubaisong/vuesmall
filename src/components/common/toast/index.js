import Toast from './toast'

const obj = {}; //1、创建一个导出的插件对象obj

obj.install = function(Vue) { //2、因为插件挂载到Vue实例都是通过执行install方法实现的
  //3、在install方法内部创建一个全局的Toast组件,并用一个构造器接收
  let constructor = Vue.extend(Toast);
  //4、new一个我们创建的构造器并得到toast对象。（因为我们需要使用到toast对象中的showToast方法）
  let toast = new constructor();
  //5、手动将toast组件挂载到用js创建的div上。（类似main.js中的new Vue({}).$mount('#app')main.js中是将vue对象挂载到
  // #app上）
  toast.$mount(document.createElement('div'));
  //6、此时toast组件已经挂载到div上，就可以获取到toast组件的$el（注意：没挂载前是获取不到html元素的，就是获取到toast的组件中的html元素等），
  //并将获取得到的html元素添加到该页面上。
  document.body.appendChild(toast.$el);
  //7、挂载到Vue的原型链上面（此时就可以像this.$emit()等一样去使用toast： this.$toast.showToast()）;
  Vue.prototype.$toast = toast;
}

export default obj;
