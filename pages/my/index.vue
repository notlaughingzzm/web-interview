<template>
	<view class="content">
		<image class="logo" src="/static/uview/common/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<u-tabbar 
    :list="tabbar" 
    :mid-button="true"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    ></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '个人中心',
        inactiveColor: '#909399',
        activeColor: '#5098FF',
				tabbar: this.$store.state.tabList
			}
		},
		onLoad() {
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
