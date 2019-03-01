<template>
	<div id="">
		<mt-header fixed title="安全任务">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
			<router-link to="/" slot="right">
				<mt-button></mt-button>
			</router-link>
		</mt-header>
		
		<section class="contanter padding-box">
				<div class="c-tabs clearfloat average">
				 	<div class="c-tab real-data" :class="{'active':(currentTab=='myTask')}" @click="toggleTab('myTask')"><a>我的任务</a></div>

				 	<div class="c-tab count-data" :class="{'active':(currentTab=='myInitiation')}" @click="toggleTab('myInitiation')"><a>我的发起</a></div>

				 	<div class="c-tab base-data" :class="{'active':(currentTab=='allTask')}" @click="toggleTab('allTask')"><a>所有任务</a></div>
				
					<div class="c-tab base-data" :class="{'active':(currentTab=='myFollow')}" @click="toggleTab('myFollow')"><a>我的关注</a></div>
				</div>

		   		<div :is="currentTab" keep-alive></div>
		</section>
		<myfooter :nowpage="'safeTask'"></myfooter>
	</div>
</template>

<script>
	import myfooter from '../../footer'
	import myTask from './myTask'
	import myInitiation from './myInitiation'
	import allTask from './allTask'
	import myFollow from './myFollow'
	export default {
	  components: {
	    myfooter,myTask,myInitiation,allTask,myFollow
	  },
	  data(){
		return{
			currentTab: 'myTask' ,// currentTab 用于标识当前触发的子组件
			heData:{},
			num:0
		}
	},
	   methods: {
	   	toggleTab: function(tab) {
			   this.currentTab = tab; // tab 为当前触发标签页的组件名
		},
	   }
	 }
</script>

<style>
</style>