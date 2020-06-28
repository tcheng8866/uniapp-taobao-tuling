<template>
	<view class="container">
		<view class="page">
			<view class="list">
				<view v-for="(item, index) in list" :key="index" class="item" @click="navToDetailPage(item)">
					<view class="image-item"><image :src="item.ImgUrl"></image></view>
					<view class="block">
						<view class="title">{{ item.GoodsName }}</view>
						<view class="between">
							<view class="ActMoney">{{ item.ActMoney }}元券</view>
							<view class="SaleCount">月销 {{ item.SaleCount }}</view>
						</view>
						<view class="between">
							<view class="LastPrice">
								券后￥
								<text class="big">{{ item.LastPrice }}</text>
							</view>
							<view class="GoodsPrice">原价￥{{ item.GoodsPrice }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 跳转图灵机器人聊天 -->
		<movable-area>
			<movable-view :x="x" :y="y" direction="all" @change="onChange" @click="navToChatPage">
				<view class="icon">
					<image class="robot" src="../../static/img/robot.jpg"></image>
					<view>小黄鸡</view>
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
		async queryData() {
			// async await 包裹promise
			// 这里写法就多了：接收变量(判断条件) / .then的写法都行
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
			// 把回调封装成promise形式
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
			//测试数据没有写id，用title代替
			let id = item.GoodsId;
			uni.navigateTo({
				url: `/pages/detail/detail?id=${id}`
			});
		},
		onChange: function(e) {
			this.old.x = e.detail.x;
			this.old.y = e.detail.y;
		},
		navToChatPage() {
			uni.navigateTo({
				url: `/pages/chat/chat`
			});
		}
	}
};
</script>

<style scoped lang="less">
@import url('../../mixin.less');
.list {
	.item {
		float: left;
		padding: 5px;
		width: 50%;
		background-color: white;
		background-clip: content-box;
	}
}
.image-item {
	width: 100%;
	height: 175px;
	border-radius: 5px 5px 0 0;
	overflow: hidden;
	image {
		width: 100%;
		height: 100%;
		opacity: 1;
	}
}
.image-banner {
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 100%;
	image {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
}
.block {
	padding: 0 5px;
	.title {
		height: 38px;
		overflow: hidden;
	}
	.between {
		display: flex;
		justify-content: space-between;
		padding: 6rpx 0;

		.ActMoney {
			background: red;
			color: white;
			padding: 0 5px;
			border-radius: 5px;
		}
		.SaleCount {
			color: darkgray;
		}
		.LastPrice {
			color: red;
		}
		.GoodsPrice {
			text-decoration: line-through;
		}
		.big {
			font-size: 22px;
		}
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
