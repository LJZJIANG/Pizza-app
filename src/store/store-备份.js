/**
 *  Create by 卖女孩的小火柴 on 2018/3/14.
 *
 *  Tomorrow will be better !!!
 */
import Vue from 'vue'
import Vuex from 'vuex'
import index from "../router";

Vue.use(Vuex)

export  const store  = new Vuex.Store({
  state:{
    // 存储状态属性
    menuItems:{},
    currentUser:null,
    isLogin:false
  },
  getters:{
  //  获取状态
    getMenuItems:state=>state.menuItems,
    currentUser:state=>state.currentUser,
    isLogin:state=>state.isLogin
  },
  mutations:{
  //  修改状态属性
    setMenuItems(state,data){
      state.menuItems = data;
    },
    /**
     * 删除菜单项
     * @param state
     * @param item 点击删除的对应项
     *  用item 和state.menuItems 中的数据匹配，如果匹配到，则删除
     */
    deleteMenu(state,data){
      state.menuItems.forEach((item,index)=>{
        if(data == item){
          // 删除menuItems中对应的item
          state.menuItems.splice(index,1);
        }
      })
    },
    // 将新添加的pizza Push到menuItems属性中
    pushToMenuItems(state,data){
      state.menuItems.push(data);
    },
    // 设置用户状态
    userStatus(state,data){
      if(data){
        state.currentUser = data
        state.isLogin = true
      }else{
        state.currentUser = null
        state.isLogin = false
      }
    }
  },
  actions:{
  //  控制mutations
    setUser({commit},data){
      commit('userStatus',data)
    }
  }
})
