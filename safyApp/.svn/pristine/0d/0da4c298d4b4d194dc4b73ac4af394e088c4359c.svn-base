<template>
	<div class="safeViewPage">
		<mt-header fixed title="安全统计">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
			<router-link to="/" slot="right">
				<mt-button></mt-button>
			</router-link>
		</mt-header>
		<section class="contanter" style="background: rgb(247, 249, 250);">
			<div class="safeViewPage-h">
				<h2>粤港供水</h2>
			</div>
			<div class="safeViewPage-c">
				<div class="safeViewPage-box">
					<div class="safeViewPage-box-header clearfloat">
						<p class="safeViewPage-box-left"><i></i><span>隐患分类</span></p>
						<p @click="goDetail" class="safeViewPage-box-right">更多<i class="rotate180 mint-toast-icon mintui mintui-back"></i></p>
					</div>
					<div class="safeViewPage-box-content">
						<ul>
							<li><span>设备设施及物料隐患</span> <span class="safeViewPage-box-badge" style="background-color:#32B7FA;">5</span></li>
							<li><span>人的不安全行为</span> <span class="safeViewPage-box-badge" style="background-color:#49CC7C;">3</span></li>
							<li><span>物的不安全状态</span> <span class="safeViewPage-box-badge" style="background-color:#FA7167;">10</span></li>
							<li><span>管理隐患</span> <span class="safeViewPage-box-badge" style="background-color:#43D6E0;">20</span></li>
							<li><span>环境隐患</span> <span class="safeViewPage-box-badge" style="background-color:#FFA133;">17</span></li>
						</ul>
					</div>
				</div>
				
				<div class="safeViewPage-box">
					<div class="safeViewPage-box-header clearfloat">
						<p class="safeViewPage-box-left"><i></i><span>隐患整改状态</span></p>
						<p class="safeViewPage-box-right">更多<i class="rotate180 mint-toast-icon mintui mintui-back"></i></p>
					</div>
					<div class="safeViewPage-box-content">
						<div class="safeViewPage-box-content-echart">
							<div id="safeViewPage-box-bar1" class="safeViewPage-box-content-echart-bar"></div>
						</div>
					</div>
				</div>
				
				<div class="safeViewPage-box">
					<div class="safeViewPage-box-header clearfloat">
						<p class="safeViewPage-box-left"><i></i><span>隐患等级</span></p>
						<p class="safeViewPage-box-right">更多<i class="rotate180 mint-toast-icon mintui mintui-back"></i></p>
					</div>
					<div class="safeViewPage-box-content">
						<div class="safeViewPage-box-content-echart">
							<div id="safeViewPage-box-bar2" class="safeViewPage-box-content-echart-bar"></div>
						</div>
					</div>
				</div>
			</div>
			
		</section>
		<myfooter :nowpage="'safeView'"></myfooter>
	</div>
</template>

<script>
	import myfooter from '../../footer'
	export default {
	  components: {
	    myfooter
	  },
	  mounted(){
	  	this.drawPie()
	  	this.drawPie2()
	  },
	  methods: {
	  	goDetail(){
	  		this.$router.push({ path: '/safeCount/safeView/detail'})
	  	},
	  	drawPie(){
	  		// 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('safeViewPage-box-bar1'));
        // 绘制图表
        myChart.setOption({
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        x: 'center',
			        data:['已整改','未整改','待整改']
			    },
			    series: [
		        {
	            name:'访问来源',
	            type:'pie',
	            color:['#FB7268','#49CC7C','#43D6E0'],
	            radius: ['60%', '40%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '14',
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:31, name:'已整改'},
	                {value:42, name:'未整改'},
	                {value:27, name:'待整改'}
	            ]
		        }
			    ]
				})
        window.addEventListener('resize', function () {
					myChart.resize()
				})
	  	},
	  	drawPie2(){
	  		// 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('safeViewPage-box-bar2'));
        // 绘制图表
        myChart.setOption({
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        x: 'center',
			        data:['重大隐患','一般隐患']
			    },
			    series: [
		        {
	            name:'访问来源',
	            type:'pie',
	            color:['#3E82FF','#43D6E0'],
	            radius: ['60%', '40%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '14',
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:6, name:'重大隐患'},
	                {value:24, name:'一般隐患'}
	            ]
		        }
			    ]
				})
        window.addEventListener('resize', function () {
					myChart.resize()
				})
	  	},
	  }
	 }
</script>

<style lang="less">
	.safeViewPage{
		background-color: #F5F6F7;
		/*margin-bottom: 2.4rem;*/
		.safeViewPage-h{
			margin: 15px;
			h2:after{margin-left: 5px;display: inline-block;content: "";width: 16px;height: 16px;
			background: url(../../../assets/images/arrow.png)no-repeat;background-size: contain;    
			};
		}
		.safeViewPage-c{
			margin: 0 15px;
			margin-bottom: 60px;
			.safeViewPage-box{
				background-color: #fff;
				margin-bottom: 15px;
				border-radius: 3px;
				.safeViewPage-box-header{
					height: 34px;
					line-height: 34px;
					border-bottom: 1px solid #F5F5F5;
					.safeViewPage-box-left{
						float: left;
						i {
							display: inline-block;
							line-height: 30px;
							width: 8px;
	            height: 15px;
	            border:1px solid #31B7FB;
	            background-color: #31B7FB;
	            border-radius: 0 15px 15px 0;
	            position: relative;
	    				top: 2px;
						}
						span{
							margin-left: 5px;
						}
					}
					.safeViewPage-box-right{
						float: right;
						margin-right: 12px;
						color: #ccc;
						i{
							font-size: 14px;
							display: inline-block;
						}
					}
				}
				.safeViewPage-box-content{
					margin: 10px 14px 10px 13px;
					li{
						height: 30px;
						line-height: 30px;
						color: #959595;
						.safeViewPage-box-badge{
							display: inline-block;
							float: right;
							width: 30px;
							height: 20px;
							color: #fff;
							text-align: center;
							line-height: 20px;
							border-radius: 3px;
						}
					}
					.safeViewPage-box-content-echart{
						width: 100%;
						height: 185px;
						.safeViewPage-box-content-echart-bar{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
</style>