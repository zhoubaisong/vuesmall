import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addGoodsCount(state, payload) {
      payload.product.count += payload.count;
    },
    addNewGoods(state, payload) {
      state.cartList.push(payload);
    }
  },
  actions: {
    addGoods(context, payload) {
      return new Promise((resolve, reject) => {
        let product = context.state.cartList.find(item => {
          return item.iid === payload.iid;
        });
        if(product) {
          context.commit('addGoodsCount', {product: product, count: payload.count});
          resolve('商品数量+1');
        }else {
          payload.isSelected = true;
          context.commit('addNewGoods', payload);
          resolve('添加商品成功');
        }
      })

    }
  },
  getters: {
    cartListLength(state, getters) {
      return state.cartList.length;
    },
    cartList(state, getters) {
      return state.cartList;
    },
    selectedLength(state, getters) {
      return state.cartList.filter(item => {
        return item.isSelected;
      }).length;
    }
  }
})
