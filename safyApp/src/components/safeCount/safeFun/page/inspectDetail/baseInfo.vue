<template>
	<div class="baseBox">
		<mt-header fixed title="安全检查">
			<router-link to="/safeCount/safeFun/Inspect" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
			<router-link to="" slot="right">
				<mt-button>筛选</mt-button>
			</router-link>
		</mt-header>
		<section class="contanter" style="padding-bottom: 0;margin-bottom: 0;">
			<div class="c-tabs clearfloat average">
			 	<div class="c-tab real-data" :class="{'active':(currentTab=='basicInfo')}" @click="toggleTab('basicInfo')"><a>基本信息</a></div>
			 	<div class="c-tab real-data" :class="{'active':(currentTab=='checkList')}" @click="toggleTab('checkList')"><a>检查表单</a></div>
			 	<div class="c-tab count-data" :class="{'active':(currentTab=='hiddenDanger')}" @click="toggleTab('hiddenDanger')"><a>隐患</a></div>
			 	<div class="c-tab base-data" :class="{'active':(currentTab=='appendix')}" @click="toggleTab('appendix')"><a>附件</a></div>
			</div>

	   		<div :is="currentTab" keep-alive></div>
		</section>
	</div>
</template>

<script>
	import checkList from './baseChild/checkList'
	import basicInfo from './baseChild/basicInfo'
	import hiddenDanger from './baseChild/hiddenDanger'
	import appendix from './baseChild/appendix'
	export default {
		name: "",
		data(){
			return{
				currentTab: 'checkList' ,// currentTab 用于标识当前触发的子组件
		}},
		components: {
		   checkList, basicInfo,hiddenDanger,appendix
		},
		mounted(){},
	  	methods: {
	  		toggleTab: function(tab) {
			   this.currentTab = tab; // tab 为当前触发标签页的组件名
			},
	  	}
	 }
</script>

<style>
	#app .inspectBox .c-tab.active a{
		color: #3193f5;
	}
</style>