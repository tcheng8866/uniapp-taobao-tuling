<template>
	<view class="container">
		<view class="page">
			<navigator url="../demo/demo" open-type="navigate"><button>demo</button></navigator>
			<navigator url="../demo/http" open-type="navigate"><button>http</button></navigator>
			<navigator url="../demo/ui" open-type="navigate"><button>ui</button></navigator>
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
		return {};
	},
	computed: {},
	watch: {},
	async created() {},
	mounted() {},
	destroyed() {},
	methods: {}
};
</script>

<style scoped lang="less">
@import url('../../mixin.less');
</style>
