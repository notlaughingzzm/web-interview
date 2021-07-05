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
      :list="swiperList"
      :effect3d="true"
       >
      </u-swiper>
    </view>
    <view class="content_notice">
      <u-notice-bar mode="horizontal" :list="noticeList"></u-notice-bar>
    </view>
    <view class="content__grid">
      <u-grid :col="3">
      		<u-grid-item v-for="(item,index) in gridList" :key="index">
      			<u-icon :name="item.name" :size="46"></u-icon>
      			<view class="grid-text">{{item.title}}</view>
      		</u-grid-item>
      	</u-grid>
    </view>
    
		<u-tabbar
     :list="tabbar" 
     :mid-button="true" 
     :active-color="activeColor"
     :inactive-color="inactiveColor">
     </u-tabbar>
     
    
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Web Interview',
        inactiveColor: '#909399',
        activeColor: '#5098FF',
				tabbar:this.$store.state.tabList,
        keyword: '面试题搜索',
        swiperList:this.$store.state.homeData.swiperList,
        gridList:this.$store.state.homeData.gridList,
        noticeList:this.$store.state.homeData.noticeList
			}
		},
		onLoad() {
			
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
    &__grid{
      font-size: 28rpx;
      margin-top: 4rpx;
      color: $u-type-info;
    }
	}
</style>
