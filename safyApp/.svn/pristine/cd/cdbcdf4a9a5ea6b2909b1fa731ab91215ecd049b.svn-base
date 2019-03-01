<template>
	<div class="hazardListDetail">
		<mt-header fixed title="详情">
			<router-link to="/safeCount/safeRule/hazardList" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<div slot="right">
				<p v-if="" @click="">编辑</p>
				<p v-else @click="">保存</p>
			</div>-->
		</mt-header>
		<section class="contanter" style="margin-bottom:0;">
			<ul>
				<li>
					<label class="m-name">危险源编码</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">厂站</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">网格</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">区域</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">危险源分类</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">危险源</label>
					<span class="m-value">562478950</span>
				</li>
			</ul>
			<div>
				<div class="l-title">风险</div>
				<ul>
					<li @click="goFengxian">
						<label class="m-name">触电</label>
						<span class="m-value mint-button-icon rotate180">
							<i class="mintui mintui-back"></i>
						</span>
					</li>
					<li @click="goFengxian">
						<label class="m-name">机械伤害</label>
						<span class="m-value mint-button-icon rotate180">
							<i class="mintui mintui-back"></i>
						</span>
					</li>
				</ul>
			</div>
			
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return{
			}
		},
		methods:{
			goFengxian(item){
				this.$store.commit("goCheckListDetail",item);
		  		this.$router.push({ path: '/safeCount/safeRule/otherDanDetail'})
			},
		}
	}
</script>

<style lang="less">
	.hazardListDetail{
		section.contanter{
			padding-bottom: 0;
			background: #fff;
			ul{
				padding-left: 15px;width:100%;
				li{
					padding: 15px 0;border-bottom: 1px solid #f5f6f7;font-size: 15px;
					.m-name{color: #666666;display: inline-block;width: 25%;}
					.m-value{color: #333333;display: inline-block;width: 75%;text-align: right;float: right;padding-right: 15px;}
					.img-box{
						display: block;width: 100%;
						div{
							display: inline-block;width: 48%;height:123px;border-radius: 5px;overflow: hidden;
							img{width: 100%;}
						}
					}
					.mint-button-icon{width: auto;margin-right: 15px;}
				}
				li:last-child{border-bottom: 0;}
			}
			.l-title{
				    padding: 0 15px;
				    height: 32px;
				    line-height: 32px;
				    background-color: #8a9099;
				    color: #fff;
			}
			
		}
	}
</style>