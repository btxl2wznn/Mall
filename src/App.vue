<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <maintabbar class="tabbar"></maintabbar>
  </div>
</template>

<script>
  import maintabbar from 'components/context/tabbar/maintabbar.vue'
  export default {
  	name:'App',
  	components:{
  		maintabbar
  	}
  }
</script>

<style>
	@import "assets/css/basecss.css";
</style>
