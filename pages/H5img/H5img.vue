<template>
	<view>
		<view class="">
			<view class="wrapper-title">
				{{userDynamicData.content}}


			</view>
		</view>
		<view class="wrapper" v-if="userDynamicData.picList.length > 0">
			
				<view class="" >
					<view class="wrapper-img">
						<image :src="websiteUrl+userDynamicData.picList[0]" mode=""></image>
					</view>
					<view class="wrapper-img">
						<image :src="websiteUrl+userDynamicData.picList[1]" mode=""></image>
					</view>
					<view class="wrapper-img">
						<image :src="websiteUrl+userDynamicData.picList[2]" mode=""></image>
					</view>
					
				</view>
				<view class="">
					<view class="wrapper-img">
						<image :src="websiteUrl+userDynamicData.picList[3]" mode=""></image>
					</view>
					<view class="wrapper-img">
						<image :src="websiteUrl+userDynamicData.picList[4]" mode=""></image>
					</view>
					<view class="wrapper-img">
						<image :src="websiteUrl+userDynamicData.picList[5]" mode=""></image>
					</view>
				</view>
				<view class="">
					<view class="wrapper-img">
						<image :src="websiteUrl+userDynamicData.picList[6]" mode=""></image>
					</view><view class="wrapper-img">
						<image :src="websiteUrl+userDynamicData.picList[7]" mode=""></image>
					</view><view class="wrapper-img">
						<image :src="websiteUrl+userDynamicData.picList[8]" mode=""></image>
					</view>
				</view>
				
				</view>
			
	<view class="wrapper" v-if="showVideo">
	<view class="uni-padding-wrap uni-common-mt" v-if="showVideo">
		<view>
			<video style="width:373px;height:210px;" id="myVideo" :src="websiteUrl+userDynamicData.workData.workPath" @error="videoErrorCallback"
			 :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
		</view>
	
	</view>
	</view>





	
		<view style="height: 10rpx; width: 100%;background:#F0F0F0;"></view>
		<view class="describe">


			<view class="time">
				<text>发布时间：{{userDynamicData.date}}</text>
			</view>
		</view>
		<view class="user">
			<view class="user-img">
				<image :src="userData.avatar" mode=""></image>
			</view>
			<view class="user-name">
				<view class="author">
					{{userData.name}}
				</view>
				<view class="amount">粉丝{{23}}</view>
			</view>
			<view class="introduce">
				<text>简介:</text>
			</view>
		</view>
		<view class="comment">
			<view class="comment-title">
				最新评论
			</view>
			<text>30</text>
		</view>
		<view class="" v-if="dynamicComment.length > 0 " >
			<view class="comment-content">
				<view class="content-img">
					<image :src="websiteUrl+dynamicComment[0].user.avatar" mode=""></image>
				</view>
				<view class="content-name">
					<text class="text-a">{{dynamicComment[0].user.name}}</text>
					<text class="text-b">{{dynamicComment[0].content}}</text>
				</view>

			</view>

			<view class="node">
				<view class="node-time">
					{{dynamicComment[0].createTime}}
				</view>
				<view class="reply">
					查看回复（12）
				</view>
				<view class="like">
					<text>231</text>
					<image src="../../static/dianzan1.png" mode=""></image>
				</view>
			</view>
		</view>


		<view class="bottom">
			<view class="bottom-content">
				<view class="img">
					<image src="../../static/80.png" mode=""></image>
				</view>
				<text>Smart Sax</text>

			</view>
			<view class="btn">

				<button type="primary" @tap="click">APP内打开</button>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					showVideo:false,
					showImg:true,
					showTp:true,

				// wrapperImg:true,
				imgSrc: {
					name: "../../static/dianzan.png"
				},
				userData: {},
				userDynamicData: {},
				dynamicComment: {},


			}

		},
		onLoad(options) {
			console.log(options)

			// "`https://user.vibesmusic.cn/app/share?type=${options.type}&id=${options.id}&userId=${options.userId}`"

			// let str ="http://localhost:8080/#/pages/H5video/H5video?type=0&id=364da4aadfae4dbe8b7f4bae1a7dd92d&userId=1dad05525cd04f3c99731b4004e79e10%27";
			// 'https://user.vibesmusic.cn/app/share?type=0&id=364da4aadfae4dbe8b7f4bae1a7dd92d&userId=1dad05525cd04f3c99731b4004e79e10';
			// str = str.split('?')[1].split('&');
			// console.log(str)
			// let  arr = `https://user.vibesmusic.cn/app/share?type=${options.type}&id=${options.id}&userId=${options.userId}`;
			// console.log(arr)
			uni.request({
				 url:'https://user.vibesmusic.cn/app/share',
				 // ?type=0&id=73a822acb3ea49ceb43f554178c00c97&userId=398fa9cc429c467bb2714e1473ef5369',
				 // 'https://user.vibesmusic.cn/app/share',
				
				

				method: "GET",
				data: {
					type: options.type,

					id: options.id,

					userId: options.userId


				},
				success: (res) => {
					this.userData = res.data.data.userData
					this.userDynamicData = res.data.data.userDynamicData
					this.dynamicComment = res.data.data.dynamicComment
					

					console.log("userData", this.userData)
					console.log("userDynamicData", this.userDynamicData)
					console.log("dynamicComment", this.dynamicComment)

					uni.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true,
					});
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
			add: function() {
				uni.showLoading({
					title: '请下载APP先'
				});
				setTimeout(function() {
					uni.hideLoading();
				}, 1000)
			}
		}
	}
</script>

<style>
	.wrapper-title {
		/* border: 1rpx solid #007AFF; */
		/* height: 110rpx; */
		font-size: 28rpx;
		/* line-height: 35rpx; */
		padding: 10rpx 20rpx;
		width: 530rpx;
		margin-left: 50px;
		/* text-align: center; */
		/* text-align: right; */
	}

	.wrapper {
		height: 100%;
		/* width: 100%; */
		/* border: 1rpx solid #4CD964; */
		display: flex;
		justify-content: center;
		align-items: center;
		/* background: #F0F0F0; */
	}

	.wrapper-img {
		margin: 10rpx 10rpx;
		height: 180rpx;
		width: 195rpx;
		/* display: flex; */
		/* border: 1rpx solid #007AFF; */
		margin: 20rpx 20rpx;


	}

	.wrapper-img image {
		height: 100%;
		width: 100%;
		border-radius: 10rpx;
	}


	.describe {
		height: 100%;
		width: 100%;
		/* border: 1rpx solid #007AFF; */
	}

	.describe .text {
		/* width: 100%; */
		height: 120rpx;
		font-size: 15px;
		font-weight: 600;
		color: rgba(53, 53, 53, 1);
		padding-left: 40rpx;
		/* background: #4CD964; */
		/* margin: 0 15px; */
		/* border: 1rpx solid #7C2427; */
		line-height: 60rpx;
		margin-top: 10rpx;

	}

	.classify {
		display: flex;
		/* justify-content: center; */
		align-items: center;
		/* margin: 0 20rpx; */
		height: 45px;
		width: 320rpx;
		padding-left: 30rpx;
		/* border: 1rpx solid #4CD964; */
	}

	.classify .title {
		display: inline-block;
		border: 1rpx solid #007AFF;
		height: 23px;
		width: 45px;
		margin-right: 20rpx;
		font-size: 12px;
		font-weight: 400;
		text-align: center;
		line-height: 23px;
		background: #007AFF;
		color: #FFFFFF;
		border-radius: 15px;


	}

	.classify .icon {
		height: 18px;
		width: 20px;
		margin-right: 10rpx;
		/* border-radius: 0px 1px 0px 1px; */
		/* border:1px solid rgba(151,151,151,1); */
	}

	.classify .number {
		font-family: PingFangSC-Regular, PingFangSC;

		font-size: 12px;
		width: 24px;
		height: 13px;
		font-weight: 400;
		color: rgba(129, 134, 140, 1);
		line-height: 13px;
	}

	.classify .icon image {
		vertical-align: top;

		height: 100%;
		width: 100%;
	}

	.describe .time {
		/* width: 230rpx; */
		height: 32rpx;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFangSC;
		/* border: 1rpx solid #2C405A; */
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		margin-top: 20rpx;
		line-height: 32rpx;
		/* margin-left: 15rpx; */
		padding-left: 30rpx;

	}

	.user {

		position: relative;
		display: flex;
		/* flex-direction: row; */
		/* justify-content: center; */
		align-items: center;
		height: 250rpx;
		width: 100%;
		/* margin-left: 20px; */
		padding-left: 20rpx;
		/* border: 1px solid #F0F2F5; */
	}

	.user-name {
		display: flex;
		/* border: 1px solid #2C405A; */
		margin-top: 0;
		margin-left: 75rpx;



	}

	.user-img {
		margin-top: 5px;
		height: 65px;
		width: 65px;



	}

	.user-img image {
		height: 100%;
		width: 100%;

		border-radius: 50%;
	}

	.author {
		width: 210rpx;
		height: 26px;
		line-height: 26px;
		font-weight: 500;
		font-size: 13px;

		/* border: 1px solid #25AAF8; */
		margin-left: 0;
	}

	.amount {
		font-size: 26rpx;
		height: 26px;
		width: 80px;
		line-height: 26px;
		font-weight: 400;
		color: rgba(151, 151, 151, 1);
		margin-left: 30rpx;
		/* border: 1px solid #4CD964; */
		text-align: left;

	}

	.introduce {
		font-size: 26rpx;
		width: 400rpx;
		height: 45rpx;
		/* text-align: center; */
		line-height: 45rpx;
		position: absolute;
		bottom: 20px;
		left: 57%;
		color: rgba(153, 153, 153, 1);
		transform: translate(-54%);
		/* border: 1rpx solid #007AFF; */
		font-weight: 400;
		white-space: nowrap;
		/* 强制不换行 */
		overflow: hidden;
		/* 超过的部分隐藏 */
		text-overflow: ellipsis;
		/* 打点展示 */
	}

	.comment {
		display: flex;
		align-items: center;
		height: 30px;
		width: 375px;
		/* border: 1px solid #007AFF; */
		margin-top: 10px;
	}

	.comment-title {
		height: 20px;
		width: 80px;
		font-size: 20px;
		font-weight: 600;
		color: rgba(53, 53, 53, 1);

		line-height: 20px;
		margin-left: 10px;
	}

	.comment text {
		height: 15px;
		width: 12px;
		font-size: 12px;
		font-weight: 600;
		color: rgba(53, 53, 53, 1);
		line-height: 12px;
		margin: 20px 10px;

	}

	.comment-content {
		display: flex;
		align-items: center;
		height: 245rpx;
		/* width: 360px; */
		padding-left: 10px;
		margin-top: 20px;
		/* border: 1px solid #2C405A; */
	}

	.content-img {
		height: 80rpx;
		width: 80rpx;
		/* border: 1px solid #007AFF; */
	}

	.content-img image {
		height: 100%;
		width: 100%;
		border-radius: 50px;
	}

	.content-name {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
	}

	.content-name .text-a {
		height: 15px;
		width: 115px;
		font-size: 26rpx;
		font-weight: 500;
		color: rgba(53, 53, 53, 1);
		line-height: 15px;
		font-weight: 600;
		margin-bottom: 12px;
		/* border: 1px solid #7C2427; */
	}

	.content-name .text-b {
		width: 168px;
		height: 14px;
		font-size: 14px;
		font-family: PingFangSC-Regular, PingFangSC;
		font-weight: 400;
		color: rgba(53, 53, 53, 1);
		line-height: 14px;
	}

	.node {
		display: flex;
		/* justify-content: center; */
		align-items: center;
		height: 100%;
		width: 370px;
		margin-top: 5px;
		/* border:1px solid #25AAF8 ; */
	}

	.node .node-time {
		/* width: 42px; */
		/* height: 11px; */
		font-size: 11px;
		font-weight: 400;
		color: rgba(129, 134, 140, 1);
		line-height: 11px;
		margin: 0 30px;
		padding-left: 35px;
		text-align: center;
	}

	.node .reply {
		font-size: 11px;
		font-weight: 400;
		color: rgba(38, 103, 159, 1);
		line-height: 11px;
		text-align: center;
	}

	.node .like {
		width: 65px;
		/* border: 1px solid #007AFF; */
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 70px;
	}

	.node .like text {
		font-size: 26rpx;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		line-height: 11px;

		margin-right: 10px;


	}

	.node .like image {
		height: 25px;
		width: 25px;
		/* border: 1rpx solid #333333; */

		line-height: 25px;


	}

	.bottom {

		/* width: 373px; */
		/* border: 1px solid #007AFF; */
		/* position: fixed; */
		display: flex;
		justify-content: space-between;
		margin-top: 40rpx;
		margin-bottom: 20rpx;
		align-items: center;
		/* height: 210rpx; */

		/* bottom: 0; */
	}

	.bottom-content {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 160px;
		/* border: 1px solid #4CD964; */
	}

	.bottom-content .img {
		height: 43px;
		width: 43px;
		padding-right: 10px;


	}

	.img image {
		height: 100%;
		width: 100%;
		border-radius: 15%;
	}

	.img text {
		width: 74px;
		height: 15px;
		font-weight: 500;
		color: rgba(53, 53, 53, 1);
		line-height: 15px;
		font-size: 15px;
	}

	.bottom .btn {

		/* 
		position: absolute;
		right: 0;
		bottom: 0; */
	}

	.btn button {
		width: 95px;
		height: 40px;
		font-size: 13px;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 40px;
		text-align: center;
		border-radius: 20px;
		background: #2CBAFA;
		margin-right: 10px;
	}

	>>>.uni-video-danmu-button.uni-video-danmu-button-active {
		display: none;
	}
</style>
