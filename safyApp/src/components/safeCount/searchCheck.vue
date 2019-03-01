<template>
	<div :class="input_class" class="searchCheck-boxInfo" style="padding-left:0;">
		<input v-model="search_value" :readonly="read_only" v-on:input ="inputFunc" type="text" :placeholder="place_holder"/>
		<span class="mint-button-icon rotate180"><i class="mintui mintui-back"></i></span>
		<div class="serch_result" v-if="serch_result_issue">
			<div class="clearfloat btn-box">
				<label class="lt" @click="search_cancel">取消</label>
				<label class="rt" @click="search_submit">确定</label>
			</div>
			<ul>
		        <li v-for="(item,index) in search_result" @click="changeInfo(item,index)">
		        	<label class="m-name">{{ item.name }}</label>
		        	<span class="m-value search-checkbar">
		        		<i class="" :class="{active:activeCheck==index}"></i>
		        	</span>
		        </li>
	        </ul>
		</div>
	</div>
</template>
 <script>
	export default {
		name: 'searchCheck',
		props:{
			search_array:{default:function(){
				return	[
			       {name:"a忘记了账号怎么办l了?"},
			       {name:"abcdfhhhh?"},
			       {name:"a是什麼試試?"},
			       {name:"b如何成为星签约者"},
			       {name:"c什么样的文章能够被星官方推荐"},
			       {name:"d我在哪里可以找到自己发布的文章"},
			       {name:"忘e记了密码怎么办"}
			    ] 
			}},
			m_result:{default:function(){
				return [
			       {name:"忘记了账号怎么办?"},
			       {name:"如何成为星签约者"}
					]
			}},
			input_class:{default:function(){return "full"}},//用来传class
			place_holder:{default:function(){return "请填写内容"}},//用来传提示信息
			read_only:{default:function(){return false}},//用来传提示信息
		},
		data(){
			return{
				search_result:this.m_result,
				search_value:"", 
				issue_content:"",//输入框中的内容
				serch_result_issue:false,
				activeCheck:-1//不选中状态，点击切换按钮样式
			}
		},
		mounted(){
			//console.log(this.$parent)
		},
	    methods:{
	    	inputFunc(){//监听输入事件，当input中有内容时，下面的搜索列表显示出来
		      if(this.issue_content.length>0){
		        this.serch_result_issue = true;
		      }else{
		        this.serch_result_issue = false
		      }
		      this.searchData();
		    },
		    searchData() {//计算属性，当输入内容的时候下面的方法就会根据你输入的内容来过滤serch_result数组中的数据
			    var search_value = this.search_value;
			    if (search_value) {
			    	this.search_result =  this.search_array.filter(function(product) {//过滤输出符合条件的数据
			        return Object.keys(product).some(function(key) {//查找匹配条件，返回值true、false
			            return String(product[key]).toLowerCase().indexOf(search_value) > -1 ;
			       		})
			       	})			       
			    }
			    
			    if(this.search_result.length!=0){
		    		this.serch_result_issue=true;
		    	}else{
		    		this.serch_result_issue=false;
		    	} 
		    	//search_result = dealData;
		    },
		    search_submit(){//确定搜索内容
		    	this.search_value =this.sureValue ;
				this.serch_result_issue = false;
				this.activeCheck = -1;
		    },
		    search_cancel(){//取消搜索内容
				this.serch_result_issue = false;
				this.activeCheck = -1;
		    },
			changeInfo(item,index){//点击li选项内容放置input
				this.activeCheck = index;
				this.sureValue = item.name;
			}
	    }
	}
</script>

<style>
	#app .serch_result{position: fixed;bottom: 0;left: 0;width: 100%;z-index: 18;background: #fff;box-shadow: #f2f3f5 0 0 6px;}
	#app .serch_result .btn-box{padding: 10px 15px;}
	#app .serch_result .btn-box .rt{color: #3193f5;}
	#app .serch_result ul{max-height: 320px;}
	#app .serch_result ul li{height: 48px;line-height: 1;}
	#app .serch_result ul li .m-value{padding-right: 0;}
	#app .searchCheck-boxInfo input{width:calc(100% - 20px);font-size:13px;border:0;border-radius:3px;line-height:30px;padding-left:6px;color: #333333;display: inline-block;}
    #app .serch_result ul li .m-name{width: 80%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
	#app .serch_result ul li .m-value{width: 18%;text-align: center;}
	#app .serch_result ul li .search-checkbar i{display:inline-block;width: 18px;height: 18px;background: url(../../assets/images/icon.png)no-repeat  -125px -126px;background-size: 274px 186px;}
	#app .serch_result ul li .search-checkbar i.active{background: url(../../assets/images/icon.png)no-repeat  -125px -94px;background-size: 274px 186px;}
</style>