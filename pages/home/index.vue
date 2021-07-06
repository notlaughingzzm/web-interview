<template>
	<view class="content">
		<view class="content__search_box">
      <u-search 
      style="width: 100%;" 
      :show-action="false" 
      shape="square" 
      placeholder="面试题搜索" 
      search-icon-color="#5098FF"
      v-model="keyword">
      </u-search>
    </view>
    <view class="content__swiper">
      <u-swiper 
      :list="homeData.swiperList"
      :effect3d="true"
       >
      </u-swiper>
    </view>
    <view class="content__notice">
      <u-notice-bar type="primary" mode="horizontal" :list="homeData.noticeList"></u-notice-bar>
    </view>
    <view class="content__card">
      <u-card :title="title" :sub-title="subTitle" :thumb="thumb">
      		<view class="" slot="body">
      			<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
      				<view class="u-body-item-title u-line-2">瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view>
      			<image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
      			</view>
      		</view>
      		<view class="" slot="foot"><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon></view>
      	</u-card>
    </view>
    <view class="content__grid">
      <u-grid :col="3">
      		<u-grid-item v-for="(item,index) in homeData.gridList" :key="index">
      			<u-icon :name="item.name" :size="46"></u-icon>
      			<view class="grid-text">{{item.title}}</view>
      		</u-grid-item>
      	</u-grid>
    </view>
		<u-tabbar
     :list="tabList" 
     :mid-button="true" 
     :active-color="activeColor"
     :inactive-color="inactiveColor">
     </u-tabbar>
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
        keyword: '面试题搜索',
        title: '素胚勾勒出青花，笔锋浓转淡',
        subTitle: '2020-05-15',
        thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			}
		},
		onLoad() {
		},
    computed:{
      ...mapGetters(['tabList','homeData'])
    }
	}
</script>

<style lang="scss">
	.content {
    background-color: #f3f3f3;
    &__search_box{
      padding: 10px;
      background-color: #fff;
    }
    &__swiper{
      margin:10px 0;
    }
    &__notice{
      margin-bottom: 10px;
    }
    &__grid{
      font-size: 28rpx;
      margin-top: 4rpx;
      color: $u-type-info;
    }
    .u-card-wrap { 
    		background-color: $u-bg-color;
    		padding: 1px;
    	}
    	
    	.u-body-item {
    		font-size: 32rpx;
    		color: #333;
    		padding: 20rpx 10rpx;
    	}
    		
    	.u-body-item image {
    		width: 120rpx;
    		flex: 0 0 120rpx;
    		height: 120rpx;
    		border-radius: 8rpx;
    		margin-left: 12rpx;
    	}
	}
</style>
