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

			<!-- 步骤条 -->
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
			
			<!-- 宫格: showBorder:显示边框、square:正方形 -->
			<uni-grid :column="3" :showBorder="true" :square="false">
				<uni-grid-item><text class="text">文本</text></uni-grid-item>
				<uni-grid-item><text class="text">文本</text></uni-grid-item>
				<uni-grid-item><text class="text">文本</text></uni-grid-item>
			</uni-grid>
			
			    <uni-calendar 
				 v-if="false"
			    :insert="true"
			    :lunar="true" 
			    :start-date="'2019-3-2'"
			    :end-date="'2019-5-20'"
			    @change="consoleLog($event)"
			     />

			<!-- 图标: https://ext.dcloud.net.cn/plugin?id=28 -->
			<uni-icons type="pengyouquan" color="red" size="32" @click="consoleLog($event)"></uni-icons>

			<!-- 标签; inverted: 空心  type：控制颜色（default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色)） -->
			<uni-tag text="标签" type="success" inverted="true" disabled="false" @click="consoleLog($event)" style="width: 50px"></uni-tag>
			
			<!-- 角标 -->
			<uni-badge text="9" type="error" :inverted="false"></uni-badge>

			<!-- 评分： -->
			<uni-rate value="3.5"  @change="consoleLog($event)" ></uni-rate>
		
			<!-- 文本相关 -->
			<!-- 标题:  -->
			<uni-title type="h2" title="h2 居中" align="center"></uni-title>
			
			<!-- 卡片： -->
			<uni-card title="标题文字" extra="额外信息" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" style="text-align: left">
				<p>内容主体，可自定义内容及样式</p>
			</uni-card>
		
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
	height: 100%;
}
// 修复uni-badge角标不是圆形的Bug
uni-text {
	padding: 0 !important;
}
/deep/.uni-card__header-extra-img-view {
	line-height: 0 ;
}
</style>
