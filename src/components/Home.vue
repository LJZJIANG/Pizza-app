<template>
  <div>
    <h1>HOME</h1>
    <button @click="go" class="btn btn-success">Let's go</button>
  </div>
</template>
<script>
export default {
  methods:{
    go(){
      // 回到上次跳转的位置
      // this.$router.go(-1);

      // 路由替换  name
      // this.$router.replace({name:'about'})

      // 路由替换  path
      // this.$router.replace({path:'/login'})

      // 路由跳转
      this.$router.push({name:'admin'})
      // this.$router.push({path:'/register'})
    }
  }
}
</script>

