<template>
	<div class="patDetail">
		<mt-header fixed title="档案详情">
			<router-link to="/safeCount/safeFun/Record" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<section class="contanter" style="margin-bottom:0;">
			<ul>
				<li>
					<label class="m-name">隐患来源</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">厂站</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">网格</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">设备/作业</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">设备编号</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">隐患照片</label>
					<span class="img-box">
						<div><img src="../../../../../assets/images/timg.jpg" alt="" /></div>
						<div><img src="../../../../../assets/images/timg2.jpg" alt="" /></div>
					</span>
				</li>
				<li>
					<label class="m-name">隐患描述</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">隐患等级</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">隐患分类</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">内部违章人员</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">外部违章人员</label>
					<span class="m-value">562478950</span>
				</li>
				
				<li>
					<label class="m-name">检查人</label>
					<span class="m-value">{{pat_detail.name}}</span>
				</li>
				<li>
					<label class="m-name">检查时间</label>
					<span class="m-value">{{pat_detail.time}}</span>
				</li>
				<li>
					<label class="m-name">整改措施</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">整改期限</label>
					<span class="m-value">{{pat_detail.name}}</span>
				</li>
				<li>
					<label class="m-name">整改责任人</label>
					<span class="m-value">{{pat_detail.time}}</span>
				</li>
				<li>
					<label class="m-name">整改进展</label>
					<span class="m-value">562478950</span>
				</li>
				<li>
					<label class="m-name">整改后照片</label>
					<span class="img-box">
						<div><img src="../../../../../assets/images/timg.jpg" alt="" /></div>
						<div><img src="../../../../../assets/images/timg2.jpg" alt="" /></div>
					</span>
				</li>
				<li>
					<label class="m-name">隐患状态</label>
					<span class="m-value">已关闭</span>
				</li>
				<li>
					<label class="m-name">复核人</label>
					<span class="m-value">{{pat_detail.name}}</span>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data(){
			return {
				
			}
		},
		computed: {
			...mapState(['pat_detail'])
		},
		mounted(){
			 //var data =this.$route.query.detailData;
			 //console.log(data)
		},
		methods:{
			
		},
	}
</script>

<style lang="less">
	.patDetail{
		section.contanter{
			padding-bottom: 0;
			background: #fff;
			ul{
				padding-left: 15px;width:100%;height:100%;
				li{
					padding: 15px 0;border-bottom: 1px solid #f5f6f7;font-size: 15px;
					.m-name{color: #666666;display: inline-block;width: 30%;}
					.m-value{color: #333333;display: inline-block;width: 68%;padding-right: 15px;}
					.img-box{
						display: block;width: 100%;padding-top: 10px;
						div{
							display: inline-block;width: 48%;height:123px;border-radius: 5px;overflow: hidden;
							img{width: 100%;}
						}
					}
				}
				li:last-child{border-bottom: 0;}
			}
		}
	}
 
</style>