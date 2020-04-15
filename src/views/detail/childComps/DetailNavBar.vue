<template>
  <nav-bar>
    <div slot="left">
      <img @click="backHome" class="back" src="~assets/img/detail/back.svg" alt="">
    </div>
    <div class="titles" slot="center">
      <div class="titles-item" :class="{active: index==currentIndex}"
      v-for="(item, index) in titles" :key="index" @click="itemClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'

  export default {
    name: 'DetailNavBar',
    data() {
      return {
        currentIndex: 0,
        titles: ['商品', '详情', '评价', '推荐', ]
      }
    },
    // props: {
    //   currentIndex: {
    //     type: Number,
    //     default: 0
    //   }
    // },
    components: {
      navBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit("itemClick", index)
      },
      backHome() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .titles {
    display: flex;
  }
  .titles-item {
    flex:1;
    font-size: 18px;
  }
  .active {
    color: #ff5777;
  }
  .back {
    margin-top: 9.5px;
    margin-left: 6px;
    width: 30px;
    height: 25px;
  }
</style>
