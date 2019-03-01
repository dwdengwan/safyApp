<template>
	<div class="tab-main listStyle basicbox" style="padding-bottom: 3rem;">
		<ul style="overflow: auto;">
			<li>
				<label class="m-name">检查名称</label>
				<input class="m-value" type="text" placeholder="请输入名称"/>
			</li>
			<li>
				<label class="m-name">检查部门</label>
				<mySearchCheck read_only=true input_class="m-value" place_holder="请选择部门"></mySearchCheck>
			</li>
			<li>
				<label class="m-name">检查人员</label>
				<mySearchCheck input_class="m-value" place_holder="请选择人员"></mySearchCheck>
			</li>
			<li>
				<label class="m-name">执行时间</label>
				<input id="executeTime" ref="executeTime" class="m-value" @click="open('picker')" placeholder="请选择时间"/>
			</li>
			<li>
				<label class="m-name">检查内容</label>
				<mySearchCheck input_class="m-value" place_holder="请填写内容"></mySearchCheck>
			</li>
			<li>
				<label class="m-name">检查范围</label>
				<mySearchCheck input_class="m-value" place_holder="请选择范围"></mySearchCheck>
			</li>
			<li>
				<label class="m-name">安全计划</label>
				<mySearchCheck input_class="m-value"  place_holder="请选择计划"></mySearchCheck>
			</li>
			<li>
				<label class="m-name">工作描述</label>
				<textarea class="textDes" name="" rows="5" cols="" placeholder="请输入工作描述"></textarea>
			</li>
		</ul>
		<div class="fixBar">
			<button id="">保存</button>
		</div>
		<!--日期-->
		<div class="page-datetime-wrapper">
			<mt-datetime-picker
		      ref="picker"
		      type="date"
		      v-model="dateVal"
		      @confirm="handleChange">
		    </mt-datetime-picker>
	    </div>
	</div>
</template>

<script>
	import mySearchCheck from '../../../../searchCheck';
	export default {
		data(){
			return{
				visible2: false,
				dateVal: '', // 默认是当前日期
				selectedValue: ''
			}
		},
		components: {mySearchCheck },
		mounted(){
		      
		},
		methods:{
			open(picker) {//打开datepicker
				if (this.selectedValue) {
                this.dateVal = this.selectedValue
	            } else {
	                this.dateVal = new Date()
	            }
		        this.$refs.picker.open();
		    },
		    formatDate(date) {//时间格式转换  
			    var y = date.getFullYear();  
			    var m = date.getMonth() + 1;  
			    m = m < 10 ? '0' + m : m;  
			    var d = date.getDate();  
			    d = d < 10 ? ('0' + d) : d;  
			    return y + '-' + m + '-' + d;  
			}, 
		    handleChange(value) {//获取选中的时间赋值
		        var str = value.toString();
				str = str.replace(/ GMT.+$/, '');// Or str = str.substring(0, 24)
				var d = new Date(str);
				this.$refs.executeTime.value = this.formatDate(d)
				
		    },
		
		    handleVisibleChange(isVisible) {
		       // console.log('弹窗是否展示:', isVisible);
		    }
		}
	}
</script>

<style lang="less">
	.basicbox ul li .textDes{display:block;width: 100%;border: 0;padding-top: 20px;border-bottom: 1px solid #f5f6f7;}
</style>