<template>
  <div class="recommend-view">
    <div class="recommend-viewitem" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link" >
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recommend-view',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend-view{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: #eee 8px solid;
  }
  .recommend-viewitem{
    flex: 1 ;
  }
  .recommend-viewitem img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
