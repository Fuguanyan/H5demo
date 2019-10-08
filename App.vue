<script>
	export default {
		onLaunch: function() {
			// uni.request({
			// 	url: 'json/musicInfo',
			// 	dataType: 'text',
			// 	data: {
			// 		noncestr: Date.now()
			// 	},
			// 	success: (res) => {
			// 		console.log('request success', res)
			// 		uni.showToast({
			// 			title: '请求成功',
			// 			icon: 'success',
			// 			mask: true,
						
			// 		});
			// 		this.res = '请求结果 : ' + JSON.stringify(res);
			// 	},
			// 	fail: (err) => {
			// 		console.log('request fail', err);
			// 		uni.showModal({
			// 			content: err.errMsg,
			// 			showCancel: false
			// 		});
			// 	},
			// 	complete: () => {
			// 		this.loading = false;
			// 	}
			// });
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
