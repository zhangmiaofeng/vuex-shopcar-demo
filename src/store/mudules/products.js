// 商品数据容器模块
import axios from 'axios'
const state = {
  message: 'products message',
  products: []
}

const getters = {

}

const mutations = {
  // 修改参数
  setProducts (state, products) {
    state.products = products
  }
}

const actions = {
  // 在actions里面进行请求数据
  async getProducts (context) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/products'
    })
    // console.log(data),
    // 提交修改数据
    context.commit('setProducts', data)
  }
}

// 导出
export default {
  // 加上命名空间的名字
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
