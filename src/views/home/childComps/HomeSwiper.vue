<template>
  <Swiper>
    <swiper-item v-for="(item ,index) in banners" class="item" :key='index'>
      <a :href="item.link">
        <img  :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </Swiper>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper.vue'
  import SwiperItem from 'components/common/swiper/SwiperItem.vue'
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imgLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  .item{
    width: 100%;
  }
</style>
