<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      pullUpLoad: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: this.click
      })
      // this.scroll = new BScroll(document.querySelector(".wrapper"), {
      //   // probeType: 3,
      //   // pullUpload: true
      // })
      //2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      //3.监听上拉加载
      if(this.pullUpLoad == true){
        this.scroll.on('pullingUp', ()=> {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollToTop(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
</style>
