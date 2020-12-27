<template>
	<view class="container">
		<!-- 组件参考：https://ext.dcloud.net.cn/plugin?id=55 -->
		<!-- 加冒号的，说明后面的是一个变量或者表达式；没加冒号的后面就是对应的字符串字面量(所以props用number接收会报错)！ -->
		<!-- 颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色) -->
		<!-- 【完美支持】表单类 v-model 测试 -->

		<!-- 导航栏：系统默认就有返回导航; fixed固定头部 -->
		<uni-nav-bar
			title="导航栏组件"
			:fixed="true"
			left-icon="back"
			left-text="返回"
			@clickLeft="consoleLog('返回')"
			right-text="菜单"
			@clickRight="consoleLog('菜单')"
		></uni-nav-bar>

		<!-- @input、@confirm(enter键、需要v-model) -->
		<uni-search-bar @input="consoleLog($event)"></uni-search-bar>

		<!-- 通告栏：滚动时为单行；可现实喇叭图标、可显示关闭并关闭 -->
		<uni-notice-bar
			scrollable="true"
			single="true"
			showIcon="true"
			showClose="true"
			text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"
		></uni-notice-bar>

		<!-- 分段器 style-type：button/text -->
		<uni-segmented-control
			:current="1"
			:values="['选项卡1', '选项卡2', '选项卡3']"
			@clickItem="consoleLog($event)"
			style-type="button"
			active-color="#4cd964"
		></uni-segmented-control>

		<!-- 宫格: showBorder:显示边框(true)、square:正方形(true) -->
		<uni-grid :column="4" :square="true" @change="consoleLog($event)">
			<uni-grid-item>文本</uni-grid-item>
			<uni-grid-item>文本</uni-grid-item>
			<uni-grid-item>文本</uni-grid-item>
		</uni-grid>

		<!-- 轮播图: 使用swiper容器；不需要组件uni-swipe-action uni-swiper-dot -->
		<swiper :autoplay="true" :indicator-dots="true">
			<swiper-item><image src="../../static/banner.jpg"></image></swiper-item>
			<swiper-item><image src="../../static/components.png"></image></swiper-item>
		</swiper>

		<!-- 步骤条：direction方向（row/column） -->
		<uni-steps
			direction="row"
			:active="1"
			:options="[
				{ title: '买家下单', desc: '2018-11-11' },
				{ title: '卖家发货', desc: '2018-11-12' },
				{ title: '买家签收', desc: '2018-11-13' },
				{ title: '交易完成', desc: '2018-11-14' }
			]"
		></uni-steps>

		<!-- 日历：lunar：显示农历；insert（true/false）：插入模式 -->
		<uni-calendar :lunar="true" :start-date="'2020-12-20'" :end-date="'2022-01-01'" @change="consoleLog($event)" />

		<!-- 图标:  color(黑色)、size(16);   https://ext.dcloud.net.cn/plugin?id=28 -->
		<!-- 不要用css覆写icon字体，会导致内外层高度坍塌 -->
		<uni-icons type="pengyouquan" size="24" color="orange" @click="consoleLog('橙色')"></uni-icons>

		<!-- 这个也是个Icon，注意和icon互相影响 -->
		<!-- 评分(可以显示小数、但没提供每次step控制0.5)： -->
		<uni-rate value="3.5" size="24" @change="consoleLog($event)"></uni-rate>

		<!-- 标签: inverted: 空心  type：控制颜色-->
		<uni-tag text="标签" inverted="true" type="primary" @click="consoleLog('标签')" style="width: 50px; padding: 0 10px"></uni-tag>

		<!-- 角标: type 颜色 -->
		<uni-badge text="99" type="error" :inverted="false" @click="consoleLog('角标')"></uni-badge>

		<!-- 倒计时: 带天的、不带天的都支持、不传默认0 -->
		<uni-countdown :day="1" :hour="1" :minute="12" :second="40" :show-day="true" color="#FFFFFF" background-color="#00B26A" border-color="#00B26A"></uni-countdown>

		<!-- 加载更多：loading 的状态，可选值：more（loading前）、loading（loading中）、noMore（没有更多了） -->
		<uni-load-more status="loading"></uni-load-more>

		<!-- 文本相关 -->
		<!-- 标题:  -->
		<uni-title type="h2" title="h2 居中" align="center"></uni-title>

		<!-- 卡片： -->
		<uni-card title="标题文字" extra="额外信息" thumbnail="/static/banner.jpg" style="text-align: left">
			<p>内容主体，可自定义内容及样式</p>
		</uni-card>

		<!-- list列表 -->
		<uni-list>
			<uni-list-item title="无箭头" :show-arrow="false"></uni-list-item>
			<uni-list-item title="标题文字" note="描述信息" :show-badge="true" badge-text="12"></uni-list-item>
			<uni-list-item title="标题文字" :show-switch="true" :switchChecked="true" @switchChange="consoleLog($event)"></uni-list-item>
		</uni-list>

		<!-- 折叠面板 -->
		<uni-collapse accordion="true">
			<uni-collapse-item title="标题文字1">
				<view style="padding: 0 0 8px;">手风琴效果11111111111</view>
				<view style="padding: 0 0 8px;">手风琴效果22222222222</view>
			</uni-collapse-item>
		</uni-collapse>

		<!-- 数字输入框 -->
		<uni-number-box :min="0" :max="9" @change="consoleLog($event)"></uni-number-box>

		<!-- 分页器 -->
		<uni-pagination title="标题文字" show-icon="false" current="2" pageSize="10" total="50" @change="consoleLog($event)"></uni-pagination>

		<!-- 悬浮按钮: horizontal水平对齐、vertical竖直对齐、direction展开方向（horizontal、vertical） -->
		<uni-fab
			:content="[
				{ text: 'A', iconPath: '/static/components.png' },
				{ text: 'A', iconPath: '/static/components.png' }
			]"
			horizontal="left"
			vertical="bottom"
			direction="vertical"
			@trigger="consoleLog($event)"
		></uni-fab>

		<!-- 通过 ref 获取组件调用方法 open、close；-->
		<!-- dialog取消没打印（没$event参数） -->
		<button @click="$refs.popup.open()">打开弹窗</button>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog title="成功消息" content="你是否确认删除?" @confirm="consoleLog('关闭弹框'); $refs.popup.close()"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>

export default {
	name: '',
	mixins: [],
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
<style lang="less" scoped>
</style>
