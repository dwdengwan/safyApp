<template>
	<div class="tab-main safeCheckList">
		<ul>
			<li v-for="item in needData" class="clearfloat" @click="goHidDanger(item)">
				<div class="l-left lt">
					<p class="nc-title">{{item.name}}</p>
					<div class="nc-time">
						<span>盯眙水务</span>-
						<span>主厂房</span>
						<button class="hid-grade normal-hid">一般隐患</button>
						<button class="hid-status large-hid">未整改</button>
					</div>
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
					{name:'隐患描述',time:'2019-01-10'},
					{name:'隐患描述',time:'2019-01-10'},
					{name:'隐患描述一段内容',time:'2019-01-10'},
					{name:'隐患描述',time:'2019-01-10'},
					{name:'这里应该是一段关于隐患描述',time:'2019-01-10'},
					{name:'隐患描述测试标题会不会超出范围显示点点点，还不出点点啊',time:'2019-01-10'}
				]
			}
		},
		methods:{
			goHidDanger(item){
				this.$store.commit("goHiddenDanger",item);
		  		this.$router.push({ path: '/safeCount/safeFun/page/inspectDetail/thisList'})
			},
		}
	}
</script>

<style>
	.nc-time button{margin-left: 5px;font-size:12px;display:inline-block;background:#fff;width: 58px;height: 18px;line-height:18px;border-radius: 2px;border: solid 1px #ffa132;}
	.nc-time button.normal-hid{border: solid 1px #ffa132;color:#ffa132;}
	.nc-time button.large-hid{border: solid 1px #fa7268;color:#fa7268;}
</style>