<template>
	<div>
		<mt-header fixed title="危险源清单">
			<router-link to="/safeCount/safeRule" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
			<router-link to="/" slot="right">
				<mt-button>筛选</mt-button>
			</router-link>
		</mt-header>
		<section class="contanter" style="padding-bottom: 0;margin-bottom: 0;">
			<div class="detailCheckList safeCheckList">
				<ul>
					<li v-for="item in needData" class="clearfloat" @click="goBaseinfo(item)">
						<div class="l-left lt">
							<p class="nc-title">{{item.name}}</p>
							<div class="nc-time">{{item.time}}</div>
						</div>
						<div class="l-right rt">
							<span class="mint-button-icon rotate180"><i class="mintui mintui-back"></i></span>
						</div>
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
				needData:[
					{name:'危险源清单',time:'公司/厂站/网格/局域'},
					{name:'危险源清单',time:'公司/厂站/网格/局域'},
					{name:'危险源清单',time:'公司/厂站/网格/局域'},
					{name:'危险源清单',time:'公司/厂站/网格/局域'},
					{name:'危险源清单',time:'公司/厂站/网格/局域'},
					{name:'危险源清单测试标题会不会超出范围显示点点点，还不出点点啊',time:'公司/厂站/网格/局域'}
				]
			}
		},
		methods:{
			goBaseinfo(item){
				this.$store.commit("goCheckListDetail",item);
		  		this.$router.push({ path: '/safeCount/safeRule/hazardListDetail'})
			},
		}
	}
</script>

<style>
</style>