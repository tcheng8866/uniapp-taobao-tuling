<template>
	<view class="page">
		<view class="wrap">
			<!-- 组件参考：https://ext.dcloud.net.cn/plugin?id=55 -->

			<!-- 轮播图: 使用swiper容器；不需要组件uni-swipe-action uni-swiper-dot -->
			<swiper class="swiper" :autoplay="true" :indicator-dots="true">
				<swiper-item><image src="../../static/banner.jpg"></image></swiper-item>
				<swiper-item><image src="../../static/banner.jpg"></image></swiper-item>
				<swiper-item><image src="../../static/banner.jpg"></image></swiper-item>
			</swiper>

			<!-- 图标 icon: https://ext.dcloud.net.cn/plugin?id=28 -->
			<uni-icons type="pengyouquan" color="red" size="32" @click="consoleLog($event)"></uni-icons>

			<!-- 宫格 grid: showBorder:显示边框、square:正方形 -->
			<uni-grid :column="3" :showBorder="true" :square="true">
				<uni-grid-item><text class="text">文本</text></uni-grid-item>
				<uni-grid-item><text class="text">文本</text></uni-grid-item>
				<uni-grid-item><text class="text">文本</text></uni-grid-item>
			</uni-grid>

			<!-- 文本相关 -->
			<!-- 标题 title:  -->
			<uni-title type="h2" title="h2 居中" align="center"></uni-title>

			<!-- 标签 -->
			<uni-tag text="标签" type="success" inverted="true" disabled="false" @click="consoleLog($event)" style="width: 50px"></uni-tag>

			<uni-steps
				direction="column"
				:active="2"
				:options="[
					{ title: '买家下单', desc: '2018-11-11' },
					{ title: '卖家发货', desc: '2018-11-12' },
					{ title: '买家签收', desc: '2018-11-13' },
					{ title: '交易完成', desc: '2018-11-14' }
				]"
			></uni-steps>
		</view>
	</view>
</template>

<script>
export default {
	name: '',
	mixins: [],
	components: {},
	props: {},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	destroyed() {},
	methods: {
		consoleLog(e) {
			console.log(e);
		}
	}
};
</script>
<style scoped lang="less">
.page {
	position: relative;
	width: 100%;
	height: 100%;
	background: #fafafa; //灰色
	font-size: 14px;
	text-align: center;
	vertical-align: middle;
	word-wrap: break-word;
	.wrap {
		background-color: #ffffff;
		height: 100%;
	}
}
uni-swiper {
	height: 175px;
}
uni-image {
	width: 100%;
}
</style>
