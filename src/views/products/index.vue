<template>
  <div>
    <!-- 测试访问下vuex的数据 -->
    <h2>{{$store.state.products.message}}</h2>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item><a href="#/">首页</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="#/">商品列表</a></el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      style="width: 100%">
      <el-table-column
        prop="title"
        label="商品">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="addToCart(scope.row)">加入购物车</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductList',
  // data () {
  //   return {
  //     products: [
  //       { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01 },
  //       { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99 },
  //       { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99 }
  //     ]
  //   }
  // },
  created () {
    // 调用请求数据的方法
    this.getProducts()
    // this.$store.dispatch('products/getProducts')
  },
  computed: {
    // 把模块的数据映射过来
    ...mapState('products', {
      products: state => state.products
    })
  },
  methods: {
    // 获取后端数据，将action里面的请求方法映射过来
    ...mapActions('products', {
      getProducts: state => state.getProducts
    }),

    // 添加购物车
    addToCart (product) {
      // cart模块里面的addCart,传递参数商品product
      this.$store.commit('car/addCart', product)
    }
  }
  // created () {
  //   // 1. 调用 action
  //   // this.$store.dispatch('action函数')
  //   this.getAllProducts()
  // },

  // methods: {
  //   // ...mapActions('products', ['getAllProducts']),
  //   // ...mapMutations('cart', ['addToCart'])
  // }
}
</script>

<style></style>
