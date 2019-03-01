<template>
	<div class="tab-main detailCheckList safeCheckList">
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
					{name:'检查表1',time:'2019-01-10'},
					{name:'检查表2',time:'2019-01-10'},
					{name:'检查表3',time:'2019-01-10'},
					{name:'检查表4',time:'2019-01-10'},
					{name:'检查表5',time:'2019-01-10'},
					{name:'检查表6测试标题会不会超出范围显示点点点，还不出点点啊',time:'2019-01-10'}
				]
			}
		},
		methods:{
			goBaseinfo(item){
				this.$store.commit("goCheckListDetail",item);
		  		this.$router.push({ path: '/safeCount/safeFun/page/inspectDetail/thisList'})
			},
		}
	}
</script>

<style>
	
	
</style>
