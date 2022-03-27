<template>
	<view class="content flex">
		<mhwi-sidebar :navList="navList" @navClick="pageJump('menu', $event)" />
		<view class="page-right">
			<view class="mhwi-search-bar flex align-center">
				<view class="mhwi-search flex align-center" @click="$refs.mhwiSearchModel.open">
					<text class="iconfont mhwi-search-icon" />
				</view>
			</view>
			<initPage v-if="componentType == 'initPage'" :options="options" />
		</view>
		<!-- 消息提示框 -->
		<mhwi-toast ref="mhwiToast" :title="toastTitle" :type="toastType" />
		<!-- 搜索模态框 -->
		<mhwi-search-model ref="mhwiSearchModel" :searchData="searchData" :loading="loading" @close="searchData = []"
			@search="search" @itemClick="pageJump('detail', $event)" />
	</view>
</template>

<script>
	import initPage from '@/pages/index/components/initPage.vue'

	export default {
		components: {
			initPage
		},
		data() {
			return {
				componentType: '',
				options: {},
				loading: false,
				toastTitle: '',
				toastType: '',
				navList: {
					active: 0,
					list: [{
							id: 0,
							title: '魔物',
							title_en: 'monster'
						},
						{
							id: 1,
							title: '任务',
							title_en: 'mission'
						},
						{
							id: 2,
							title: '武器',
							title_en: 'weapon'
						},
						{
							id: 3,
							title: '防具',
							title_en: 'armor'
						},
						{
							id: 4,
							title: '道具',
							title_en: 'props'
						},
						{
							id: 5,
							title: '技能',
							title_en: 'skill'
						},
						{
							id: 6,
							title: '饰品',
							title_en: 'decorations'
						},
						{
							id: 7,
							title: '艾露猫装备',
							title_en: 'catWeapon'
						},
						{
							id: 8,
							title: '旋律效果',
							title_en: 'melodyEffects'
						},
						{
							id: 9,
							title: '猎虫',
							title_en: 'kinsect'
						},
						{
							id: 10,
							title: '餐点',
							title_en: 'foodSkills'
						},
						{
							id: 11,
							title: '食材',
							title_en: 'ingredients'
						},
						{
							id: 12,
							title: '调和列表',
							title_en: 'craftingList'
						},
						{
							id: 13,
							title: '艾露猫探险队',
							title_en: 'catSafari'
						},
						{
							id: 14,
							title: '神秘炼金',
							title_en: 'elderMelder'
						},
						{
							id: 15,
							title: '补给物资所',
							title_en: 'provisions'
						},
						{
							id: 16,
							title: '特殊装备',
							title_en: 'specializedTools'
						},
						{
							id: 17,
							title: '交货委托',
							title_en: 'deliveries'
						},
						{
							id: 18,
							title: '武器饰物',
							title_en: 'bounties'
						},
						{
							id: 19,
							title: '防具外观',
							title_en: 'armorExterior'

						},
						{
							id: 20,
							title: '家具',
							title_en: 'furniture'
						}
					]
				},
				searchData: [],
				searchTimer: null
			};
		},
		methods: {
			handleNavClick(index) {
				this.navList.active = index;
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
								content: 'monster',
								icon: 'http://r9aejxg1h.hn-bkt.clouddn.com/icon/monster.png',
								data: [{
										id: 100001,
										icon: 'http://r9aejxg1h.hn-bkt.clouddn.com/icon/huanghei.png',
										title: '煌黑龙',
										info: '虽然有关的记录已经遗失多时，但是被称呼为「破坏的象征」，而且可以驱使各种自然力量。',
										flag: 'ALATREON',
										content: 'monster'
									},
									{
										id: 100001,
										icon: 'http://r9aejxg1h.hn-bkt.clouddn.com/icon/huanghei.png',
										title: '煌黑龙',
										info: '虽然有关的记录已经遗失多时，但是被称呼为「破坏的象征」，而且可以驱使各种自然力量。',
										flag: 'ALATREON',
										content: 'monster'
									},
									{
										id: 100001,
										icon: 'http://r9aejxg1h.hn-bkt.clouddn.com/icon/huanghei.png',
										title: '煌黑龙',
										info: '虽然有关的记录已经遗失多时，但是被称呼为「破坏的象征」，而且可以驱使各种自然力量。',
										flag: 'ALATREON',
										content: 'monster'
									},
									{
										id: 100001,
										icon: 'http://r9aejxg1h.hn-bkt.clouddn.com/icon/huanghei.png',
										title: '煌黑龙',
										info: '虽然有关的记录已经遗失多时，但是被称呼为「破坏的象征」，而且可以驱使各种自然力量。',
										flag: 'ALATREON',
										content: 'monster'
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
			/* 
			 * 页面跳转
			 * 分为组件跳转和页面跳转
			 * 组件跳转改变componentType，页面跳转调用this.$mhwi.pageJump
			 * */
			pageJump(type, args) {
				let data = {};
				switch (type) {
					case 'menu':
						this.navList.active = args;
						this.componentType = `${args.title_en}Menu`;
						break;
					case 'detail':
						this.componentType = `${args.title_en}Detail`;
						this.options = {
							id: args.id
						};
						break;
				};
			}
		},
		onLoad(options) {
			console.log('options::::', options);
			this.options = {
				...options
			};
			const optionComponent = options && options.componentType;
			this.componentType = optionComponent || 'initPage';
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
			cursor: text;

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
