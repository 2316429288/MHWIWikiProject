<template>
	<view class="content flex">
		<mhwi-sidebar :navList="navList" @navClick="handleNavClick" />
		<view class="page-right">
			<view class="mhwi-search-bar flex align-center">
				<view class="mhwi-search flex align-center" @click="$refs.mhwiSearchModel.open">
					<text class="iconfont mhwi-search-icon" />
				</view>
			</view>
			<view class="mhwi-main flex">
				<view class="flex-8">
					<video v-if="videoShow"
						src="http://r9aejxg1h.hn-bkt.clouddn.com/video/%E3%80%90MHWI%E3%80%91%20%E6%80%AA%E7%89%A9%E7%8C%8E%E4%BA%BA%E4%B8%96%E7%95%8C%EF%BC%9A%E5%86%B0%E5%8E%9F%20%E9%AB%98%E7%87%83CG%E6%B7%B7%E5%89%AA%20%20%20%E6%9E%81%E8%87%B4%E8%B8%A9%E7%82%B9%20%20%20%E4%B8%87%E7%89%A9%E7%9A%86%E5%8F%AFSold%20Out%20%20%20%E9%87%8D%E6%96%B0%E5%8E%8B%E5%88%B6%E7%89%88%E6%9C%AC%20%20%20%E6%97%A0%E4%BA%8C%E5%8E%8B_%E9%AB%98%E6%B8%85%201080P.mp4"
						autoplay muted loop :show-fullscreen-btn="false" :show-play-btn="false"
						:show-center-play-btn="false" :show-loading="false" :enable-progress-gesture="false"
						:controls="false" class="mhwi-main-video" />
				</view>
				<view class="flex-2">

				</view>
			</view>
		</view>
		<!-- 搜索模态框 -->
		<mhwi-search-model ref="mhwiSearchModel" :searchData="searchData" :loading="loading" @close="searchData = []"
			@search="search" @arrowClick="pageJump('', 'arrow', $event)" @itemClick="pageJump('', 'detail', $event)" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoShow: false,
				loading: false,
				navList: [{
						id: 0,
						title: '魔物',
						active: true,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 1,
						title: '任务',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 2,
						title: '武器',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 3,
						title: '防具',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 4,
						title: '道具',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 5,
						title: '技能',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 6,
						title: '饰品',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 7,
						title: '艾露猫装备',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 8,
						title: '旋律效果',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 9,
						title: '猎虫',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 10,
						title: '餐点',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 11,
						title: '食材',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 12,
						title: '调和列表',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 13,
						title: '艾露猫探险队',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 14,
						title: '神秘炼金',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 15,
						title: '补给物资所',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 16,
						title: '特殊装备',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 17,
						title: '交货委托',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 18,
						title: '武器饰物',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 19,
						title: '防具外观',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					},
					{
						id: 20,
						title: '家具',
						active: false,
						activeIcon: require('@/static/image/menu_icon.png')
					}
				],
				searchData: [],
				searchTimer: null
			}
		},
		methods: {
			handleNavClick(index) {
				console.log(this.$windowWidth)
				this.navList.map(item => {
					item.active = false;
				});
				this.navList[index].active = true;
			},
			search(data) {
				this.searchData = [];
				if (data == '') {
					return
				} else {
					this.loading = true;
					if (this.searchTimer == null) {
						this.searchTimer = setTimeout(() => {
							this.searchData.push({
								content: 'MONSTER',
								icon: 'http://r9aejxg1h.hn-bkt.clouddn.com/icon/monster.png',
								data: [{
										icon: 'http://r9aejxg1h.hn-bkt.clouddn.com/icon/huanghei.png',
										title: '煌黑龙',
										info: '虽然有关的记录已经遗失多时，但是被称呼为「破坏的象征」，而且可以驱使各种自然力量。',
										flag: 'ALATREON',
										content: 'MONSTER'
									},
									{
										icon: 'http://r9aejxg1h.hn-bkt.clouddn.com/icon/huanghei.png',
										title: '煌黑龙',
										info: '虽然有关的记录已经遗失多时，但是被称呼为「破坏的象征」，而且可以驱使各种自然力量。',
										flag: 'ALATREON',
										content: 'MONSTER'
									},
									{
										icon: 'http://r9aejxg1h.hn-bkt.clouddn.com/icon/huanghei.png',
										title: '煌黑龙',
										info: '虽然有关的记录已经遗失多时，但是被称呼为「破坏的象征」，而且可以驱使各种自然力量。',
										flag: 'ALATREON',
										content: 'MONSTER'
									},
									{
										icon: 'http://r9aejxg1h.hn-bkt.clouddn.com/icon/huanghei.png',
										title: '煌黑龙',
										info: '虽然有关的记录已经遗失多时，但是被称呼为「破坏的象征」，而且可以驱使各种自然力量。',
										flag: 'ALATREON',
										content: 'MONSTER'
									}
								]
							});
							this.loading = false;
						}, 500);
					} else {
						this.searchTimer = null
					};
				};
			},
			pageJump(route, type, args) {
				switch (type) {
					case 'arrow':
						break;
					case 'detail':
						break;
				};
			}
		},
		onLoad() {
			if(this.$windowWidth > 1500) {
				this.videoShow = true;
			};
			uni.onWindowResize(res => {
				this.videoShow = res.size.windowWidth < 1500 ? false : true;
			});
		}
	}
</script>

<style lang="scss" scoped>
	.page-right {
		width: 100%;
	}

	.mhwi-search-bar {
		width: 100%;
		height: 8.5vh;
		background: $mhwi-primary-light;
		padding-left: 2vw;

		.mhwi-search {
			width: 50%;
			height: 70%;
			border-radius: 50rpx;
			background: #EDEDED;
			padding-left: 1vw;

			.mhwi-search-icon::before {
				content: '\e95c';
				color: $mhwi-primary-light;
				font-size: 3vh;
			}
		}
	}

	.mhwi-main {
		margin: 2vh 2vw;
		border-radius: 10rpx;

		.mhwi-main-video {
			height: 78.5vh;
			width: 100%;
			border-radius: 10rpx;
		}
	}
</style>
