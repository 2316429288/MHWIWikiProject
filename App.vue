<script>
	import Vue from 'vue';

	export default {
		onLaunch() {
			// 绑定屏幕尺寸信息
			uni.getSystemInfo({
				success(e) {
					Vue.prototype.$windowWidth = e.windowWidth;
					Vue.prototype.$windowHeight = e.windowHeight;
					Vue.prototype.$screenWidth = e.screenWidth;
					Vue.prototype.$screenHeight = e.screenHeight;
				}
			});
			// 监听屏幕变化
			uni.onWindowResize(res => {
				Vue.prototype.$windowWidth = res.size.windowWidth;
				Vue.prototype.$windowHeight = res.size.windowHeight;
				Vue.prototype.$screenWidth = res.size.screenWidth;
				Vue.prototype.$screenHeight = res.size.screenHeight;
			});
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/static/index.scss';

	page {
		background: url('@/static/image/bg_pattern.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-color: #FFFFFF;
		background-attachment: fixed;
	}
</style>
