<template>
  <div class="cartlist-item">
    <check-button class="item-selector" v-model="ItemInfo.checked"
      @checkBtnClick='checkBtnClick'></check-button>
    <div class="item-img">
      <img :src="ItemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{ItemInfo.title}}</div>
      <div class="item-desc">{{ItemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ItemInfo.price}}</div>
        <div class="delete left" @click="Delete"><img src="@/assets/img/cart/wpzoom.svg" alt=""></div>
        <div class="item-count right">x{{ItemInfo.count}}</div>
        <div class="count-add right" @click="CountAdd"><img src="@/assets/img/cart/jia.svg" alt=""></div>
        <div class="count-decl right" @click="CountDecl"><img src="@/assets/img/cart/jian.svg" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  import { mapGetters } from 'vuex'
  export default {
    name: 'CartListItem',
    props: {
      ItemInfo: {
        type: Object
      }
    },
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters([
        'cartList',
        'cartLength'
      ])
    },
    mounted() {
      this.$emit('updateScroll')
    },
    methods: {
      checkBtnClick() {
        this.ItemInfo.checked = !this.ItemInfo.checked
      },
      CountAdd() {
        this.ItemInfo.count++
      },
      CountDecl() {
        if(this.ItemInfo.count > 0){
          this.ItemInfo.count--
        }
      },
      Delete() {
        for(let i = 0;i < this.cartLength; i++){
          if(this.cartList[i].iid == this.ItemInfo.iid){
            this.cartList.splice(i, 1)
          }
        }
      }
    }
  }
</script>

<style scoped>
  .cartlist-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 3px;
    border-bottom: 1px solid #ccc;
  }
  .item-selector {
    width: 20px;
    display: flex;
    margin-right: 2px;
    justify-content: center;
    align-items: center;
  }
  .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .info-bottom img {
    width: 18px;
    height: 18px;
  }
  .info-bottom .item-price {
    color: #ff3377;
  }
  .count-add {
    margin:0 3px;
  }
  .delete {
    margin-left: 10px;
  }
</style>
