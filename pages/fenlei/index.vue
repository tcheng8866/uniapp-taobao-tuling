<template>
	<view class="container between">
		<!-- 左侧分类导航 -->
		<scroll-view scroll-y="true" class="left">
			<view :class="[category.id == showCategoryIndex ? 'bg-red bold' : '']"
			 v-for="(category, index) in categoryList" 
			 :key="category.id"
			 @click="showCategory(category.id)">
				<view class="text">
					<view class="block"></view>
					{{ category.name }}
				</view>
			</view>
		</scroll-view>
		<!-- 右侧子导航 -->
		<scroll-view scroll-y="true" class="right">
			<view class="item" v-for="(item, index) in list" :key="index" @click="navToDetailPage(item)">
				<image style="height: 350rpx;" :src="item.ImgUrl"></image>
				<view style="padding: 0 5px;">
					<view class="font-size-16" style="height: 60px;">{{ item.GoodsName }}</view>
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
		</scroll-view>
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
			page: 1,
			pagesize: 10,
			showCategoryIndex: 1,
			categoryList: [
				// { name: '全部', id: 0 },
				{ name: '女装', id: 1 },
				{ name: '男装', id: 2 },
				{ name: '内装', id: 3 },
				{ name: '母婴', id: 4 },
				{ name: '美妆', id: 5 },
				{ name: '居家', id: 6 },
				{ name: '鞋包', id: 7 },
				{ name: '美食', id: 8 },
				{ name: '文体', id: 9 },
				{ name: '数码', id: 10 }
			],
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
		//分类切换显示
		showCategory(id) {
			this.showCategoryIndex = id;
			this.queryData(id)
		},
		//详情页
		navToDetailPage(item) {
			let id = item.GoodsId;
			uni.navigateTo({
				url: `/pages/detail/index?id=${id}`
			});
		},
		// 查询数据
		async queryData(cid) {
			await this.requestPromise(cid)
				.then(res => {
					console.log('success', res);
					this.list = res.data.data;
				})
				.catch(e => {
					console.log('error', e);
				});
		},
		requestPromise(cid=1, page=1, pagesize=20) {
			return new Promise((resolve, reject) => {
				uni.request({
					url: `http://api.xuandan.com/DataApi/index?appkey=1yt5mfwx15&page=${page}&SaleCount=0&YjRatio=0&cid=${cid}&pagesize=${pagesize}`,
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
	}
};
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	background-color: #fff;
	display: flex;
	.left,.right {
		top: 0upx;
		bottom: 0upx;
	}
	.left {
		position: fixed;
		top: 45px;
		width: 25%;
		text-align: center;
		background-color: antiquewhite;
		.text {
			line-height: 50px;
		}
	}
	.right {
		margin-left: 25%;
		width: 75%;
		left: 25%;
		.item {
			float: left;
			padding: 3px;
			width: 50%;
			background-color: white;
			background-clip: content-box;
		}
	}
}
</style>
