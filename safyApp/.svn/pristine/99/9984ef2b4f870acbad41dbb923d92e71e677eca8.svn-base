<template>
	<div id="my-task" class="tab-main">
		<div class="c-tabs2 clearfloat average">
		 	<div class="c-tab2 real-data" :class="{'active':(currentTab=='needDone')}" @click="toggleTab('needDone')">
		 		<a>待办</a>
		 		<span class="messageBar " :class="{'borderRadiusTwo':(messageBar_one >= 10)}">{{messageBar_one}}</span>
		 	</div>

		 	<div class="c-tab2 count-data" :class="{'active':(currentTab=='alreadyDone')}" @click="toggleTab('alreadyDone')">
		 		<a>已办</a>
		 		<span class="messageBar" :class="{'borderRadiusTwo':(messageBar_two >= 10)}">{{messageBar_two}}</span>
		 	</div>

		 	<div class="c-tab2 base-data" :class="{'active':(currentTab=='needRead')}" @click="toggleTab('needRead')">
		 		<a>待阅</a>
		 		<span class="messageBar" :class="{'borderRadiusTwo':(messageBar_three >= 10)}">{{messageBar_three}}</span>
		 	</div>
		
			<div class="c-tab2 base-data" :class="{'active':(currentTab=='all')}" @click="toggleTab('all')">
				<a>全部</a>
				<span class="messageBar" :class="{'borderRadiusTwo':(messageBar_four >= 10)}">{{messageBar_four}}</span>
			</div>
		</div>

   		<div :is="currentTab" keep-alive></div>
	</div>
</template>

<script>
	import needDone from './myTaskChild/needDone'
	import alreadyDone from './myTaskChild/alreadyDone'
	import needRead from './myTaskChild/needRead'
	import all from './myTaskChild/all'
	export default {
	    components: {
	    	needDone,alreadyDone,needRead,all
	    },
	  	data(){
			return{
				currentTab: 'needDone' ,// currentTab 用于标识当前触发的子组件
				heData:{},
				num:0,
				messageBar_one:11,
				messageBar_two:1,
				messageBar_three:101,
				messageBar_four:1001,
			}
		},
		mounted(){
			this.messageBarStyle();
		},
	   	methods: {
		   	toggleTab: function(tab) {//点击切换
				   this.currentTab = tab; // tab 为当前触发标签页的组件名
			},
			messageBarStyle (){//待办信息提示数 样式
				//var messageBar = this.$refs.messageBar.innerText;
				//console.log(messageBar)
			},
	   }
	 }
</script>

<style>
</style>