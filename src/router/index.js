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
Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: 'login',
  }, {
    path: '/login',
    name: 'login',
    component: Login,
  }, 
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/goodList',
    name:'goodList',
    component:GoodList
  },{
    path:'/goodDetail',
    name:'goodDetail',
    component:GoodDetail
  }
  ,
  {
    path: '/home',
    component: Index,
    children: [{
      path: '',
      component: Home,
      meta: ['Dashboard'],
    }]
  }, {
    path: '/tables',
    name: 'tables',
    redirect: 'tables/basic',
    component: Index,
    children: tables
  }, 
  {
    path:'/addProduct',
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
  path:'/memberInfo',
  component:MemberInfo
},
{
  path:'/recieverAddress',
  component:RecieverAddress
},
{
  path:'/recieverAddressList',
  component:RecieverAddressList //收货地址
},
{
  path:'/memberOrders',
  component:MemberOrders //会员订单
}
]
})
