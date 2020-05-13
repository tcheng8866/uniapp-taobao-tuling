import Vue from 'vue'
import App from './App'

// 导入comp-wrap
import compWrap from 'comp-wrap'
Vue.use(compWrap)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
