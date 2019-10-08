<template>
	<view>
		<view>
			<view class="bg bg-blur" :style="'background:url('+websiteUrl+str.musicImg+')'">

			</view>
			<view class="content-front">
				<view class="wrapper-title">
					<view class="left">
						
					</view>
					<view class="">
						{{str.musicName}}
					</view>
					<view class="right">
					
						<!-- <image src="../../static/gengduo.png" mode=""></image> -->
					</view>
				</view>
				<view class="hader">
					<view class="hader-img">
						<image src="../../static/80.png" mode=""></image>
					</view>
					<view class="hader-text">
						Smart Sax
					</view>
				</view>
				<view class="catalogue">
					<text @tap="setTabStatus(1)" :class="{'cate-active':tabStatus===1}">原曲</text>
					<text @tap="setTabStatus(2)" :class="{'cate-active':tabStatus===2}">伴奏</text>
					<text @tap="setTabStatus(3)" :class="{'cate-active':tabStatus===3}">伴奏</text>
				</view>
				<!-- <view class="audio">
					<view class="audio-paly">
				
					</view>
				</view> -->
				<view class="page-section page-section-gap" style="text-align: center;">
					<audio style="text-align: left" :src="websiteUrl+str.musicPath" :poster="websiteUrl+str.musicImg" :author='current.author'
					 :action="audioAction" controls></audio>
					 <view class="mocen">
					 	
					 </view>
				</view>
				<view class="pointer-A">
					<image src="../../static/bai_pic@2x.png" mode="widthFix"></image>
				</view>
				<view class="message">
					<view class="message-name">
						{{str.musicName}}
					</view>
					<view class="message-A">
						{{str.musicAuthor}}
					</view>
				</view>
				<view class="hader-H">
					<text>更多音乐，尽在Smart Sax,赶紧下载！</text>
				</view>
				<view class="btn">
					<button type="primary" @tap="setTabadd(1)" :class="{'active':indexId===1}">打开</button>
					
					<button type="primary" @tap="setTabadd(2)" :class="{'active':indexId===2}">下载</button>
				</view>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: {
					poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
					name: '致爱丽丝',
					author: '暂无',
					src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',
				},
				tabStatus: 1,
				indexId:1,
				str: {

				},
				// http://smartsax.oss-cn-hangzhou.aliyuncs.com/ 
				audioAction: {
					method: 'pause'
				},
			}
		},
		onLoad(options) {
				console.log(options)


			// let str =
			// 	'https://user.vibesmusic.cn/app/share?type=0&id=364da4aadfae4dbe8b7f4bae1a7dd92d&userId=1dad05525cd04f3c99731b4004e79e10';
			// str = str.split('?')[1].split('&');
			// console.log(str)
			uni.request({
				url:'https://user.vibesmusic.cn/app/share',
				// ?type=1&id=b859413ee6114124a1e760da5d490ed8&userId=1dad05525cd04f3c99731b4004e79e10',
				// 'https://user.vibesmusic.cn/app/share',
				
				
				
				// 'https://user.vibesmusic.cn/app/share?type=1&id=b859413ee6114124a1e760da5d490ed8&userId=1dad05525cd04f3c99731b4004e79e10',
				method: "GET",
				data: {
					type:options.type,
					id:options.id,
					userId:options.userId
				},
				success: (res) => {

					this.str = res.data.data.musicInfo;
					console.log(this.str)

					// uni.showToast({
					// 	title: '请求成功',
					// 	icon: 'success',
					// 	mask: true,
					// });
					// this.res = '请求结果 : ' + JSON.stringify(res);
				},
				fail: (err) => {
					console.log('request fail', err);
					// uni.showModal({
					// 	content: err.errMsg,
					// 	showCancel: false
					// });
				},
				complete: () => {
					this.loading = false;
				}
			});

		},

		methods: {
			setTabStatus(val) {
				console.log(222)
				this.tabStatus = val;
				
				
				uni.showLoading({
					title: '请先下载APP'
				});

				setTimeout(function() {
					uni.hideLoading();
				}, 1000);
			},
			setTabadd(val){
				this.indexId= val;
				if(this.indexId == 2) {
					window.location.href = "https://sj.qq.com/myapp/detail.htm?apkName=com.vibes.music"
				}
			},
			add() {
				
			}

		}
	}
</script>

<style>
	.bg {
		/* background: url("../../static/timg.jpg"); */
		height: 730px;
		text-align: center;
		line-height: 600px;
	}

	.bg-blur {
		float: left;
		width: 100%;

		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		-webkit-filter: blur(15rpx);
		-moz-filter: blur(15rpx);
		-o-filter: blur(15rpx);
		-ms-filter: blur(15rpx);
		filter: blur(15rpx);
	}

	.content-front {
		position: absolute;
		/* border: 1rpx solid #25AAF8; */

		/* height: 100%; */
		width: 100%;

	}

	.wrapper-title {
		width: 100%;
		height: 92.75rpx;
		/* background: #007AFF; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;


	}

	.left {
		height: 60rpx;
		width: 60rpx;
		margin-left: 20rpx;

	}

	.left image {
		width: 100%;
		height: 100%;

	}

	.right {
		height: 60rpx;
		width: 60rpx;
		margin-right: 20rpx;
		/* background: #007AFF; */

	}

	.right image {
		width: 100%;
		height: 100%;
	}

	/*  */

	.hader {
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: 1rpx solid #007AFF; */
		height: 85rpx;
		width: 250rpx;
	}

	.hader-text {
		font-size: 28rpx;
		color: #FFFFFF;
		font-weight: 500;

	}

	.hader-img {
		height: 70rpx;
		width: 70rpx;
		margin: 0 20rpx;

	}

	.hader-img image {
		height: 100%;
		width: 100%;
		border-radius: 20%;
	}

	.catalogue {
		/* border: 1rpx solid #25AAF8; */
		height: 65rpx;

		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50rpx;

	}

	.catalogue text {
		margin: 0 20rpx;
		font-size: 22rpx;
		color: #FFFFFF;
		border: 1rpx solid #FFFFFF;
		height: 45rpx;
		width: 65rpx;
		text-align: center;
		line-height: 45rpx;
		border-radius: 10rpx;

	}

	.audio {
		border: 1rpx solid #4CD964;
		margin-top: 30rpx;
		height: 550rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.audio-paly {
		border-radius: 50%;
		border: 50rpx solid;

		height: 350rpx;
		width: 350rpx;
		background: url(../../static/timg.jpg);
		background-size: cover;
		animation: move 15s linear infinite;

	}

	@keyframes move {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.pointer-A {
		height: 280rpx;
		width: 90rpx;
		/* border: 1rpx solid #25AAF8; */
		position: absolute;
		top: 35%;
		left: 75%;
		margin-top: -140rpx, -42.5rpx;
		z-index: 600;
		transform-origin: top;
		transform: rotateZ(15deg);
	}

	.pointer-A image {
		height: 100%;
		width: 100%;

	}

	.message {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 120rpx;
		width: 230rpx;
		/* border: 1rpx solid #007AFF; */
		margin: 0 auto;
	}

	.message-name {
		font-size: 38rpx;
		font-family: PingFangSC-Regular, PingFangSC;
		color: rgba(255, 255, 255, 1);
		font-weight: 400;
		line-height: 25rpx;
		margin-bottom: 30rpx;
	}

	.message-A {
		font-size: 22rpx;

		font-family: PingFangSC-Regular, PingFangSC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 17px;
		margin-bottom: 70rpx;
	}

	.hader-H {
		/* border: 1rpx solid #4CD964; */
		width: 450rpx;
		height: 45rpx;
		text-align: center;
		line-height: 45rpx;
		color: #FFFFFF;
		position: absolute;
		bottom: -30rpx;
		font-size: 22rpx;
		left: 50%;
		transform: translate(-50%);
	}

	.btn {
		height: 120rpx;
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		/* border: 1rpx solid #2C405A; */
		justify-content: center;
		align-items: center;

	}

	.btn button {
		height: 65rpx;
		width: 35%;
		border-radius: 50rpx;
		font-size: 28rpx;
		border: 1px solid rgba(28, 154, 246, 1);
		font-family: PingFangSC-Medium, PingFangSC;
		font-weight: 500;
		color: rgba(24, 146, 245, 1);
		background: transparent;
		text-align: center;
		line-height: 65rpx;

	}
	.active{
		background: #E9ECEF !important;
	}

	.cate-active {
		color: #2C405A !important;
	}



	>>>.uni-audio-default {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 70rpx;
		

		border: transparent;
		background: transparent;


	}

	>>>.uni-audio-left {
		height: 272rpx;
		width: 272rpx;
		border-radius: 50%;
		border: 50rpx solid;
		background-size: cover;
	
		z-index: 600;
		animation: move 15s linear infinite;
		position: relative;

	}

	>>>.uni-audio-right {
		/* display: none; */
		margin-top: 30rpx;
	}
	>>>.uni-audio-button.play{
		z-index: 900;
	}

	>>>.uni-audio-button {
		/* border: 1rpx solid #00CE47; */
		height: 80rpx;
		width: 80rpx;
		position: absolute;
		top: 20%;
		left: 20%;



	}

	>>>.uni-audio-time {
		display: none;
	}

	>>>.uni-audio-author {
		display: none;
	}
	.mocen{
		height: 376rpx;
		width: 376rpx;
		border: 50rpx;
		position: absolute;
		top: 58%;
		left: 50%;
		/* z-index: 600; */
		/* border-radius: 50%; */
		background: url(../../static/record.png) no-repeat;
		 background-size: contain;
		transform: translate(-50%,-58%);
	}
</style>
