<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>暴走大事件!</h1>
        <h1>唐马儒鉴黄师，专业鉴黄30年!</h1>
        <button @click="go" class="btn btn-success">Let's go</button>
      </div>
    </div>
  </div>
</template>
<style>
#home {
  background: url("../../src/assets/pizza.jpg");
  height: 85vh;
  padding: 10%;
}

h1,
h2 {
  margin: 6%;
}

.background {
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>

<script>
export default {
  methods: {
    go() {
      // 回到上次跳转的位置
      // this.$router.go(-1);

      // 路由替换  name
      // this.$router.replace({name:'about'})

      // 路由替换  path
      // this.$router.replace({path:'/login'})

      // 路由跳转
      this.$router.push({ name: "about" });
      // this.$router.push({path:'/register'})
    }
  }
};
</script>

