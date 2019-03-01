<template>
	<div id="">
		<mt-header fixed title="安全功能">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
			<router-link to="/" slot="right">
				<mt-button></mt-button>
			</router-link>
		</mt-header>
		<section class="contanter padding-box" style="background: #f7f9fa;">
			<div class="safeFunPage">
				<ul class="safeFunPage-flex">
					<li class="safeFunPage-flex-box">
						<router-link :to="{ path: '/safeCount/safeFun/Survey' }">
							<div class="safeFunPage-flex-box-img iconImg1"></div>
							<span>安全观察</span>
						</router-link>
					</li>
					<li class="safeFunPage-flex-box">
						<router-link :to="{ path: '/safeCount/safeFun/pat' }">
							<div class="safeFunPage-flex-box-img iconImg2"></div>
							<span>随手拍</span>
						</router-link>
					</li>
					<li class="safeFunPage-flex-box">
						<router-link :to="{ path: '/safeCount/safeFun/Inspect' }">
							<div class="safeFunPage-flex-box-img iconImg3"></div>
							<span>安全检查</span>
						</router-link>
					</li>
					<li class="safeFunPage-flex-box">
						<router-link :to="{ path: '/safeCount/safeFun/Record' }">
							<div class="safeFunPage-flex-box-img iconImg4"></div>
							<span>隐患档案</span>
						</router-link>
					</li>
					<li class="safeFunPage-flex-box">
						<div class="safeFunPage-flex-box-img iconImg5"></div>
						<span>统计分析</span>
					</li>
					<li class="safeFunPage-flex-box">
						<div class="safeFunPage-flex-box-img iconImg6"></div>
						<span>培训考试</span>
					</li>
					<li class="safeFunPage-flex-box">
						<div class="safeFunPage-flex-box-img iconImg7"></div>
						<span>标准化评价</span>
					</li>
				</ul>
			</div>
		</section>
		<myfooter :nowpage="'safeFun'"></myfooter>
	</div>
</template>

<script>
	import myfooter from '../../footer'
	export default {
	  components: {
	    myfooter
	  },
	   methods: {}
	 }
</script>

<style lang="less">
	.safeFunPage{
		width: 100%;
		padding: 1rem .5rem;
		.safeFunPage-flex{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
      box-sizing: border-box; 
			.safeFunPage-flex-box{
				text-align: center;
				position: relative;
				color: #868686; 
				width: 31.3%;
				background: #fff;
				height: 120px;
				/*line-height: 130px;*/
				box-sizing: border-box;
				margin-left: 1%;
				margin-right: 1%;
				border-radius: 8px;
				box-shadow: #edeff0 0 9px 5px -5px;
				margin-bottom: 15px;
				.safeFunPage-flex-box-img{
        	margin: auto;
        	margin-top: 10%;
					width: 70%;
					height: 60%;
					background-repeat:no-repeat;
					background-size:450px 302px;
					vertical-align:middle;
				}
				span{
					color: #666;
					font-size: 12px;
					display:inline-block;
					vertical-align:middle;
				}
			}
		}
		.iconImg1{
			background-image: url('../../../assets/images/icon.png');
			background-position: 14px 10px;
		}
		.iconImg2{
			background-image: url('../../../assets/images/icon.png');
			background-position: -62px 10px;
		}
		.iconImg3{
			background-image: url('../../../assets/images/icon.png');
			background-position: -139px 10px;
		}
		.iconImg4{
			background-image: url('../../../assets/images/icon.png');
			background-position: -216px 10px;
		}
		.iconImg5{
			background-image: url('../../../assets/images/icon.png');
			background-position: 15px -63px;
		}
		.iconImg6{
			background-image: url('../../../assets/images/icon.png');
			background-position: -61px -63px;
		}
		.iconImg7{
			background-image: url('../../../assets/images/icon.png');
			background-position: -139px -63px;
		}
	}
</style>