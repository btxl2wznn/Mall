<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div class="item">
        <img src="@/assets/img/detail/客服.svg" alt="">
        <span class="text"> 客服</span>
      </div>
      <div class="item">
        <img src="@/assets/img/detail/店铺.svg" alt="">
        <span class="text">店铺</span>
      </div>
      <div class="item">
        <img src="@/assets/img/detail/详情收藏.svg" alt="">
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart" >加入购物车</div>
      <div class="buy">购买</div>
   </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    display: flex;
    text-align: center;
  }
  .bottom-bar .bar-left {
    display: flex;
  }
  .bar-left .item{
    flex: 1;
    text-align: center;
  }
  .bar-left .item img {
    display: block;
    width: 25px;
    height: 25px;
    margin: 10px auto 2px;
  }
  .text {
    font-size: 13px;
  }
  .bar-item{
    flex: 1;
  }
  .bar-right {
    display: flex;
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }
  .cart {
    width: 60%;
    margin: 0;
    background-color: #ffe817;
    color: #333;
  }
  .buy {
    width: 40%;
    background-color: #f69;
  }
</style>
