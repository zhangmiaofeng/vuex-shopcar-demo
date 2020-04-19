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
  addCart (state, product) {
    // 添加购物车
  // 如果已经有该商品，则让购物车商品的数量+1
  // 如果没有，才添加新的商品进来{id：xxx, title: xxx, price:xxx }
  // 查找购物车数组中复合该条件的元素  返回该元素find()方法
    const item = state.cartProducts.find(p => p.id === product.id)

    // 如果购物车有了添加的商品，则商品数量+1
    if (item) {
      item.count++
    } else {
      // 如果没有则新增商品
      state.cartProducts.push({
        ...product,
        isChecked: false,
        count: 0
      })
    }
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
