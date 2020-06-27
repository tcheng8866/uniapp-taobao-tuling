<template>
	<view class="container">
		<view class="page">
			<view class="list">
				<view v-for="(item, index) in list" :key="index" class="item" @click="navToDetailPage(item)">
					<view class="image-item"><image :src="item.ImgUrl"></image></view>
					<view class="title">{{ item.GoodsName }}</view>
					<view class="between">
						<view class="ActMoney">{{ item.ActMoney }}元券</view>
						<view class="SaleCount">月销 {{ item.SaleCount }}</view>
					</view>
					<view class="between">
						<view class="LastPrice">券后￥{{ item.LastPrice }}</view>
						<view class="GoodsPrice">原价￥{{ item.GoodsPrice }}</view>
					</view>
				</view>
			</view>
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
		return {
			list: []
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
		}
	}
};
</script>

<style scoped lang="less">
@import url('../../mixin.less');
.list {
	.item {
		float: left;
		width: 50%;
		padding: 20rpx;
	}
}
.between {
	display: flex;
	justify-content: space-between;
	padding: 6rpx 0;
}
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

.image-item {
	width: 100%;
	height: 170px;
	border-radius: 8px 8px 0 0;
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
</style>
