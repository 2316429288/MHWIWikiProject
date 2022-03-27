<template>
	<view class="mhwi-main flex">
		<view class="flex-8">
			<video v-if="videoShow"
				src="http://r9aejxg1h.hn-bkt.clouddn.com/video/%E3%80%90MHWI%E3%80%91%20%E6%80%AA%E7%89%A9%E7%8C%8E%E4%BA%BA%E4%B8%96%E7%95%8C%EF%BC%9A%E5%86%B0%E5%8E%9F%20%E9%AB%98%E7%87%83CG%E6%B7%B7%E5%89%AA%20%20%20%E6%9E%81%E8%87%B4%E8%B8%A9%E7%82%B9%20%20%20%E4%B8%87%E7%89%A9%E7%9A%86%E5%8F%AFSold%20Out%20%20%20%E9%87%8D%E6%96%B0%E5%8E%8B%E5%88%B6%E7%89%88%E6%9C%AC%20%20%20%E6%97%A0%E4%BA%8C%E5%8E%8B_%E9%AB%98%E6%B8%85%201080P.mp4"
				autoplay muted loop :show-fullscreen-btn="false" :show-play-btn="false" :show-center-play-btn="false"
				:show-loading="false" :enable-progress-gesture="false" :controls="false" class="mhwi-main-video" />
		</view>
		<view class="flex-2">

		</view>
	</view>
</template>

<script>
	export default {
		name: 'initPage',
		data() {
			return {
				videoShow: false
			};
		},
		methods: {
			
		},
		created() {
			if (this.$windowWidth > 1500) {
				this.videoShow = true;
			};
			uni.onWindowResize(res => {
				this.videoShow = res.size.windowWidth < 1500 ? false : true;
			});
		}
	}
</script>

<style lang="scss" scoped>
	.mhwi-main {
		margin: 2vh 2vw;
		border-radius: 10rpx;
		z-index: 2;

		.mhwi-main-video {
			height: 78.5vh;
			width: 100%;
			border-radius: 10rpx;
		}
	}
</style>
