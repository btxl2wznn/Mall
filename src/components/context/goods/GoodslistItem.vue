<template>
  <div class="goodsList-item" @click="itemClick">
      <img  @load="imgLoad" v-lazy="showImage" alt="">
      <div class="info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}¥</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script scoped>
  export default {
    name: 'GoodlistItem',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('imgLoad')
      },
      itemClick() {
        //点击跳转详情页
        const iid = this.goodsItem.iid
        this.$router.push({
          path: '/detail',
          query: {
            iid
          }
        })
      }
    }
  }
</script>

<style>
  .goodsList-item {
    padding-bottom: 40px;
    position: relative;
    width: 45%;
  }

  .goodsList-item img {
    width: 100%;
    border-radius: 5px;
  }

  .info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0px;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .info .price {
    color: #ff5777;
    margin-right: 20px;
  }
  .info .collect {
    position: relative;
  }
  .info .collect::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/home/收藏.svg") 0 0/14px 14px;
  }
</style>
