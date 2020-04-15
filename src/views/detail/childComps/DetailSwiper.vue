<template>
  <Swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in images" :key="index" >
      <img  :src="item" alt="" >
    </swiper-item>
  </Swiper>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper.vue'
  import SwiperItem from 'components/common/swiper/SwiperItem.vue'
  export default {
    name: 'DetailSwiper',
    props: {
      images: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>
