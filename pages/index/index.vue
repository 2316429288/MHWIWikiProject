<template>
	<view class="content">
		<mhwi-sidebar :navList="navList" @navClick="handleNavClick" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [
					{
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
				]
			}
		},
		methods: {
			handleNavClick(index) {
				this.navList.map(item => {
					item.active = false;
				});
				this.navList[index].active = true;
			},
		}
	}
</script>

<style lang="scss">
	
</style>
