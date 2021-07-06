<template>
	<view class="content">
		<image class="logo" src="/static/uview/common/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<u-tabbar
     :list="tabList" 
     :mid-button="true" 
     :active-color="activeColor"
     :inactive-color="inactiveColor"
     ></u-tabbar>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
		data() {
			return {
				title: 'Web Interview',
        inactiveColor: '#909399',
        activeColor: '#5098FF',
			}
		},
		onLoad() {
		},
    computed:{
      ...mapGetters(['tabList'])
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
