// package
import Router from 'vue-router';
import Vue from 'vue';
// import { Message } from 'peng-component';

// local
import Home from '../component/Home.vue';
import Login from '../component/Login.vue';
import Register from '../component/Register.vue';
import PageNotFound from '../component/PageNotFound.vue';

// weChatApp
import WeChatApp from '../pages/weChatApp/index.vue';
import WeChatAppList from '../pages/weChatApp/weChatAppList.vue';
import WeChatAppShow from '../pages/weChatApp/weChatAppShow.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Vue.component('Home', Home),
      alias: ['/sell', '/set'],
    }, {
      path: '/fst/wechatapp',
      component: Vue.component('wechatapp', WeChatApp),
      children: [
        // {
        //   path: '',
        //   component: Vue.component('wechatapplist', WeChatApp),
        // },
        {
          path: 'list',
          component: Vue.component('wechatapplist', WeChatAppList),
        },
        {
          path: 'show',
          component: Vue.component('wechatappshow', WeChatAppShow),
        },
      ],
    }, {
      path: '/login',
      component: Vue.component('login', Login),
    }, {
      path: '/register',
      component: Vue.component('register', Register),
    }, {
      path: '*',
      component: Vue.component('pageNotFound', PageNotFound),
    },
  ],
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

// const limitRouterFunc = (args) => {
//   const { to, next, limitPage } = args;
//   if (limitPage.indexOf(to.path) >= 0) {
//     next();
//   } else {
//     Message({
//       type: 'warning',
//       time: 1000,
//       content: '请先登录~！',
//       next: () => {
//         console.log('然后你要登录呢？');
//       },
//     });
//     next({ path: limitPage[0] });
//   }
// };


// router.beforeEach((to, from, next) => {
//   const isLogin = true;
//   if(!isLogin){
//     limitRouterFunc({
//       to,
//       next,
//       limitPage: ["/login", "/register"]
//     });
//   }
// });


export default router;
