<template>
	<div class="cart">
    <nav-bar class="cartNav">
        <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list :cart-list="cartList"></cart-list>
    <cart-bottom-bar @buy="buy"></cart-bottom-bar>
    <toast ref="toast"></toast>
	</div>
</template>

<script>
  import CartList from './childComps/CartList.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'

  import navBar from 'components/common/navbar/navBar.vue'
  import Toast from 'components/common/toast/Toast.vue'

  import { mapGetters } from 'vuex'

  export default {
    name: 'cart',
    components: {
      navBar,
      CartList,
      CartBottomBar,
      Toast
    },
    computed: {
      ...mapGetters([
        'cartLength',
        'cartList'
      ])
    },
    methods: {
      buy() {
        if(this.cartLength == 0){
          this.$toast({message: '请添加商品'})
        }else{
          this.$toast({message: '不好意思^-^该功能尚未实现'})
        }
        
      }
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .cartNav {
    background-color: #ff8198;
    color: #fff;
    font-weight: 500;
  }

</style>
