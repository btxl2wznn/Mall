import {debounce} from '@/common/utils.js'
export const itemListenerMixin = {
  data() {
    return {
      ItemImgListener: null
    }
  },
  mounted() {
    //防抖动
    //防止refresh()每一张图片加载完毕就进行一次，设置timeout，去除抖动bug
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    //监听图片加载事件,刷新scroll,不断更新scrollhigh,避免出现bug
    this.ItemImgListener = () => {
      refresh()
    }
    this.$bus.$on('imgLoad', this.ItemImgListener)
  }
}
