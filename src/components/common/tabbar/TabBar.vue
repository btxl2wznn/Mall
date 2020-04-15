<template>
	<div class="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'TabBar'
	}
</script>

<style scoped>
	.tab-bar{
		display: flex;
		position: fixed;
		background-color: #f6f6f6;
		left: 0;
		bottom: 0;
		right: 0;
    z-index: 100;
		box-shadow: 0px -2px 1px rgba(100,100,100,0.1);
		padding-top: 3px;
	}
</style>
