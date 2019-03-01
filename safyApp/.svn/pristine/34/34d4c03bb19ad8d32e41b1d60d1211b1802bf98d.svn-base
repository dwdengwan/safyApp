import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import footer from '@/components/footer'
import safeView from '@/components/safeCount/safeView'
import safeTask from '@/components/safeCount/safeTask'
import safeFun from '@/components/safeCount/safeFun'
import safeRule from '@/components/safeCount/safeRule'
import myTask from '@/components/safeCount/safeTask/myTask'
import myInitiation from '@/components/safeCount/safeTask/myInitiation'
import allTask from '@/components/safeCount/safeTask/allTask'
import myFollow from '@/components/safeCount/safeTask/myFollow'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '集团首页'
      },
      component: home
    },
    {
      path: '/safeCount/safeView',
      name: 'safeView',
      meta: {
        title: '安全视图'
      },
      component: safeView
    },
    {
      path: '/safeCount/safeView/detail',
      name: 'detail',
      meta: {
        title: '安全视图详情'
      },
      component: resolve => require(['@/components/safeCount/safeView/detail'], resolve),
    },
    {
      path: '/safeCount/safeTask',
      name: 'safeTask',
      meta: {
        title: '安全任务'
      },
      component: safeTask
    },
    {
      path: '/safeCount/safeFun',
      name: 'safeFun',
      meta: {
        title: '安全功能'
      },
      component: safeFun
    },
    {
      path: '/safeCount/safeRule',
      name: 'safeRule',
      meta: {
        title: '安全标准'
      },
      component: safeRule
    },
    {
      path: '/safeCount/safeRule/hazardList',
      name: 'hazardList',
      meta: {
        title: '危险源清单'
      },
      component: resolve => require(['@/components/safeCount/safeRule/hazardList'], resolve),
    },
    {
      path: '/safeCount/safeRule/bylaw',
      name: 'bylaw',
      meta: {
        title: '规章制度'
      },
      component: resolve => require(['@/components/safeCount/safeRule/bylaw'], resolve),
    },
    {
      path: '/safeCount/safeRule/hazardListDetail',
      name: 'hazardListDetail',
      meta: {
        title: '危险源清单详情'
      },
      component: resolve => require(['@/components/safeCount/safeRule/hazardListDetail'], resolve),
    },
    {
      path: '/safeCount/safeRule/otherDanDetail',
      name: 'otherDanDetail',
      meta: {
        title: '危险源清单详情的详情'
      },
      component: resolve => require(['@/components/safeCount/safeRule/otherDanDetail'], resolve),
    },
    {
      path: '/safeCount/myTask',
      name: 'myTask',
      meta: {
        title: '我的任务'
      },
      component: myTask
    },
    {
      path: '/safeCount/myInitiation',
      name: 'myInitiation',
      meta: {
        title: '我的发起'
      },
      component: myInitiation
    },
    {
      path: '/safeCount/allTask',
      name: 'allTask',
      meta: {
        title: '所有任务'
      },
      component: allTask
    },
    {
      path: '/safeCount/myFollow',
      name: 'myFollow',
      meta: {
        title: '我的关注'
      },
      component: myFollow
    },
    // 安全功能跳转页面
    {
        path: '/safeCount/safeFun/pat',
        name: 'pat',
        meta: {
          title: '随手拍'
        },
        component: resolve => require(['@/components/safeCount/safeFun/page/Pat'], resolve),
      },
      {
        path: '/safeCount/safeFun/page/patDetail',
        name: 'patDetail',
        meta: {
          title: '随手拍列表'
        },
        component: resolve => require(['@/components/safeCount/safeFun/page/patDetail'], resolve),
      },
      {
        path: '/safeCount/safeFun/page/patDetail/addPat',
        name: 'addPat',
        meta: {
          title: '随手拍添加'
        },
        component: resolve => require(['@/components/safeCount/safeFun/page/patDetail/addPat'], resolve),
      },
      {
        path: '/safeCount/safeFun/Inspect',
        name: 'Inspect',
        meta: {
          title: '安全检查'
        },
        component: resolve => require(['@/components/safeCount/safeFun/page/Inspect'], resolve),
      },
      {
        path: '/safeCount/safeFun/page/inspectDetail/needCheck',
        name: 'needCheck',
        meta: {
          title: '待检查'
        },
        component: resolve => require(['@/components/safeCount/safeFun/page/inspectDetail/needCheck'], resolve),
      },
      {
        path: '/safeCount/safeFun/page/inspectDetail/baseInfo/',
        name: 'baseInfo',
        meta: {
          title: '任务详情信息'
        },
        component: resolve => require(['@/components/safeCount/safeFun/page/inspectDetail/baseInfo'], resolve),
      },
      {
        path: '/safeCount/safeFun/page/inspectDetail/thisList',
        name: 'thisList',
        meta: {
          title: '检查表填写信息'
        },
        component: resolve => require(['@/components/safeCount/safeFun/page/inspectDetail/baseChild/thisList'], resolve),
      },
      {
        path: '/safeCount/safeFun/Survey',
        name: 'Survey',
        meta: {
          title: '安全观察'
        },
        component: resolve => require(['@/components/safeCount/safeFun/page/Survey'], resolve),
      },
      {
        path: '/safeCount/safeFun/Record',
        name: 'Record',
        meta: {
          title: '隐患档案'
        },
        component: resolve => require(['@/components/safeCount/safeFun/page/Record'], resolve),
      },
      {
        path: '/safeCount/safeFun/recordDetail',
        name: 'recordDetail',
        meta: {
          title: '隐患档案详情'
        },
        component: resolve => require(['@/components/safeCount/safeFun/page/recordDetail'], resolve),
      }
  ]
})
