<template>
  <div class="back-top" @click="backtop" >
    <img src="@/assets/img/home/backtop.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods: {
      backtop() {
        this.$emit('backtop')
      }
    }
  }
</script>

<style>
  .back-top {
    position: fixed;
    bottom: 55px;
    right: 12px;
    z-index: 900;
  }
  .back-top img{
    width: 44px;
    height: 44px;
  }
</style>
