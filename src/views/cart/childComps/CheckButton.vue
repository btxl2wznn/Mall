<template>
  <div class="CheckButton">
    <div class="icon-selector" :class="{'selector-active': checked}" @click="selectItem">
      <img src="~@/assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      value: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        checked: this.value
      }
    },
    methods: {
      selectItem: function () {
        this.$emit('checkBtnClick')
      }
    },
    watch: {
		  value: function (newValue) {
        this.checked = newValue;
      }
    }
  }
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
  .icon-selector img {
    position: relative;
    left: 0px;
    top: 0px;
    width: 14px;
    height: 15px;
  }
  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>
