<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">
      联系我们
    </div>
    <div class="card-body">
      <h4 class="card-title">邮箱地址</h4>
      <p class="card-text">1457921091@qq.com</p>
      <router-link :to="{name:'phone'}">联系电话</router-link>
      <router-link :to="{name:'address'}">地址 </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
