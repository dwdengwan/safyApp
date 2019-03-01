<template>
	<div id="">
		<mt-header fixed title="安全标准">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
			<router-link to="/" slot="right">
				<mt-button></mt-button>
			</router-link>
		</mt-header>
		<section class="contanter padding-box" style="background: rgb(247, 249, 250);">
			<div class="safeFunPage">
				<ul class="safeFunPage-flex">
					<li class="safeFunPage-flex-box">
						<router-link :to="{ path: '/safeCount/safeRule/hazardList' }">
							<div class="safeFunPage-flex-box-img iconImg11"></div>
							<span>危险源清单</span>
						</router-link>
					</li>
					<li class="safeFunPage-flex-box">
						<router-link :to="{ path: '/safeCount/safeRule/bylaw' }">
							<div class="safeFunPage-flex-box-img iconImg22"></div>
							<span>规章制度</span>
						</router-link>
					</li>
				</ul>
			</div>
		</section>
		<myfooter :nowpage="'safeRule'"></myfooter>
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
		.iconImg11{
			background-image: url('../../../assets/images/icon.png');
			background-position: -290px 10px;
		}
		.iconImg22{
			background-image: url('../../../assets/images/icon.png');
			background-position: -360px 10px;
		}
		
	}
</style>