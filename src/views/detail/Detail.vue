<template>
  <div id="detail" >
    <detail-nav-bar @itemClick="itemClick" ref="navBar"  :currentIndex="currentIndex"
      class="detailNav" ></detail-nav-bar>
    <detail-scroll class="content"  ref="scroll"
      :probe-type="3"
      :cilck="true"
      :pull-upLoad="true" @scroll="contentScroll">
      <detail-swiper :images="topImages" />
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imgLoad"/>
      <detail-param-info ref="param" :paramInfo="paramInfo" />
      <detail-rate ref="rate" :rate="rate" @imageLoad = "imgLoad"></detail-rate>
      <goods-list ref="recommend" class="recommend" :goods="recommend"></goods-list>
    </detail-scroll>
    <detail-bottom-bar @addToCart="addToCart" @pay="pay"></detail-bottom-bar>
    <toast ref="toast"/>
  </div>
</template>

<script>
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  import DetailParamInfo from './childComps/DetailParamInfo.vue'
  import DetailRate from './childComps/DetailRate.vue'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam, Rate} from 'network/detail.js'

  import DetailScroll from 'components/common/scroll/Scroll.vue'
  import GoodsList from 'components/context/goods/Goodslist'

  import {debounce} from '@/common/utils.js'
  import {itemListenerMixin} from 'common/mixin.js'

  import {mapActions} from 'vuex'

  import Toast from 'components/common/toast/Toast.vue'

  export default {
    name: 'detail',
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        rate: {},
        recommend: [],
        themeTops: [],
        getThemeTopY: null,
        currentIndex: 0,
      }
    },
    components: {
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailNavBar,
      DetailScroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailRate,
      GoodsList,
      DetailBottomBar,
      Toast
    },
    mixins: [itemListenerMixin],
    created() {
      //1.获取iid
      this.iid = this.$route.query.iid
      getDetail(this.iid).then(res => {
      // 2.获得需求的各信息
        const data = res.data.result;
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        console.log(this.goods)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        this.rate = new Rate(data.rate)
      })
      //3.请求推荐数据
      getRecommend().then(res => {
        this.recommend = res.data.data.list
      })
      //4.给getThemeTopY赋值
      this.getThemeTopY = debounce(() => {
        this.themeTops = []
        this.themeTops.push(0)
        this.themeTops.push(this.$refs.param.$el.offsetTop)
        this.themeTops.push(this.$refs.rate.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
      },100)
    },
    mounted() {
    },
    deactivated() {
      //移除监听
      this.$bus.$off('imgLoad', this.ItemImgListener)
    },
    methods: {
      ...mapActions(['addCart']),
      imgLoad() {
        //监听图片加载
        this.$refs.scroll.refresh()
        this.getThemeTopY()
      },
      itemClick(index) {
        //点击滚动到相应的位置
        this.$refs.scroll.scroll.scrollTo(0, -this.themeTops[index], 300)
      },
      contentScroll(position) {
        //1.获取y值
        const positionY = -position.y
        //2.position和主题中值进行对比
        let len = this.themeTops.length
        for(let i = 0; i < len-1; i++) {
          if(this.currentIndex != i &&(positionY >= this.themeTops[i] && positionY <=
            this.themeTops[i+1])){
              this.currentIndex = i
              this.$refs.navBar.currentIndex = i
              break;
            }
        }
      },
      addToCart() {
        //1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        //2.将商品添加到购物车里
        if(product.iid){
          this.addCart(product).then(res => {
            this.$toast({message: '加入购物车成功'})
          })
          // this.$store.dispatch('addCart',product).then(res => {
          //   console.log(res)
          // })
        }
      },
      pay() {
        this.$toast({message: '不好意思^-^该功能尚未实现'})
      }
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 200;
    background-color: #fff;
  }
  .detailNav {
    position: relative;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: #fff;
  }
  .content {
    overflow: hidden;
    position: absolute;
    bottom: 58px;
    top: 44px;
    left: 0;
    right: 0;
    /* height: calc(100% - 44px); */
  }
  .recommend {
    margin-top: 15px;
  }
</style>
