<template>
  <div class="cart-bottom">
    <div class="checkAll">
      <check-button @checkBtnClick="checkBtnClick" v-model="isSelectAll"></check-button>
      <!-- <check-button @checkBtnClick="checkBtnClick" :value="isSelectAll"></check-button> -->
    </div>
    <span>全选</span>
    <span class="total-price">合计: ￥{{totalPrice}}</span>
    <span class="buy">结算({{cartLength}})</span>
  </div>
</template>

<script>
  import CheckButton from './CheckButton.vue'
   import { mapGetters } from 'vuex'
  export default {
    name: 'CartBottomBar',
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'cartList',
        'cartLength'
      ]),
      totalPrice() {
        const cartList = this.cartList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      cartLength() {
        return this.cartList.filter( item => {
          return item.checked
        }).length
      },
      isSelectAll: function () {
        if(this.cartLength == 0) return false
        return this.cartList.find(item => item.checked === false) === undefined;
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkBtnClick() {
        // 1.判断是否有未选中的按钮
        let isSelectAll = this.$store.getters.cartList.find(item => !item.checked);
        // 2.有未选中的内容, 则全部选中
        if (isSelectAll) {
          this.$store.state.cartList.forEach(item => {
            item.checked = true;
          });
        } else {
          this.$store.state.cartList.forEach(item => {
            item.checked = false;
          });
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -1px 3px rgba(0,0,0,.1);
    font-size: 14px;
    color: #222;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }
  .checkAll {
    position: absolute;
    line-height: 20px;
    left: 10px;
    top: 11px;
  }
  .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #222;
  }
  .buy {
    background-color: #ff3377;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
