<template>
	<view class="container">
		<video v-if="item.video" :src="item.video" autoplay="true"></video>
		<image mode="widthFix" v-if="!item.video && item.ImgUrl" :src="item.ImgUrl"></image>
		<view style="padding: 0 10px;">
			<view class="between">
				<view>
					<text class="red">￥</text>
					<text class="red big-price font-size-20" style="padding: 0 10px 0 0;">{{ item.LastPrice }}</text>
					<text class="decoration">原价￥{{ item.GoodsPrice }}</text>
				</view>
				<view>已售<text class="red">{{ item.SaleCount }}</text>件</view>
			</view>
			<!-- 商品名称 -->
			<view class="font-size-20" style="padding: 10px 0;">{{ item.LongGoodsName }}</view>
			<!-- 描述 -->
			<view>{{ item.TjRemark }}</view>
			<!-- 优惠券-购买 -->
			<view class="around red-block" style="padding: 10px 0; margin: 10px 0;" @click="showDialog()">
				<view>
					<view class="font-size-20">{{ item.ActMoney }}元优惠券</view>
					<view>使用时间: {{ item.BeginDate | subStr10 }} - {{ item.EndDate | subStr10 }}</view>
				</view>
				<view>
					<view>立刻</view>
					<view>领券</view>
				</view>
			</view>
			<!-- 店铺 -->
			<view class="font-size-20">{{ item.ShopName }}</view>
			<!-- 图片 -->
			<image mode="widthFix" v-if="item.video" :src="item.ImgUrl"></image>
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
			item: {},
			taobao: {}
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
		let id = e.id || '596371055958';
		this.queryData(id);
	},
	async created() {},
	mounted() {},
	destroyed() {},
	methods: {
		// 查询数据
		async queryData(id) {
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
		tbkjump(url) {
     // 淘宝的商品链接，换成需要访问的地址
     let openUrl = url;
     // 因为 url 一般是从其它地方获取的，所以这里要将 http 和 https 删去
     // 也可以直接输入 https:// 之后的内容，则不需要此步判断，直接调用 plus.runtime.openURL
     if (url.substr(0, 5) === 'https') {
      openUrl = `taobao://${url.substr(8)}`;
     } else if (url.substr(0, 4) === 'http') {
      openUrl = `taobao://${url.substr(7)}`;
     }
     console.log("跳转"+openUrl)
     plus.runtime.openURL(openUrl, function(res) {
       uni.showModal({
        content: '本机未检测到对应客户端，是否打开浏览器访问页面？',
        success: function(res) {
         if (res.confirm) {
          plus.runtime.openURL(url);
         }
        }
       });
      })
		},
		// 调用转链、展示淘口令
		async showDialog() {
			let id = this.item.GoodsId;
			await this.requestPromiseBuy(id)
				.then(res => {
					console.log('success', res);
					this.taobao = res.data;
					this.tbkjump(this.taobao.shortLink)
				})
				.catch(e => {
					console.log('error', e);
				});
		},
		// 单品转链
		requestPromiseBuy(id) {
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
		}
	}
};
</script>

<style lang="less" scoped>
</style>
