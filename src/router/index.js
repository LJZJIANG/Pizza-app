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
  mode:'history',
  routes: [
    {
      path: '/',
      name:'home',
      component:Home
    }
    ,{
        path: '/login',
        name:'login',
        component:Login
      }
      ,{
        path: '/admin',
        name:'admin',
        component:Admin
      }
      ,{
        path: '/menu',
        name:'menu',
        component:Menu
      }
      ,{
        path: '/register',
        name:'register',
        component:Register
      }
      ,{
        path: '/about',
        name:'about',
        redirect:'/contact',
        component:About,
        children:[
            {
                path:'/about/history',
                name:'history',
                component:History
            }
            ,{
                path:'/delivery',
                name:'delivery',
                component:Delivery
            },{
                path:'/contact',
                name:'contact',
                component:Contact,
                redirect:'/phone',
                children:[
                    {
                        path:'/phone',
                        name:'phone',
                        component:Phone
                    },{
                        path:'/address',
                        name:'address',
                        component:Address
                    }
                ]
            },{
                path:'/orderingGuide',
                name:'orderingGuide',
                component:OrderingGuide
            }
            
        ]

      },
      {
        path:'*',
        redirect:'/'
      }
  ]
})
