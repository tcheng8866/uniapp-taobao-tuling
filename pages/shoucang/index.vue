<template>
	<view class="container" :style="{ heght: windowHeight + 'upx' }" @click="navToChatPage">
		<image mode="widthFix" style="margin-top: 20%;" src="/static/img/robot.jpg"></image>
		<view style="height: 30px;">我是机器人，和我聊天吧</view>
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
			windowHeight: 573*2
		};
	},
	onLoad() {

	},
	computed: {},
	watch: {},
	async created() {
		uni.getSystemInfo({
			success:function(res){
				console.log(JSON.stringify(res))
				 this.windowHeight = res.windowHeight*2
			}
		});
	},
	mounted() {},
	destroyed() {},
	methods: {
		navToChatPage() {
			uni.navigateTo({
				url: `/pages/robot/index`
			});
		}
	}
}
</script>

<style lang="less" scoped>
.container {
	overflow: hidden;
	text-align: center;
	background-color: #F7F7F7;
}
</style>
