import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.prototype.websiteUrl = 'http://smartsax.oss-cn-hangzhou.aliyuncs.com/';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
