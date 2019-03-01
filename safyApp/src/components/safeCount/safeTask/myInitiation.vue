<template>
	<div id="my-initiation" class="tab-main">
		<div class="c-tabs2 clearfloat average">
		 	<div class="c-tab2 real-data" :class="{'active':(currentTab=='draft')}" @click="toggleTab('draft')">
		 		<a>草稿</a>
		 		<span class="messageBar">1</span>
		 	</div>

		 	<div class="c-tab2 count-data" :class="{'active':(currentTab=='inhand')}" @click="toggleTab('inhand')">
		 		<a>处理中</a>
		 		<span class="messageBar">1</span>
		 	</div>

		 	<div class="c-tab2 base-data" :class="{'active':(currentTab=='over')}" @click="toggleTab('over')">
		 		<a>结束</a>
		 		<span class="messageBar">1</span>
		 	</div>
		
			<div class="c-tab2 base-data" :class="{'active':(currentTab=='discard')}" @click="toggleTab('discard')">
				<a>废弃</a>
				<span class="messageBar">1</span>
			</div>
		</div>

   		<div :is="currentTab" keep-alive></div>
	</div>
</template>

<script>
	import draft from './myInitiationChild/draft'
	import inhand from './myInitiationChild/inhand'
	import over from './myInitiationChild/over'
	import discard from './myInitiationChild/discard'
	export default {
	  components: {
	    draft,inhand,over,discard
	  },
	  data(){
		return{
			currentTab: 'draft' ,// currentTab 用于标识当前触发的子组件
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