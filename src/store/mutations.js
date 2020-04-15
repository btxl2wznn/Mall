import * as types from './mutation-types.js'
export default {
  [types.INCREMENT_COUNT](state, payload){
    payload.count++
  },
  [types.ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
