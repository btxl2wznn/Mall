<template>
  <div class="det-rate" v-if="Object.keys(rate).length !== 0">
    <div class="rate-nav">
      <span >用户评价</span>
      <span class="c-rate">{{rate.cRate}}</span>
      <span class="more">更多</span>
    </div>
    <div class="user-rate" v-for="(item, index) in rate.list" :key="index" >
      <img class="avatar" :src="item.user.avatar" alt="">
      <span class="uname">{{item.user.uname}}</span>
      <div class="rate-content">
        <p>{{item.content}}</p>
        <span>{{item.created|showDate}}</span>
        <span class="userStyle">{{item.style}}</span>
        <div class="rate-img" >
          <img :key="index" v-for="(itemImg, index) in item.images"
                :src="itemImg" @load="imgLoad" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '@/common/utils'
  export default {
    name: 'DetailRate',
    props: {
      rate: {
        type: Object
      }
    },
    filters: {
      showDate(value) {
        //将时间戳改为时间格式化
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    },
    methods: {
      imgLoad() {
        setTimeout(() => {
          this.$emit('imgLoad')
        }, 500)
      }
    }
  }
</script>

<style scoped>
  .det-rate {
    width: 100%;
    padding: 20px 10px;
    border-bottom: 5px solid #f2f5f8;

  }
  .rate-nav {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 5px solid #f2f5f8;
  }
  .c-rate {
    color: #fff;
    background-color: #ff5777;
    border-radius: 8px;
    margin-left: 5px;
    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }
  .rate-nav .more {
    position: absolute;
    right: 15px;
  }
  .avatar{
    position: relative;
    top: 6px;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .userStyle {
    margin-left: 15px;
    font-size: 15px;
  }
  .rate-content {
    margin-top: 3px;
    font-size: 14px;

  }
  .rate-img {
    margin-top: 5px;
  }
  .rate-img img {
    width: 80px;
    height: 80px;
    margin-right: 5px;
  }
</style>
