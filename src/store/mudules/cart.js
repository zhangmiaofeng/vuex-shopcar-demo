// 购物车数据容器模块
const state = {
  message: 'cart message',
  cartProducts: [
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, isChecked: false, count: 1 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, isChecked: false, count: 2 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, isChecked: false, count: 3 }
  ]
}

const getters = {
  // 购物车商品的总数量
  totalCount (state) {
    let count = 0
    state.cartProducts.forEach(item => {
      count += item.count
    })
    return count
  },
  // 购物车商品的总金额
  totalCountPrice (state) {
    let price = 0
    state.cartProducts.forEach(item => {
      price += (item.count * item.price)
    })
    return price
  }
}

const mutations = {
// 添加购物车 添加的actions函数在组件的methods里去调用
  addToCart (state, product) {
    console.log(product)
    // 如果有购物车已经有了该商品，购物车数量+1
    // 如果没有该商品则添加
    const item = state.cartProducts.find(p => p.id === product.id)
    if (item) {
      item.count++
      // 同类型的商品如果再次添加，则一定被选中
      item.isChecked = true
    } else {
      // 如果没有
      state.cartProducts.push({
        ...product,
        isChecked: false,
        count: 1
      })
    }
  },
  // 删除购物车商品
  deleteProduct (state, product) {
    state.cartProducts.forEach((item, index) => {
      if (item.id === product.id) {
        // state.cartProducts.splice(要删除的索引，要删除的数量)
        state.cartProducts.splice(index, 1)
      }
    })
  },
  // 更新商品的选中状态
  updateChecked (state, { productId, checked }) {
    state.cartProducts.forEach((item, index) => {
      if (item.id === productId) {
        item.isChecked = checked
      }
    })
  }
}

const actions = {

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
