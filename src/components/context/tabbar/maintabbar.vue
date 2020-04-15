<template>
	<div>
		<TabBar>
		<TabBarItem path="/home" activecolor = "#ff8198">
			<!-- @ 文件src地址的别名 -->
			<img slot="item-icno" src="@/assets/img/tabbar/首页.svg" />
			<img slot="active-item-icno" src="@/assets/img/tabbar/首页active.svg" />
			<div slot="item-text" >首页</div>
		</TabBarItem>
		<TabBarItem path="/category">
			<img slot="item-icno" src="@/assets/img/tabbar/分类.svg" />
			<img slot="active-item-icno" src="@/assets/img/tabbar/分类active.svg" />
			<div slot="item-text" >分类</div>
		</TabBarItem>
		<TabBarItem path="/cart">
			<img slot="item-icno" src="@/assets/img/tabbar/购物车.svg" />
			<img slot="active-item-icno" src="@/assets/img/tabbar/购物车active.svg" />
			<div slot="item-text" >购物车</div>
		</TabBarItem>
		<TabBarItem path="/profile">
			<img slot="item-icno" src="@/assets/img/tabbar/我的.svg" />
			<img slot="active-item-icno" src="@/assets/img/tabbar/我的active.svg" />
			<div slot="item-text" >我的</div>
		</TabBarItem>
		</TabBar>
	</div>
</template>

<script >
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	export default {
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
