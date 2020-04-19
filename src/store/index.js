// 配置vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 引入模块容器
import products from './mudules/products'
import cart from './mudules/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {},
  mutations: {},
  actions: {},
  // 挂载模块,配置模块
  modules: {
    products,
    cart
  }
})

export default store
