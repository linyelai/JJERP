import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import tables from './tables.js'
import forms from './forms.js'
import  EditStaff from '../views/staff/editStaff.vue'
import Register from '../views/Register.vue'
import AddProduct from '../views/goods/addProduct.vue'
import GoodList from '../views/goods/goodlist.vue'
import GoodDetail from '../views/goods/goodDetail.vue'
import MemberInfo from '../views/members/memberInfo.vue'
import RecieverAddress from '../views/members/recieverAddress.vue'
import RecieverAddressList from '../views/members/RecieverAddressList'
import MemberOrders from '../views/members/MemberOrders'
import GoodCate from '../views/goodsCategory/goodsCate'
import GoodIndex from '../views/index/index'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: 'login',
  }, {
    path: '/login',//登录
    name: 'login',
    component: Login,
  }, 
  {
    path:'/register',//注册
    name:'register',
    component:Register
  },
  {
    path:'/goodList',//商品列表
    name:'goodList',
    component:GoodList
  },{
    path:'/goodDetail',//商品详情
    name:'goodDetail',
    component:GoodDetail
  }
  ,
  {
    path: '/home',
    component: Index,//首页
    children: [{
      path: '',
      component: Home,
      meta: ['Dashboard'],
    }]
  }, {
    path: '/tables',//
    name: 'tables',
    redirect: 'tables/basic',
    component: Index,
    children: tables
  }, 
  {
    path:'/addProduct',//添加商品
    name:'addProduct',
    component:AddProduct
  },
  {
    path: '/forms',
    name: 'forms',
    redirect: 'forms/basicneed',
    component: Index,
    children: forms
  },
    {
      path:'/editStaff',
      component:EditStaff
    },{
      path: '*',
      redirect: 'home'
},
{
  path:'/memberInfo',//会员信息
  component:MemberInfo
},
{
  path:'/recieverAddress',//会员收货地址
  component:RecieverAddress
},
{
  path:'/recieverAddressList',
  component:RecieverAddressList //收货地址
},
{
  path:'/memberOrders',
  component:MemberOrders //会员订单
},
{
  path:"/goodCate",
  component:GoodCate//商品类目
}
,
{
  path:'/index',
  component:GoodIndex
}
]
})
