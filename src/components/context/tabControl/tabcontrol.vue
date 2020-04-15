<template>
  <div class="tabControl">
    <div class="tabControl-item" v-for="(item, index) in titles"
      :key='index' @click="itemclick(index)" :class="{active: index === currentindex}" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabControl',
    data() {
      return {
        currentindex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemclick(index) {
        this.currentindex = index
        this.$emit('tabclick', this.currentindex)
      }
    }
  }
</script>
<style scoped>
  .tabControl{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 100;
  }
  .tabControl-item{
    flex: 1;
  }
  .tabControl-item span{
    padding: 0 5px;
    padding-bottom: 2px;
  }
  .active{
    color: #ff5777 ;
  }
  .active span{
    border-bottom: 3px #ff8198 solid;
  }
</style>
