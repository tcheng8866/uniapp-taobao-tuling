<template>
	<view class="container">
		<view class="page">
				{{item.TjRemark}}
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
			item: {}
		};
	},
	computed: {},
	watch: {},
	onLoad(e) {
		let id = e.id
		this.queryData(id);
	},
	async created() {},
	mounted() {},
	destroyed() {},
	methods: {
		async queryData(id) {
			// async await 包裹promise
			// 这里写法就多了：接收变量(判断条件) / .then的写法都行
			await this.requestPromise(id)
				.then(res => {
					console.log('success', res);
					this.item = res.data.data[0];
				})
				.catch(e => {
					console.log('error', e);
				});
		},
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
	}
}
</script>

<style scoped lang="less">
@import url('../../mixin.less');

</style>
