/**
 *  Create by 卖女孩的小火柴 on 2018/3/14.
 *
 *  Tomorrow will be better !!!
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export  const store  = new Vuex.Store({
  state:{
    // 存储状态属性
    menuItems:{},
    currentUser:null,
    isLogin:false
  },
  getters,
  mutations,
  actions
})
