<template>
	<div @click="itemclick" class="tab-bar-item">
		<div  v-if="!active"><slot name="item-icno"></slot></div>
		<div v-else><slot name="active-item-icno"></slot></div>
		<div :style="activestyle" :class="{textactive: active}"><slot name="item-text"></slot></div>
		<!-- <img src="../assets/img/首页.svg" />
		<div class="ps">首页</div> -->
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		data() {
			return {
				//active: false
			}
		},
		computed:{
			active() {
				return this.$route.path.indexOf(this.path)!=-1
			},
			activestyle(){
				return this.active ? {color: this.activecolor} : {}
			}
		},
		props: {
			path: {
				type: String
			},
			activecolor: {
				type: String,
				default: '#ff8198'
			}
		},
		methods:{
			itemclick() {
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tab-bar-item img{
		width: 26px;
		height: 26px;
		vertical-align: middle;
	}
</style>
