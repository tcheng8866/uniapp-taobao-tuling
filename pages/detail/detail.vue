<template>
	<view class="container">
		<view class="page">
			<video v-if="item.video" class="video" :src="item.video" autoplay="true"></video>
			<image v-if="!item.video && item.ImgUrl" class="video" :src="item.ImgUrl"></image>
			<view class="block">
				<view class="between">
					<view>
						<text class="red">￥</text>
						<text class="red big-price">{{ item.LastPrice }}</text>
						<text class="GoodsPrice">原价￥{{ item.GoodsPrice }}</text>
					</view>
					<view>
						<text class="red">{{ item.SaleCount }}</text>
						人购买
					</view>
				</view>
				<!-- 商品名称 -->
				<view class="LongGoodsName">{{ item.LongGoodsName }}</view>
				<!-- 描述 -->
				<view class="TjRemark">{{ item.TjRemark }}</view>
				<!-- 优惠券-购买 -->
				<view class="Coupon" @click="showDialog()">
					<view class="ActMoney">
						<view class="big-money">{{ item.ActMoney }}元优惠券</view>
						<view class="date">使用时间: {{ item.BeginDate | subStr10 }} - {{ item.EndDate | subStr10 }}</view>
					</view>
					<view class="Collect">
						<view>立刻</view>
						<view>领券</view>
					</view>
				</view>
				<!-- 店铺 -->
				<view class="ShopName">{{ item.ShopName }}</view>
				<!-- 图片 -->
				<image v-if="item.video" class="ImgUrl" :src="item.ImgUrl"></image>
			</view>
		</view>
		<!-- 遮罩 -->
        <view class="mask" v-show="copyBlock" @click="copyBlock=false">
        </view>
		<!-- 弹框 -->
		<view class="tkl-block" v-show="copyBlock">
			<text :selectable='true'>
				復置本段内容{{ link.tkl }}达开tao寶或掂击炼接
				<uni-link>{{ link.shortLink }}</uni-link>
				...[{{ item.LongGoodsName }}}]
			</text>
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
			copyBlock: false,
			item: {},
			link: {}
		};
	},
	computed: {},
	watch: {},
	filters: {
		subStr10(e) {
			if (e) {
				return e.substr(0, 10);
			}
		}
	},
	onLoad(e) {
		let id = e.id;
		this.queryData(id);
	},
	async created() {},
	mounted() {},
	destroyed() {},
	methods: {
		// 初始化
		async queryData(id) {
			// async await 包裹promise
			// 这里写法就多了：接收变量(判断条件) / .then的写法都行
			await this.requestPromise(id)
				.then(res => {
					console.log('success', res);
					this.item = res.data.data[0];
					console.log(this.item);
				})
				.catch(e => {
					console.log('error', e);
				});
		},
		// 查询详情
		requestPromise(id) {
			// 把回调封装成promise形式
			return new Promise((resolve, reject) => {
				uni.request({
					url: 'http://api.xuandan.com/DataApi/item?AppKey=1yt5mfwx15&id=' + id,
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
		// 调用转链、展示淘口令
		async showDialog() {
			let id = this.item.GoodsId;
			await this.requestPromiseBuy(id)
				.then(res => {
					console.log('success', res);
					this.link = res.data;
					this.copyBlock = true
					console.log(this.link);
				})
				.catch(e => {
					console.log('error', e);
				});
		},
		// 单品转链
		requestPromiseBuy(id) {
			// 把回调封装成promise形式
			return new Promise((resolve, reject) => {
				uni.request({
					url: 'http://api.xuandan.com/DataApi/GetItemTklLink?appkey=1yt5mfwx15&id=' + id,
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
		// 复制剪贴板（方法可能不行，已设置text标签允许自己复制）
		copy() {
			uni.setClipboardData({
				  data: this.link,
			    success: function (res) {
						console.log(res.data)
						this.copyBlock = false
					},
					fail: e => {
						console.log(e)
						this.copyBlock = false
					},
			});
		}
	}
};
</script>

<style scoped lang="less">
@import url('../../mixin.less');
/deep/.uni-video-container {
	position: relative;
}
.video {
	width: 100%;
	height: 375px;
}
.block {
	padding: 0 10px;
}
.between {
	display: flex;
	justify-content: space-between;
	padding: 6rpx 0;
}

.SaleCount {
	color: darkgray;
}
.red {
	color: red;
}
.big-price {
	font-size: 22px;
	margin-right: 10px;
}
.GoodsPrice {
	text-decoration: line-through;
}
.Coupon {
	display: flex;
	text-align: center;
	margin: 10px;
	.ActMoney {
		padding: 14px;
		flex: 8;
		background: red;
		color: white;
		border-radius: 10px;
		.big-money {
			font-size: 20px;
		}
	}
	.Collect {
		padding: 14px;
		flex: 2;
		background: red;
		color: white;
		border-radius: 10px;
	}
}
.ShopName {
	text-align: left;
	font-size: 20px;
	color: blue;
	margin: 10px 0;
}
.TjRemark {
	text-indent: 22px;
}
.ImgUrl {
	padding-top: 10px;
	width: 100%;
	height: 300px;
}
.mask {  
  position: fixed;  
  top:0;  
  left:0;  
  z-index:999;  
  width:100%;  
  height:100vh;  
  background:rgba(0,0,0,0.4);  

}
.tkl-block {
	position: fixed;
	transform: translate(-50%,-50%);
	width: 100%;
	top: 50%;
	left: 50%;
	padding: 50px 30px;
	font-size: 18px;
	text-indent: 22px;
	color: white;
	background-color: chartreuse;
	z-index: 1000;
}
</style>
