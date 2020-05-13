<template>
	<view class="container">
		<view class="intro">uni-app 项目必须单独导入(项目图标显示“U”)才能内置浏览器启动</view>
		<view class="intro">npm init 会添加 package.json；可以使用第三方组件（如：comp-wrap,事件加native）</view>
		<view class="intro">1. 本项目已包含uni ui组件，无需import和注册，可直接使用。</view>
		<view class="intro">2. 在代码区键入字母u，即可通过代码助手列出所有可用组件。</view>
		<view class="intro">3. 光标置于组件名称处按F1，即可查看组件文档。</view>
		<view>
			<w-input :label="labelNumber" v-model.trim="modelNumber" maxlength="11" type="number" placeholder="测试Number length"></w-input>
			<w-button :disabled="disabled" @click.native="bindClick()">测试</w-button>
			<w-count-down :countDown="5" @click="handClick()"></w-count-down>
		</view>
		<uni-link :href="href" :text="text"></uni-link>
		<view>uniBadge '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' 数字角标</view>
		<view>uniCalendar '@dcloudio/uni-ui/lib/uni-calendar/uni-calendar.vue' 日历</view>
		<view>uniCard '@dcloudio/uni-ui/lib/uni-card/uni-card.vue' 卡片</view>
		<view>uniCollapse '@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue' 折叠面板</view>
		<view>uniCombox '@dcloudio/uni-ui/lib/uni-combox/uni-combox.vue' 组合框</view>
		<view>uniCountdown '@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.vue' 倒计时</view>
		<view>uniDrawer '@dcloudio/uni-ui/lib/uni-drawer/uni-drawer.vue' 抽屉</view>
		<view>uniFab '@dcloudio/uni-ui/lib/uni-fab/uni-fab.vue' 悬浮按钮</view>
		<view>uniFav '@dcloudio/uni-ui/lib/uni-fav/uni-fav.vue' 收藏按钮</view>
		<view>uniGoodsNav '@dcloudio/uni-ui/lib/uni-goods-nav/uni-goods-nav.vue' 商品导航</view>
		<view>uniGrid '@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue' 宫格</view>
		<view>uniIcons '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue' 图标</view>
		<view>uniIndexedList '@dcloudio/uni-ui/lib/uni-indexed-list/uni-indexed-list.vue' 索引列表</view>
		<view>uniList '@dcloudio/uni-ui/lib/uni-list/uni-list.vue' 列表</view>
		<view>uniLoadMore '@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.vue' 加载更多</view>
		<view>uniNavBar '@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue' 自定义导航栏</view>
		<view>uniNoticeBar '@dcloudio/uni-ui/lib/uni-notice-bar/uni-notice-bar.vue' 通告栏</view>
		<view>uniNumberBox '@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue' 数字输入框</view>
		<view>uniPagination '@dcloudio/uni-ui/lib/uni-pagination/uni-pagination.vue' 分页器</view>
		<view>uniPopup '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue' 弹出层</view>
		<view>uniRate '@dcloudio/uni-ui/lib/uni-rate/uni-rate.vue' 评分</view>
		<view>uniSearchBar '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue' 搜索栏</view>
		<view>uniSegmentedControl '@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue' 分段器</view>
		<view>uniSteps '@dcloudio/uni-ui/lib/uni-steps/uni-steps.vue' 步骤条</view>
		<view>uniSwipeAction '@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue' 滑动操作</view>
		<view>uniSwiperDot '@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.vue' 轮播图指示点</view>
		<view>uniTag '@dcloudio/uni-ui/lib/uni-tag/uni-tag.vue' 标签</view>
		<view>uniTitle '@dcloudio/uni-ui/lib/uni-title/uni-title.vue' 章节标题</view>
		<view>uniTransition '@dcloudio/uni-ui/lib/uni-transition/uni-transition.vue' 过渡动画</view>
		<image :src="image"></image>
	</view>
</template>

<script>
export default {
	data() {
		return {
			labelNumber: '测试数字',
			modelNumber: '18702906728',
			disabled: false,
			text: 'uni-ui 已支持的组件列表',
			href: 'https://ext.dcloud.net.cn/plugin?id=55',
			image: '/static/components.png'
		};
	},
	methods: {
		bindClick() {
			console.log(this.modelNumber);
			this.disabled = true;
		},
		handClick() {}
	}
};
</script>

<style>
.container {
	padding: 20px;
	font-size: 14px;
	line-height: 24px;
}
</style>
