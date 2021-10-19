import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import('views/home/home')
const category = () => import('views/category/category')
const cart = () => import('views/cart/cart')
const profile = () => import('views/profile/profile')
const goodsDetail = () => import('views/detail/goodsDetail')

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    meta:{
      title: '首页'
    },
    component: home
  },
  {
    path: '/category',
    meta:{
      title: '分类'
    },
    component: category
  }  ,
  {
    path: '/cart',
    meta:{
      title: '购物车'
    },
    component: cart
  },
  {
    path: '/profile',
    meta: {
      title: '我的'
    },
    component: profile
  },
  {
    path: '/detail/:iid',
    meta: {
      title: '商品详情'
    },
    component: goodsDetail
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
