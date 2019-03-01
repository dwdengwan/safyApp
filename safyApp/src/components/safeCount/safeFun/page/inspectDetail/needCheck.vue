<template>
	<div class="tab-main needCheck safeCheckList">
		<ul>
			<li class="clearfloat" @click="goBaseinfo">
				<div class="l-left lt">
					<p class="nc-title">临时检查任务</p>
					<div class="nc-time">2019-01-10</div>
				</div>
				<div class="l-right rt">
					<span class="mint-button-icon rotate180"><i class="mintui mintui-back"></i></span>
				</div>
			</li>
			<li v-for="item in needData" class="clearfloat" @click="goBaseinfo(item)">
				<div class="l-left lt">
					<p class="nc-title">{{item.name}}</p>
					<div class="nc-time">{{item.time}}</div>
				</div>
				<div class="l-right rt">
					<span class="mint-button-icon rotate180"><i class="mintui mintui-back"></i></span>
					<!--<span class="need-detail success need-btn">详情</span>
					<span class="need-check primary need-btn">检查</span>-->
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				needData:[
					{name:'办公室周检查任务1',time:'2019-01-10'},
					{name:'月度安全检查任务',time:'2019-01-10'},
					{name:'季度安全检查任务',time:'2019-01-10'},
					{name:'年度安全检查任务',time:'2019-01-10'},
					{name:'空调每周检查',time:'2019-01-10'},
					{name:'消防栓检查任务测试标题会不会超出范围显示点点点，还不出点点啊',time:'2019-01-10'}
				]
			}
		},
		methods:{
			goBaseinfo(item){
				this.$store.commit("goInspectDetail",item);
		  		console.log(item)
		  		 this.$router.push({ path: '/safeCount/safeFun/page/inspectDetail/baseInfo'})
			},
		}
	}
</script>

<style>
	
	.needCheck li>div.l-right span.need-detail{background: #51db86;}
	.needCheck li>div.l-right span.need-check{background: #3193F5;}
	
	
	
</style>
