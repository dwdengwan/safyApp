<template>
	<div>
		<mt-header fixed title="统计分析">
			<router-link to="/safeCount/safeFun" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
			<router-link to="" slot="right">
				<mt-button></mt-button>
			</router-link>
		</mt-header>
		<section class="contanter padding-box">
			统计分析
		</section>
	</div>
</template>

<script>
	export default {
		name: "pat",
		data(){return{}},
		mounted(){},
	  methods: {}
	 }
</script>

<style>
</style>