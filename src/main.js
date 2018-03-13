import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'https://wd4944622902dibypg.wilddogio.com/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

// 配置全局守卫
// router.beforeEach((to,from,next)=>{
//   // console.log(to);
//   // 一般是 store.getters.isLogin === false --->跳转登录页面
//   if(to.path === '/login' || to.path === '/register'){
//     next();
//   }else{
//     alert('还未登录，请先登录!');
//     next('/login');
//   }
// })


