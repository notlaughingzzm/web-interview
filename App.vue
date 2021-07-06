<script>
	export default {
		onLaunch() {
			uni.getUserInfo().then(([err, res]) => { // 通常进入小程序就要获取用户信息
							if (err) { // 获取失败的操作
								console.log(err)
							} else { // 获取成功就保存起来
								//this.$storage[this.Storage['WX_INFO']] = res.userInfo // 保存到本地存储
								this.$store.commit('userInfo/SAVE_USER_WX_INFO', res.userInfo) // 保存到 vuex 中
							}
						}).finally(() => 
            console.log('我获取到了用户信息')
            )
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	@import "static/iconfont/iconfont.scss";
</style>
