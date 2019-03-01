<template>
	<div class="tab-main myCheck safeCheckList">
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
</template>

<script>
	export default {
		data(){
			return{
				needData:[
					{name:'全部检查任务',time:'2019-01-10'},
					{name:'办公室周检查任务1',time:'2019-01-10'},
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
</style>
