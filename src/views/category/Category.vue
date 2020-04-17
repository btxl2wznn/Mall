<template>
	<div class="Category">
		<h1>分类</h1>
    <div class="wrapper">
      <p>该功能块还未实现</p>
    </div> 
	</div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  export default {
    name: 'Category',
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'))
      
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 300px;
    overflow: hidden;
  }
</style>
