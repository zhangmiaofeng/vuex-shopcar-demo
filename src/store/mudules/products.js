// 商品数据容器模块
import axios from 'axios'
const state = {
  message: 'products message',
  // 数组数据
  allProducts: []
}

const getters = {

}

const mutations = {
  // 修改参数
  setAllProducts (state, products) {
    state.allProducts = products
  }
}

const actions = {
  // 在actions里面进行请求数据
  async getAllProducts (context) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/products'
    })
    console.log(data)
    // 提交修改数据
    context.commit('setAllProducts', data)
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
