import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import Login from '../components/Login'
import Register from '../components/Register'
import About from '../components/about/About'

// 二级路由
import Contact from '../components/about/Contact'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'
import Delivery from '../components/about/Delivery'

// 三级路由 
import Phone from '../components/about/contact/Phone'
import Address from '../components/about/contact/Address'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      components: {
        default: Home,
        'history': History,
        'orderingGuide': OrderingGuide,
        'delivery': Delivery
      }
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/admin',
      name: 'admin',
      component: Admin
    }, {
      path: '/menu',
      name: 'menu',
      component: Menu
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/about',
      name: 'about',
      redirect: '/contact',
      component: About,
      // 路由独享守卫
      //   beforeEnter: (to, from, next) => {
      //     if (to.path === '/login' || to.path === '/register') {
      //       next();
      //     } else {
      //       alert('还未登录，请先登录!');
      //       next('/login');
      //     }
      //   },
      children: [{
          path: '/about/history',
          name: 'history',
          component: History
        }, {
          path: '/delivery',
          name: 'delivery',
          component: Delivery
        }, {
          path: '/contact',
          name: 'contact',
          component: Contact,
          redirect: '/phone',
          children: [{
            path: '/phone',
            name: 'phone',
            component: Phone
          }, {
            path: '/address',
            name: 'address',
            component: Address
          }]
        }, {
          path: '/orderingGuide',
          name: 'orderingGuide',
          component: OrderingGuide
        }

      ]

    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  // 路由滚动行为
  scrollBehavior(to,from,savedPosition){
    // 定位滚动条到按钮的位置
    // return { selector: '.btn'} 


    // 滚动到指定位置
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return {
    //     x: 0,
    //     y: 100
    //   }
    // }
  }
})
