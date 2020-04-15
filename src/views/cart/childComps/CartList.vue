<template>
  <cart-scroll class="cart-scroll" ref = 'scroll'>
    <div class="CartList">
      <cart-list-item v-for="item in CartList" @updateScroll="updateScroll" :key='item.iid' :item-info="item" />
    </div>
  </cart-scroll>

</template>

<script>
  import CartListItem from './CartListItem.vue'
  import CartBottomBar from './CartBottomBar.vue'
  import CheckButton from './CheckButton.vue'

  import CartScroll from 'components/common/scroll/Scroll.vue'

  export default {
    name: 'CartList',
    props: {
      CartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      CartListItem,
      CartScroll
    },
    methods: {
      updateScroll() {
        console.log("---")
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  .cart-scroll {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 93px;
  }
</style>
