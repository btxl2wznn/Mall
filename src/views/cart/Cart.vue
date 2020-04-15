<template>
	<div class="cart">
    <nav-bar class="cartNav">
        <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list :cart-list="cartList"></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
	</div>
</template>

<script>
  import CartList from './childComps/CartList.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'

  import navBar from 'components/common/navbar/navBar.vue'

  import { mapGetters } from 'vuex'

  export default {
    name: 'cart',
    components: {
      navBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters([
        'cartLength',
        'cartList'
      ])
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
