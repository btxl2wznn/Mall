<template>
	<div id="home">
    <nav-bar class="home-nav"><div slot='center'>齐物购</div></nav-bar>
    <tab-control ref="tabControl1" class="tab-control" @tabclick='TabClick'
      :titles="['流行', '新款', '精选']" v-show="istabshow"></tab-control>

    <scroll class="content" ref="scroll"
      :probe-type="3"
      :cilck="true"
      :pull-upLoad="true"
      @scroll="contScroll" @pullingUp="loadmore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>

      <recommend-view :recommends="recommends"></recommend-view>

      <FeatureView></FeatureView>

      <tab-control ref="tabControl2"  @tabclick='TabClick'
        :titles="['流行', '新款', '精选']"></tab-control>
      <goods-list :goods="gettype" ></goods-list>
    </scroll>

    <BackTop v-show="isshow" @click.native="backTop"/>
	</div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeatureView from './childComps/featureView.vue'

  import navBar from 'components/common/navbar/navBar.vue'
  import tabControl from 'components/context/tabControl/tabcontrol.vue'
  import GoodsList from 'components/context/goods/Goodslist'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import BackTop from 'components/context/backtop/BackTop.vue'

  import {getHomeMultidata, getHomeGoods} from 'network/home.js'

  import {debounce} from '@/common/utils.js'
  import {itemListenerMixin} from 'common/mixin.js'

  export default {
    name: 'Home',
    data() {
      return {

        saveY: 0,
        tabOffsetTop: 0,
        isshow: false,
        istabshow: false,
        banners: [],
        recommends: [],
        currentType: 'pop',
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    components:{
      navBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      tabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    mixins: [itemListenerMixin],
    created() {
      //请求轮播图数据
      this.getHomeMultidata()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mounted() {


    },
    computed: {
      gettype() {
        //商品数据处理
        return this.goods[this.currentType].list
      }
    },
    methods: {
      //监听事件的方法
      TabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.tabControl1.currentindex = index;

        this.$refs.tabControl2.currentindex = index;
      },
      backTop() {
        //返回顶部
        this.$refs.scroll.scrollToTop(0,0,500)
      },
      contScroll(position) {
        //1.判断Backtop是否显示
        this.isshow = (-position.y > 600)
        //2.判断tabcontrol是否吸顶
        this.istabshow = (-position.y > this.tabOffsetTop)
      },
      //上拉加载更多数据
      loadmore() {
        this.getHomeGoods(this.currentType)
        //this.$refs.scroll.refresh()
      },
      //获得tabControl的offsetTop
      swiperImgLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      //请求网络数据的方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1
          //完成上拉加载更多,finishPuUp一下，便可进行下次刷新
          this.$refs.scroll.finishPullUp()
        })
      }
    },
    activated() {
      //再次进来home的时候引用保存的y值
      this.$refs.scroll.refresh()
      this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)

    },
    deactivated() {
      //1.保存y值
      this.saveY = this.$refs.scroll.scroll.y
      //2.取消全局事件的监听
      this.$bus.$off('imgLoad', this.ItmeImgListener)
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: #ff8198;
    font-size: 20px;
    color: #FFF;
    /* position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 100; */
  }
/*  .tab-control{
    position: sticky;
    top: 44px;
  } */
  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: relative;
    z-index: 100px;
  }
</style>
