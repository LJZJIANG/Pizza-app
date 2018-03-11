<template>
  <h1>Admin</h1>
</template>
<script>
export default {
  data() {
    return {
      name: "muzi"
    };
  }
  // 路由进入时被调用
  // beforeRouteEnter (to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   // console.log(to);
  //   if(to.path === '/admin'){
  //     // next()  是异步回调函数 ，执行时组件实例已经创建完毕
  //     next(vm=>{
  //       // console.log(vm);
  //       alert('hello   '+vm.name);
  //     });
  //   }
  // },

  // 路由离开时被调用
   ,beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if(confirm('确定离开?')==true){
      next();
    }else{
      next(false);
    }
  }
};
</script>

