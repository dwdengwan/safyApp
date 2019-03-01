// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import './assets/css/common.css'
//import './assets/js/jquery.js'
//import './assets/js/uploadImg.js'
import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = process.env.baseUrl;

import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件

Vue.config.productionTip = false

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'd439c02c73e44c7a0e37290430d4a6d1'
})
Vue.use(Vuex)

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
import './assets/css/mystyle.css'
/* eslint-disable no-new */


const store=new Vuex.Store({
	state:{
		//ctx:'/gwaterapp/mobile/index.html',
		ctx:'',
		shuisitu:'123',
		water_name:'',
		watername:'',
		zoom:'',
		map_realTime:{},
		map_countIndicate:{},
		map_baseDate:{},
		points: [{
			id:'肇高水司',
			lng: 112.837813,
			lat: 23.306545,
			title: "肇高",
			content: ["地址：广东省肇庆市四会市肇庆高新区大旺大道", "电话：0758-3646262"]
		}, {
			id: '常平水司',
			lng: 113.994744,
			lat: 22.974424,
			title: "常平",
			content: ["地址：常平镇南环路18号", " "]
		}, {
			id: '盱眙水司',
			lng: 118.533444,
			lat: 32.99516,
			title: "盱眙",
			content: ["地址：梅江区", "电话：0753-999"]
		}, {
			id: '梧州水司',
			lng: 111.26494,
			lat: 23.478186,
			title: "梧州",
			content: ["地址：龙门路15号", " "]
		}, {
			id: '清溪水司',
			lng: 114.128238,
			lat: 22.851276,
			title: "清溪",
			content: ["地址：清溪大道28号", " "]
		}, {
			id: '梅州水务',
			lng: 116.124848,
			lat: 24.319706,
			title: "梅州",
			content: ["地址：梅州大道49号", "电话： 0753-2253523"]
		}, {
			id: '南沙水司',
			lng: 113.556705,
			lat: 22.799469,
			title: "南沙",
			content: ["地址：广东省广州市南沙区金岭北路210号", " "]
		}, {
			id: '宝应水司',
			lng: 119.310225,
			lat: 33.250497,
			title: "宝应",
			content: ["地址：安宜镇运河路411号", " "]
		}, {
			id: '遂溪水务',
			lng: 110.268491,
			lat: 21.382694,
			title: "遂溪",
			content: ["地址：中山路199号", " "]
		}, {
			id: '丰顺水司',
			lng: 116.196902,
			lat: 23.744812,
			title: "丰顺",
			content: ["地址：梅州市丰顺县温泉路2号", " "]
		}, {
			id: '高邮水司',
			lng: 119.440823,
			lat: 32.792547,
			title: "高邮",
			content: ["地址：高邮市中山路535号", " "]
		}, {
			id: '仪征水司',
			lng: 119.181439,
			lat: 32.265927,
			title: "仪征",
			content: ["地址：仪征市弘桥路200号", " "]
		}, {
			id: '儋州水司',
			lng: 109.573829,
			lat: 19.491887,
			title: "儋州",
			content: ["地址：儋州市南丰镇头佑村", " "]
		}],
		//ctx:'',
		pat_detail:'',
		inspect_detail:'',
		checkList_detail:'',
		hiddenDanger:'',//隐患
	},
	mutations:{
		goHiddenDanger(state,newvalue){//安全检查-任务中隐患-详情信息
			 state.hiddenDanger = newvalue;
		},
		goCheckListDetail(state,newvalue){//安全检查-任务中检查表-详情信息
			 state.checkList_detail = newvalue;
		},
		goInspectDetail(state,newvalue){//安全检查-待检查任务-详情信息
			 state.inspect_detail = newvalue;
		},
		goPatDetail(state,newvalue){//随手拍-列表-详情
			 state.pat_detail = newvalue;
		},
		shuisimap(state,newvalue){//水司地图去监控的水司名
			 state.shuisitu = newvalue;
			 for(var i=0;i<state.points.length;i++){
				if(state.points[i].title==newvalue.title){
					state.watername = state.points[i].id;
				}
			 }
		},
		shuisiname(state,newvalue){//首页table去监控再去水司的名字/经纬度
			state.watername = newvalue;
			for(var i=0;i<state.points.length;i++){
				if(state.points[i].id==newvalue){
					state.shuisitu ={lng: state.points[i].lng, lat: state.points[i].lat,title:state.points[i].title};
				}

			}
		}
		// ,
		// pointname(state,newvalue){
		// 	state.points = newvalue;
		// }
	},
		actions:{
			waternameData({
				commit,
				state
			},water_name) { //设置默认名字
				return new Promise(resolve => {
					axios({
						url: 'http://192.168.23.203:8080/gwaterapp/getMonthKpiInfos.htm',
						type: 'post',
						params: wate_rname
					}).then(res => {
						console.log('125555555');
						console.log(res);
						if(res.code === 0) {
						commit('shuisiname', water_name.water_name);
						resolve(res)
					}
					})
				})
				},
			shuisipoints({commit,state},points){

			}
		}

})


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
