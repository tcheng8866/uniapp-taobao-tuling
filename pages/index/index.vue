<template>
	<view class="page">
		<view class="wrap">
			<!-- 请求封装 -->
			<view v-for="(item, index) in list" :key="index">
				<view>{{item.content}}</view>
			</view>
		</view>
		<navigator url="../test/test" open-type="navigate">
			<button>uni-app组件名称</button>
		</navigator>
		<navigator url="../demo/demo" open-type="navigate">
			<button>uni-app组件示例</button>
		</navigator>
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
		console.log(1)
		await this.queryData()
		console.log(2)
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
					this.list=res.data.result.data
				})
				.catch(e => {
					console.log('error', e);
				});
		},
		requestPromise() {
			// 把回调封装成promise形式
			return new Promise((resolve, reject) => {
				let time = (new Date().getTime() + '').substr(0, 10);
				uni.request({
					url: 'http://v.juhe.cn/joke/content/list.php',
					data: {
						key: 'bd50f1ee7e58f2e76eb39cf20618fbda',
						page: 1,
						pagesize: 1,
						sort: 'desc1',
						time: time
					},
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
</style>
