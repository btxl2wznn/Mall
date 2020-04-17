<template>
	<div class="profile">
		<nav-bar class="profile-nav">
      <div slot='center'>我的</div>
    </nav-bar>
    <user-info></user-info>
    <account-info></account-info>
    <normal-list-view :listDate="orderList"></normal-list-view>
    <normal-list-view :listDate="serviceList"></normal-list-view>
	</div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar.vue'

  import UserInfo from './childComps/UserInfo.vue'
  import AccountInfo from './childComps/AccountInfo.vue'
  import NormalListView from './childComps/NormalListView.vue'
  export default {
    name: 'Profile',
    data() {
      return {
        orderList: [
        	{icon: '消息.svg', info: '我的消息'},
        	{icon: '积分.svg', info: '积分商城'},
        	{icon: '会员.svg', info: '会员卡'},
        ],
        serviceList: [
        	{icon: '购物车.svg', info: '我的购物车'},
        	{icon: '下载.svg', info: '下载购物APP'},
        ]
      }
    },
    components: {
      navBar,
      UserInfo,
      AccountInfo,
      NormalListView
    }
  }
</script>

<style scoped>
  .profile {
    background-color: #f2f2f2;
  }
  .profile-nav {
    background-color: #ff8198;
    color: #fff;
    font-size: 18px;
  }
</style>
