<template>
  <div>
    <!-- 测试访问下vuex的数据 -->
    <h2>{{$store.state.cart.message}}</h2>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="cartProducts"
      style="width: 100%"
    >
      <el-table-column
        width="55">
        <el-checkbox
        size="mini"
        slot="header"
        v-model="toggleAll"
        ></el-checkbox>
        <!--
          @change="onIsCheckedChange"  默认参数：更新后的值
          @change="onIsCheckedChange(123)"  123
          @change="onIsCheckedChange(123, $event)"  123, 原来那个默认参数
            当你传递了自定义参数的时候，还想得到原来那个默认参数，就手动传递一个 $event
         -->
        <template slot-scope="scope">
          <el-checkbox
            size="mini"
            :value="scope.row.isChecked"
            @change="updateChecked({
              productId: scope.row,
              checked: $event})"
          ></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="商品">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量">
        <template slot-scope="scope">
          <el-input-number
          :value="scope.row.count"
          size="mini"
          @change="updateProductCount({
            productId: scope.row.id,
            count: $event
          })"
          >

          </el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="小计">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="deleteProduct(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <p>已选 <span>{{ totalCheckedCount }}</span> 件商品，总价：<span>{{ totalCountPrice }}</span></p>
      <el-button @click="checkout" type="danger">结算</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'CartIndex',
  computed: {
    ...mapState('cart', ['cartProducts']),
    ...mapGetters('cart', ['totalCount', 'totalCountPrice', 'totalCheckedCount']),

    // 全选按钮的状态控制
    toggleAll: {
      // 在get中获取全选按钮的选中转态
      get () {
        // console.log('toggleAll get')
        // return true
        // 定义一个标识符
        let checked = true
        this.cartProducts.forEach(item => {
          if (!item.isChecked) {
            checked = false
          }
        })
        return checked
      },
      // 在set中设置其他商品的选中状态
      set (value) {
        // console.log('toggleAll set', value)
        this.updateAllProductChecked(value)
      }
    }
  },
  methods: {
    // 结算
    ...mapActions('cart', ['checkout']),
    ...mapMutations('cart',
      [
        'deleteProduct',
        'updateChecked',
        'updateAllProductChecked',
        'updateProductCount'
      ])
  }
  // data () {
  //   return {
  //     cartProducts: [
  //       { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, isChecked: false, count: 0 },
  //       { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, isChecked: false, count: 0 },
  //       { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, isChecked: false, count: 0 }
  //     ]
  //   }
  // }
}
</script>
<style></style>
