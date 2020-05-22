<template>
	<view class="container">
		<view class="page">
			字体测试aygh1289
			<!-- 组件参考：https://ext.dcloud.net.cn/plugin?id=55 -->
			<!-- 加冒号的，说明后面的是一个变量或者表达式；没加冒号的后面就是对应的字符串字面量(所以props用number接收会报错)！ -->
			<!-- 颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色) -->
			<!-- 【完美支持】表单类 v-model 测试 -->
			<uni-search-bar v-model="search" @confirm="consoleLog($event)"></uni-search-bar>

			<!-- 导航栏：系统默认就有返回导航; fixed固定头部 -->
			<uni-nav-bar
				title="导航栏组件"
				:fixed="true"
				left-icon="back"
				left-text="返回"
				@clickLeft="consoleLog($event)"
				right-text="菜单"
				@clickRight="consoleLog($event)"
			></uni-nav-bar>

			<!-- 通告栏：滚动时为单行；可现实喇叭图标、可显示关闭并关闭 -->
			<uni-notice-bar
				scrollable="true"
				single="true"
				showIcon="true"
				showClose="true"
				text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"
			></uni-notice-bar>

			<!-- 搜索栏: @input  @confirm; 不建议处理padding:8px;-->
			<uni-search-bar @input="consoleLog($event)"></uni-search-bar>

			<!-- 分段器 style-type：button/text -->
			<uni-segmented-control
				:current="2"
				:values="['选项卡1', '选项卡2', '选项卡3']"
				@clickItem="consoleLog($event)"
				style-type="button"
				active-color="#4cd964"
			></uni-segmented-control>

			<!-- 宫格: showBorder:显示边框(true)、square:正方形(true) -->
			<uni-grid :column="3" :square="false" @change="consoleLog($event)">
				<uni-grid-item>文本</uni-grid-item>
				<uni-grid-item>文本</uni-grid-item>
				<uni-grid-item>文本</uni-grid-item>
			</uni-grid>

			<!-- 轮播图: 使用swiper容器；不需要组件uni-swipe-action uni-swiper-dot -->
			<swiper :autoplay="true" :indicator-dots="true">
				<swiper-item><image src="../../static/banner.jpg"></image></swiper-item>
				<swiper-item><image src="../../static/banner.jpg"></image></swiper-item>
				<swiper-item><image src="../../static/banner.jpg"></image></swiper-item>
			</swiper>

			<!-- 步骤条：direction方向（row/column） -->
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

			<!-- 日历：lunar：显示农历；insert（true/false）：插入模式 -->
			<uni-calendar :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" @change="consoleLog($event)" />

			<!-- 评分(可以小数、但没提供每次step控制0.5)： -->
			<uni-rate value="3.5" @change="consoleLog($event)"></uni-rate>

			<!-- 图标:  color、size(24); https://ext.dcloud.net.cn/plugin?id=28 -->
			<uni-icons type="pengyouquan" @click="consoleLog($event)"></uni-icons>

			<!-- 标签; inverted: 空心  type：控制颜色-->
			<uni-tag text="标签" inverted="true" type="primary" @click="consoleLog($event)" style="width: 50px"></uni-tag>

			<!-- 角标 -->
			<uni-badge text="9" type="error" :inverted="false"></uni-badge>

			<!-- 倒计时: 带天的、不带天的都支持、不传默认0 -->
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40" :show-day="true" color="#FFFFFF" background-color="#00B26A" border-color="#00B26A"></uni-countdown>

			<!-- 加载更多：loading 的状态，可选值：more（loading前）、loading（loading中）、noMore（没有更多了） -->
			<uni-load-more status="loading"></uni-load-more>

			<!-- 文本相关 -->
			<!-- 标题:  -->
			<uni-title type="h2" title="h2 居中" align="center"></uni-title>

			<!-- 卡片： -->
			<uni-card title="标题文字" extra="额外信息" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" style="text-align: left">
				<p>内容主体，可自定义内容及样式</p>
			</uni-card>

			<!-- list列表 -->
			<uni-list>
				<uni-list-item title="无箭头" :show-arrow="false"></uni-list-item>
				<uni-list-item title="标题文字" note="描述信息" :show-badge="true" badge-text="12"></uni-list-item>
				<uni-list-item title="标题文字" :show-switch="true" :switchChecked="true" @switchChange="consoleLog($event)" :show-arrow="false"></uni-list-item>
			</uni-list>

			<!-- 折叠面板 -->
			<uni-collapse accordion="true">
				<uni-collapse-item title="标题文字"><view style="padding: 30rpx;">手风琴效果</view></uni-collapse-item>
				<uni-collapse-item title="标题文字"><view style="padding: 30rpx;">手风琴效果</view></uni-collapse-item>
			</uni-collapse>

			<!-- 数字输入框 -->
			<uni-number-box :min="0" :max="9" @change="consoleLog($event)"></uni-number-box>

			<!-- 分页器 -->
			<uni-pagination title="标题文字" show-icon="true" current="2" pageSize="10" total="50" @change="consoleLog($event)"></uni-pagination>

			<!-- 悬浮按钮: horizontal水平对齐、vertical竖直对齐、direction展开方向（horizontal、vertical） -->
			<uni-fab
				v-if="false"
				:content="[{ text: 'A', iconPath: '/static/components.png' }]"
				horizontal="right"
				vertical="bottom"
				direction="horizontal"
				@trigger="consoleLog($event)"
			></uni-fab>

			<!-- 索引列表 -->
			<uni-indexed-list v-if="false" :showSelect="true" :options="options" @click="consoleLog($event)"></uni-indexed-list>

			<!-- 弹框：type：top/center/bottom/message/dialog/share -->
			<!-- 通过 ref 获取组件调用方法 open、close；maskClick：点击遮罩关闭、普通模式下是有效的 -->
			<button @click="open">打开弹窗</button>
			<uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
			<!-- type="message" -->
			<uni-popup ref="popup0" type="message">
				<!-- success/warn/info/error -->
				<uni-popup-message type="success" message="成功消息(这就是个带颜色轻提示/感觉没啥用)" :duration="2000"></uni-popup-message>
			</uni-popup>
			<!-- type="dialog" -->
			<uni-popup ref="popup1" type="dialog">
				<!-- mode base（提示对话框）/input（可输入对话框） -->
				<!-- （示例是错的、type/mode[base/input]混乱、已修复） -->
				<!-- 取消不拦截 :before-close="true" -->
				<uni-popup-dialog type="success" mode="input" message="成功消息" :duration="2000" @close="close" @confirm="close"></uni-popup-dialog>
			</uni-popup>
			<!-- type="share" -->
			<uni-popup ref="popup2" type="share"><uni-popup-share title="分享到" @select="consoleLog($event)"></uni-popup-share></uni-popup>
		</view>
	</view>
</template>

<script>
//  从github uni-ui 复制的弹框拓展组件
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
import uniPopupShare from '@/components/uni-popup/uni-popup-share.vue';

export default {
	name: '',
	mixins: [],
	components: { uniPopupMessage, uniPopupDialog, uniPopupShare },
	props: {},
	data() {
		return {
			search: '测试uni-ui支持v-model',
			options: [
				{
					letter: 'A',
					data: ['阿克苏机场', '阿拉山口机场', '阿勒泰机场', '阿里昆莎机场', '安庆天柱山机场', '澳门国际机场']
				},
				{
					letter: 'B',
					data: ['保山机场', '包头机场', '北海福成机场', '北京南苑机场', '北京首都国际机场']
				}
			]
		};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	destroyed() {},
	methods: {
		consoleLog(e) {
			// console.log('v-model', this.search);
			console.log(e);
		},
		open() {
			// this.$refs.popup.open();
			// this.$refs.popup0.open();
			this.$refs.popup1.open();
			// this.$refs.popup2.open();
		},
		close() {
			// this.$refs.popup.close();
			// this.$refs.popup0.close();
			this.$refs.popup1.close();
			// this.$refs.popup2.close();
		}
	}
};
</script>
<style scoped lang="less">
@import url('../../mixin.less');
</style>
