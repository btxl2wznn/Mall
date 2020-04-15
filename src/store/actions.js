import * as types from './mutation-types.js'

export default {
  addCart(context, payload) { 
    return new Promise ((resolve) => {
      //1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(function (item) {
      return item.iid == payload.iid
      })
      //2.判断product
      if(oldProduct) {//添加新的商品
        context.commit(types.INCREMENT_COUNT, oldProduct)
        resolve('添加新的商品')
      } else {//当前数量加一
        payload.count = 1
        context.commit(types.ADD_TO_CART, payload)
        resolve('当前商品数量加一')
      }
    })
  }
}
