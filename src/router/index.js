import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import MyTaklim from '@/components/MyTaklim'
import Profile from '@/components/Profile'
import DetailTaklim from '@/components/DetailTaklim'
import AddTaklim from '@/components/AddTaklim'
import ResultTaklim from '@/components/ResultTaklim'
import Login from '@/components/Login'
import Register from '@/components/Register'
import EditTaklim from '@/components/EditTaklim'
import EditUser from '@/components/EditUser'
import Offline from '@/components/Offline'
import EmptyState from '@/components/EmptyState'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/mytaklim',
      name: 'MyTaklim',
      component: MyTaklim
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/detailtaklim/:id',
      name: 'Detail Taklim',
      component: DetailTaklim
    },
    {
      path: '/edittaklim/:id',
      name: 'Edit Taklim',
      component: EditTaklim
    },
    {
      path: '/addtaklim',
      name: 'Add Taklim',
      component: AddTaklim
    },
    {
      path: '/resulttaklim',
      name: 'Result Taklim',
      component: ResultTaklim
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/edituser',
      name: 'Edit User',
      component: EditUser
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Offline',
      name: 'Offline',
      component: Offline
    },
    {
      path: '/emptystate',
      name: 'emptystate',
      component: EmptyState
    }
  ]
})
