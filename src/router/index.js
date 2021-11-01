import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import('../pages/Home');
const Login = () => import('../pages/Login');
const User = () => import('../pages/User');
const Friend = () => import('../pages/Friend');
const Mymusic = () => import('../pages/Mymusic');
const Dailysonglist = () => import('../pages/Dailysonglist');
const Song = () => import('../pages/Song');
const Ranklist = () => import('../pages/Ranklist');
const Songlist = () => import('../pages/Songlist');
const SearchSongList = () => import('../pages/SearchSongList');
Vue.use(Router);
export default new Router({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      name:'zhuye',
      path:'/home',
      component: Home
    },
    {
      name:'denglu',
      path:'/login',
      component: Login
    },
    {
      name:'zhanghao',
      path:'/user',
      component: User
    },
    {
      name:'myyinyue',
      path:'/mymusic',
      component: Mymusic
    },
    {
      name:'pengyou',
      path:'/friend',
      component: Friend
    },
    {
      name:'dailygequmulu',
      path:'/dailysonglist',
      component: Dailysonglist
    },
    {
      name:'gequ',
      path:'/song',
      component: Song
    },
    {
      name:'phbliebiao',
      path:'/ranklist',
      component:Ranklist
    },
    {
      name:'gedan',
      path:'/songlist',
      component:Songlist
    },
    {
      name:'sousuoxiangqing',
      path:'/searchsonglist',
      component:SearchSongList
    },
  ]
})
