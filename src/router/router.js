import Vue from 'vue'
import VueRouter from 'vue-router'
import jobList from '../components/jobList'
import message from '../components/message'
import  my from '../components/my'

import msgResume from '../components/msgResume';
import msgState from '../components/msgState';
import msgJobInvite from '../components/msgJobInvite';
import msgFriendInvite from '../components/msgFriendInvite';
import msgFriendInvited from '../components/msgFriendInvited';

import jobDetial from '../components/jobDetail';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: jobList
    },
    {path:'/message', component: message,},
    {path:'/my', component: my},
    { path: '/jobDetail',component:jobDetial},
    { path: '/msgResume',component:msgResume },
    { path: '/msgState',component:msgState },
    { path: '/msgJobInvite',component:msgJobInvite },
    { path: '/msgFriendInvite',component:msgFriendInvite },
    { path: '/msgFriendInvited',component:msgFriendInvited },
  ]
});
// router.go('/jobList');
export default router;
