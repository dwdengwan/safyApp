<template>

  <!--<div class="g-groupBar">
			<div v-bind:class="{'saixuan':showSaixuan}" @click.stop="showPicker"></div>
      <div class="shuaxin" @click="refleshTable"></div>
	</div>-->
	<div class="picker-box" v-show="isPicker">
      <div class="picker">
        <div class="picker-left" ref="touchleft"  v-on:touchmove="dragProvince" @touchstart="startTouchProvince" @touchend="endTouchProvince">
          <div class="mypicker-item" v-for="(val, key) in address" :key="key">
              {{key}}
          </div>
        </div>
        <div class="picker-center">-</div>
        <div class="picker-right" ref="touchright"  v-on:touchmove="dragCity" @touchstart="startTouchCity" @touchend="endTouchCity">
          <div class="mypicker-item" v-for="(val,key) in address[theArrayPosition]" :key="key">
            {{val}}
          </div>
        </div>
        <div class="select-box"></div>
      </div>
			<div class="popbj"></div>
			<div class="clearfloat btn-box">
				<label class="lt" @click="isPicker=false">取消</label>
				<label class="rt" @click="submit">确定</label>
			</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
	export default {
		name: 'm-picker',
		props:{
      showSaixuan:false,
      arrayPosition:{
        type:String,
        default:"全部"
      },
        address: {
          default:function(){
            return {
          '全部':['全部'],
          '广东': ['常平水司','清溪水司','南沙水司','梅州水务','丰顺水司','遂溪水务','肇高水司'],
          '广西': ['梧州水司'],
          '江苏': ['仪征水司','宝应水司','盱眙水司','高邮水司'],
          '海南': ['儋州水司']
        }}}
    },

		data() {
       return {
        isPicker: false,
        areaList: Object.keys(this.address),
        startPosition:0,
        offsetY:0,
        theArrayPosition: this.arrayPosition,
        offsetYCity:0,
        theArrayCity:""
       }
		},
		mounted(){

		},
		computed:{

  },
		methods: {
      submit:function(){
        this.$emit('confirm', {a:this.theArrayPosition,b:this.theArrayCity});
  /*      console.log(this.theArrayPosition)*/
        this.isPicker=!this.isPicker;
      },
      //选择省
      endTouchProvince:function(event){
        this.offsetY = this.offsetY - (this.offsetY % 36) ;
        if(this.offsetY > 72 ) this.offsetY = 72;
        if(this.offsetY < -(this.areaList.length-1)*36 ) this.offsetY = -(this.areaList.length-1)*36;
        this.$refs.touchleft.style.transform = "translate(0,"+ this.offsetY +"px)";
        this.theArrayPosition = this.areaList[-(this.offsetY / 36)];
        console.log(this.theArrayPosition)
        this.endTouchCity();
      },
      startTouchProvince:function(event){
        this.startPosition = event.changedTouches[0].screenY;
      },
      dragProvince:function(event){
        this.offsetY = Number(this.offsetY) + (Number(event.changedTouches[0].screenY) - Number(this.startPosition));
        this.startPosition = event.changedTouches[0].screenY;
        this.$refs.touchleft.style.transform = "translate(0,"+ this.offsetY +"px)";
      },
      //选择市
      endTouchCity:function(event){
        this.offsetYCity = this.offsetYCity - (this.offsetYCity % 36) ;
        if(this.offsetYCity > 72 ) this.offsetYCity = 72;
        for(let key in this.address){
          if(key==this.theArrayPosition){
            if(this.offsetYCity < -(this.address[key].length-1)*36 ) this.offsetYCity = -(this.address[key].length-1)*36;
            this.theArrayCity = this.address[key][-(this.offsetYCity / 36)];
            console.log(this.theArrayCity)
          }
        }
         this.$refs.touchright.style.transform = "translate(0,"+ this.offsetYCity +"px)";
      },
      startTouchCity:function(event){
        this.startPosition = event.changedTouches[0].screenY;
      },
      dragCity:function(event){
        this.offsetYCity = Number(this.offsetYCity) + (Number(event.changedTouches[0].screenY) - Number(this.startPosition));
        this.startPosition = event.changedTouches[0].screenY;
        this.$refs.touchright.style.transform = "translate(0,"+ this.offsetYCity +"px)";
      },
      showPicker(){
        this.isPicker=!this.isPicker;
        this.resetPicker();
        this.refleshTable();
      },
      resetPicker(){
        this.offsetY = 0;
        this.$refs.touchleft.style.transform = "translate(0,"+ this.offsetY +"px)";
        this.theArrayPosition = "全部";
        this.endTouchCity();
      },
      refleshTable(){
        this.$emit('resetOptions');
      }
  }
}
</script>
<style>
	/*.g-groupBar {position: fixed;right: 10px;bottom: 10%;}
	.g-groupBar>div {width: 2rem;height: 2rem;}
  .g-groupBar>div.saixuan {background: url(../../assets/images/saixuan.png)no-repeat;background-size: 100%;}
  .g-groupBar>div.shuaxin {background: url(../../assets/images/shuaxin.png)no-repeat;background-size: 100%;}*/
	.picker-box{position: absolute;bottom: 0;height: 180px;width: 100%;}
	.picker-box .picker{position: fixed;background: #fff;width: 100%;height:180px;bottom: 0;z-index: 12;left: 0;}
  .picker-box .popbj{position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0,0,0,.3);}
  .picker-box .picker-left{width:49%;float:left;}
  .picker-box .picker-center{width:2%;float:left;margin-top:72px;line-height: 2rem;font-size: .8rem;text-align: center;color: #333;}
  .picker-box .picker-right{width:49%;float:left;}
  .picker-box .mypicker-item{width:100%;height:36px;line-height: 36px;color: #333;text-align: center;font-size: 16px;}
  .picker-box .picker-left>div:first-child,.picker-right>div:first-child{margin-top: 72px;}
  .picker-box .select-box{width:100%;height:36px;position: fixed;left: 0;bottom: 72px;border-top: 1px solid#eee;border-bottom: 1px solid#eee;}
	.picker-box .btn-box{background: #fff;padding:10px 20px;position: absolute;top: 0;left: 0;width: 100%;z-index: 15;}
	.picker-box .btn-box label{font-size: 13px;padding: 3px 8px;border-radius: 3px;}
	.picker-box .btn-box label.lt:active{background: #e6e6e6;}
	.picker-box .btn-box label.rt{color: #26a2ff;}
	.picker-box .btn-box label.rt:active{background: #26a2ff;}
</style>
