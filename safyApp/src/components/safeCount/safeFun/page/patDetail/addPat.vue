<template>
	<div class="addPat" style="background: #fff;">
		<mt-header fixed title="随手拍-添加">
			<router-link to="/safeCount/safeFun/pat" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<div slot="right">
				<p v-if="" @click="">保存</p>
				<!--<p v-else @click="">保存</p>-->
			</div>
		</mt-header>
		<section class="contanter listStyle" style="">
			<ul>
				<li>
					<label class="m-name">组织结构</label>
					<input @click="showPicker" readonly class="m-value" v-model="zhuzhi" type="text" placeholder="请选择组织结构"/>
				</li>
				<li>
					<label class="m-name">设备/作业</label>
					<mySearchCheck input_class="m-value" span_class="out" place_holder="请输入设备/作业"></mySearchCheck>
				</li>
				<li>
					<label class="m-name">设备编号</label>
					<mySearchCheck input_class="m-value" place_holder="请输入设备编号"></mySearchCheck>
					
				</li>
				<li>
					<label class="m-name">隐患描述</label>
					<input class="m-value" type="text" placeholder="请输入关键字"/>
				</li>
				<li>
					<label class="m-name">隐患照片</label>
					<div>
					    <div style="width: 100%;height:auto;position: relative;padding-right: 15px;">
							<form id="upBox">
								 <div id="inputBox"><input type="file" title="请选择图片" id="file" multiple accept="image/png,image/jpg,image/gif,image/JPEG"/></div>
							     <div id="imgBox"></div>
							</form>
						</div>
					</div>
				</li>
			</ul>
		</section>
		<div class="fixBar">
			<button id="btn">提交</button>
		</div>
		<!--组织结构二级联动-->
		<myMpicker ref="pickerbox" :arrayPosition="province" @confirm="pickerConfirm" :address="this.address"></myMpicker>
		<!--设备编号-->
		
		<!--<mt-radio
			align="right"
      		class="page-part"
     	 	title="单选框列表"
      		v-model="value1"
      		:options="options1" />-->
	</div>
</template>

<script>
	import myMpicker from '../../../mpicker';
	import mySearchCheck from '../../../searchCheck';
	export default {
		data(){
			return{
				isPicker: false,//控制组织结构是否显示
				value1:[],
      			headerImage:'',
      			province:"全部",//默认组织结构
		        address: {
		          '全部':['全部'],
		          '广东': ['连州水务', '金胜环保', '常平水司', '开平污水','开平环保','清溪水司','道滘环保','云浮水司','南沙水司','五华环保','五华绿源','五华清源','兴宁环保','梅州水务','丰顺水司',
		          '汕头水司','汕尾环保','阳山环保','仁化环保','阳江清源','恩施水务','粤海水务','遂溪水务','肇水发展','肇高水司','大浦环保','高州水司'],
		          '广西': ['梧州环保', '梧州水司'],
		          '江苏': ['武进水司','徐州供水','仪征水司','宝应水司','盱眙水司','高邮水司','盐城水务'],
		          '海南': ['儋州水司','儋州滨海'],
		          '湖南': ['长沙','永州'],
		          '湖北': ['武汉','宜昌'],
		          '江西': ['九江','南昌'],
		        },
		        zhuzhi:'',//选择组织的容器
			    valueBox:[]
			}
		},
		components: { myMpicker,mySearchCheck },
		created() {
    		this.options1 = ['选项A', '选项B', '选项C'];
		},
		mounted(){
			this.imageFun();//上传照片拍照
			
		},
	  	computed: {
		  
	    },
		methods:{
			pickerConfirm(val){//组织结构选择后返回的数据
				//console.log(val)
				this.zhuzhi=val.a+' '+val.b
			},
			showPicker(){//显示隐藏组织结构
				this.$refs.pickerbox.isPicker = true;
		     },
			imageFun(){//上传图片、拍照
				console.log(imgUpload)
				//var imgBox = document.getElementById("imgBox");
				//var subBtn = document.getElementById("btn");
				imgUpload({
					inputId:'file', //input框id
					imgBox: 'imgBox', //图片容器id
					buttonId: 'btn', //提交按钮id
					upUrl:'',  //提交地址
					data:'file1', //参数名
					num:"5"//上传个数
				})
			},
			addPhoto(){
				
			},
		}
	}
</script>

<style lang="less">
	.addPat{
		section.contanter{
			background: #fff;
			padding-bottom: 0;
			margin-bottom: 3rem;
			ul{
				li{
					.img-box{
						display: block;width: 100%;
						div{
							display: inline-block;width: 48%;height:123px;border-radius: 5px;overflow: hidden;
							img{width: 100%;}
						}
					}
					#btn{
						display: inline-block;
						text-align: center;
						line-height: 30px;
						outline: none;
						width: 100px;
						height: 30px;
						background: cornflowerblue;
						border: 1px solid cornflowerblue;
						color: white;
						cursor: pointer;
						border-radius: 5px;
					}
				}
				li:last-child{border-bottom: 0;}
			}
			.page-checklist{
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
			}
		}
		.searchCheck-boxInfo .rotate180{display: none;}
    }
</style>