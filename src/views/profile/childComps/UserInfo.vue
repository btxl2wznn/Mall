<template>
  <div class="userinfo">
    <img class="portrait" src="@/assets/img/profile/我的.svg" alt="">
    <div class="enter">
      <p>登录/注册</p>
      <img src="@/assets/img/profile/手机.svg" alt="">
      <span>暂无绑定手机号</span>
    </div>
    <img class="more right" src="@/assets/img/profile/right.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'UserInfo'
  }
</script>

<style scoped>
  .userinfo {
    width: 100%;
    height: 90px;
    background-color: #ff8198;
    padding: 5px 20px 0px;
    display: flex;
    color: #FFF;
  }
  .portrait {
    width: 65px;
    height: 65px;
    position: relative;
  }
  .enter {
    margin-left: 15px;
    margin-top: 8px;
    font-size: 14px;
  }
  .enter img {
    position: relative;
    top: 4px;
    left: -7px;
  }
  .enter span {
    position: relative;
    top: -6px;
    left: -7px;
  }
  .more {
    position: absolute;
    height: 30px;
    top: 65px;
    right: 20px;
  }
</style>
