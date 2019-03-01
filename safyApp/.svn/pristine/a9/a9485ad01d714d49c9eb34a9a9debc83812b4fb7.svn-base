<template>
	<div class="listDatile">
		<mt-header fixed title="安全检查">
			<router-link to="/safeCount/safeFun/page/inspectDetail/baseInfo/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
			<router-link to="" slot="right">
				<mt-button>保存</mt-button>
			</router-link>
		</mt-header>
		<section class="contanter" style="padding-bottom: 0;margin-bottom: 0;">
			<div class="l-area">
				<div class="l-title">办公区域布局</div>
				<ul>
					<li class="clearfloat">
						<div class="list-left lt" @click="divTriangle">
							<span class="l-triangle" :class="{downTransform:isDownTransform}" v-if="isTriangle" ref="triangle"></span>
							<label for="" class="l-checkName"><i>1</i>.&nbsp;安装时确保接线正确（安装合格验收记录或标志）</label>
						</div>
						<div class="list-right rt">
							<span class="l-sure" :class="{active:activeCheck=='sure'}" @click="toggleActive('sure')">
								 是<i class=""></i><!--<i class="mint-toast-icon mintui mintui-field-success"></i>-->
							</span>
							<span class="l-no" :class="{active:activeCheck=='no'}" @click="toggleActive('no')">
								 否<i class=""></i>
							</span>
						</div>
					</li>
				</ul>
				<div class="show-l-no" v-if="divIsTriangle">
					<div>
						<label for="" class="m-name">设备名称</label>
						<mySearchCheck input_class="m-value" span_class="out" place_holder="请输入设备名称"></mySearchCheck>
					</div>
					<div>
						<label for="" class="m-name">设备编号</label>
						<mySearchCheck input_class="m-value" span_class="out" place_holder="请输入设备编号"></mySearchCheck>
					</div>
					<div>
						<label for="" class="m-name">隐患描述</label>
						<mySearchCheck input_class="m-value" span_class="out" place_holder="请输入隐患描述"></mySearchCheck>
					</div>
					<div>
						<label for="" class="m-name">隐患照片</label>
					    <div style="width: 100%;height:auto;position: relative;padding-right: 15px;">
							<form id="upBox" class="clearfloat">
								 <div id="inputBox"><input type="file" title="请选择图片" id="file" multiple accept="image/png,image/jpg,image/gif,image/JPEG"/></div>
							     <div id="imgBox"></div>
							</form>
						</div>
					</div>
				</div>
			</div>
			
		</section>
	</div>
</template>

<script>
	import mySearchCheck from '../../../../searchCheck';
	export default {
		name: "",
		data(){
			return{
				activeCheck:null,//点击切换是否按钮样式
				isTriangle:false,//点击否出现三角和表单
				divIsTriangle:false,//点击否出现三角和表单
				isDownTransform:false//三角箭头方向class添加删除
			}
		},
		components: { mySearchCheck },
		mounted(){
			this.imageFun();
		},
	  	methods: {
	  		imageFun(){//上传图片、拍照
				//console.log(imgUpload)
				imgUpload({
					inputId:'file', //input框id
					imgBox:'imgBox', //图片容器id
					buttonId:'btn', //提交按钮id
					upUrl:'',  //提交地址
					data:'file1', //参数名
					num:"5"//上传个数
				})
			},
	  		toggleActive: function(item) {//切换是否按钮class样式，三角显示状态
	  			this.activeCheck = item; // tab 为当前触发标签页的组件名
			   if(item == 'no'){
			   	this.isTriangle=true;
			   	this.divIsTriangle=true;
			   }else{
			   		this.isTriangle=false;
			   		this.divIsTriangle=false;
			   		this.isDownTransform=false;
			   }
			},
			divTriangle(){//点击标题和三角收起，展开
				if(this.activeCheck != null && this.activeCheck =='no'){
					this.divIsTriangle=!this.divIsTriangle;//div显示隐藏
					this.isDownTransform = !this.isDownTransform
				}else{
					return
				}
				
				
			},
	  	}
	 }
</script>

<style>
	.searchCheck-boxInfo .rotate180{display: none;}
	.searchCheck-boxInfo input{line-height: initial;}
</style>