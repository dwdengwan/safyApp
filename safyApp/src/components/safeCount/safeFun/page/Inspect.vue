<template>
	<div class="inspectBox">
		<mt-header fixed title="安全检查">
			<router-link to="/safeCount/safeFun" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
			<router-link to="" slot="right">
				<mt-button>筛选</mt-button>
			</router-link>
		</mt-header>
		<section class="contanter" style="padding-bottom: 0;margin-bottom: 0;">
			<div class="c-tabs clearfloat average">
			 	<div class="c-tab real-data" :class="{'active':(currentTab=='needCheck')}" @click="toggleTab('needCheck')"><a>待检查</a></div>

			 	<div class="c-tab count-data" :class="{'active':(currentTab=='myCheck')}" @click="toggleTab('myCheck')"><a>我的检查</a></div>

			 	<div class="c-tab base-data" :class="{'active':(currentTab=='allCheck')}" @click="toggleTab('allCheck')"><a>全部检查</a></div>
			</div>

	   		<div :is="currentTab" keep-alive></div>
		</section>
	</div>
</template>

<script>
	import needCheck from './inspectDetail/needCheck'
	import myCheck from './inspectDetail/myCheck'
	import allCheck from './inspectDetail/allCheck'
	export default {
		name: "",
		data(){
			return{
				currentTab: 'needCheck' ,// currentTab 用于标识当前触发的子组件
		}},
		components: {
		    needCheck,myCheck,allCheck
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