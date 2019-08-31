import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import tables from './tables.js'
import forms from './forms.js'
import  EditStaff from '../views/staff/editStaff.vue'
import Register from '../views/Register.vue'
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
  }, {
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
}
]
})
