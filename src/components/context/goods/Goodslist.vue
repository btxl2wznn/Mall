<template>
  <div class="goodsList">
    <GoodlistItem class="item" v-for="(item, index) in goods" :goodsItem='item' :key='index'></GoodlistItem>
  </div>
</template>

<script>
  import GoodlistItem from './GoodslistItem.vue'
  export default {
    name: 'Goodslist',
    components: {
      GoodlistItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

</style>
