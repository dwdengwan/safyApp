<template>
	<div>
		<mt-header fixed title="视图详情">
			<router-link to="/safeCount/safeView" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<div slot="right">
				<p v-if="!popupVisible" @click="open">刷选</p>
				<p v-else @click="close">收起</p>
			</div>-->
		</mt-header>
		<section class="contanter padding-box">
			<table>
				<tr>
					<td>公司名称</td>
					<td>危险源数</td>
					<td>安全观察数</td>
					<td>安全检查数</td>
					<td>隐患整改率</td>
					<td>任务完成率</td>
				</tr>
				<tr v-for="item in trList">
					<td>{{item.name}}</td>
					<td>{{item.wxy}}</td>
					<td>{{item.aqgc}}</td>
					<td>{{item.aqjc}}</td>
					<td>{{item.yhzg}}</td>
					<td>{{item.rwwc}}</td>
				</tr>
			</table>
		</section>
	</div>
</template>

<script>
	export default {
		data (){
			return{
				trList:[{"name":"肇高水司","wxy":"10","aqgc":"8","aqjc":"10","yhzg":"8","rwwc":"10",},
				{"name":"常平水司","wxy":"20","aqgc":"5","aqjc":"4","yhzg":"3","rwwc":"3",},
				{"name":"梧州水司","wxy":"30","aqgc":"4","aqjc":"5","yhzg":"5","rwwc":"4",},
				{"name":"清溪水司","wxy":"50","aqgc":"8","aqjc":"7","yhzg":"6","rwwc":"6",},
				{"name":"梅州水务","wxy":"10","aqgc":"2","aqjc":"14","yhzg":"7","rwwc":"7",}
				]
			}
		}
	}
</script>

<style>
</style>