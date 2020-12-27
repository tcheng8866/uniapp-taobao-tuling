<template>
	<view class="container">
		<view class="item" v-for="(item, index) in list" :key="index" @click="navToDetailPage(item)">
			<image style="height: 350rpx;" :src="item.ImgUrl"></image>
			<view style="padding: 0 5px;">
				<view class="font-size-16">{{ item.GoodsName }}</view>
				<view class="between" style="padding: 5px 0;">
					<view class="red-block">{{ item.ActMoney }}元券</view>
					<view class="darkgray">月销 {{ item.SaleCount }}</view>
				</view>
				<view class="between" style="padding: 0 0 5px;">
					<view class="red">
						券后￥
						<text class="font-size-20">{{ item.LastPrice }}</text>
					</view>
					<view class="decoration">原价￥{{ item.GoodsPrice }}</view>
				</view>
			</view>
		</view>
		<!-- 跳转图灵机器人聊天 -->
		<movable-area>
			<movable-view :x="x" :y="y" direction="all" @change="onChange" @click="navToChatPage">
				<view class="icon">
					<image class="robot" src="/static/img/robot.jpg"></image>
					<view>机器人</view>
				</view>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
export default {
	name: '',
	mixins: [],
	components: {},
	props: {},
	data() {
		return {
			list: [],
			x: 325,
			y: 350,
			old: {
				x: 0,
				y: 0
			}
		};
	},
	computed: {},
	watch: {},
	async created() {
		await this.queryData();
	},
	mounted() {},
	destroyed() {},
	methods: {
		// 查询数据
		async queryData() {
			await this.requestPromise()
				.then(res => {
					console.log('success', res);
					this.list = res.data.data;
				})
				.catch(e => {
					console.log('error', e);
				});
		},
		requestPromise() {
			return new Promise((resolve, reject) => {
				uni.request({
					url: 'http://api.xuandan.com/DataApi/index?AppKey=1yt5mfwx15&type=6',
					data: {},
					success: res => {
						resolve(res);
					},
					fail: e => {
						reject(e);
					},
					complete: () => {
						console.log('complete do');
					}
				});
			});
		},
		//详情页
		navToDetailPage(item) {
			let id = item.GoodsId;
			uni.navigateTo({
				url: `/pages/detail/index?id=${id}`
			});
		},
		onChange: function(e) {
			this.old.x = e.detail.x;
			this.old.y = e.detail.y;
		},
		navToChatPage() {
			uni.navigateTo({
				url: `/pages/robot/index`
			});
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	padding: 0 3px;
	.item {
		float: left;
		padding: 3px;
		width: 50%;
		background-color: white;
		background-clip: content-box;
	}
}

movable-area {
	position: absolute;
	top: 0;
	right: 0;
	height: 667px;
	width: 13%;
	overflow: hidden;
	movable-view {
		width: 50px;
		height: 50px;
		.icon {
			background-color: red;
			text-align: center;
			color: yellow;
			padding-bottom: 5px;
			.robot {
				width: 50px;
				height: 50px;
			}
		}
	}
}
</style>
