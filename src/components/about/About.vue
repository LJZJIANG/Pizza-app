<template>
<div>
  <div class="row mb-5">
    <div class="col-4">
      <!-- 导航 -->
      <div class="list-group mb-5">
        <router-link :to="{name:'history'}" class="nav-link" tag="li"><a class="list-group-item list-group-otem-action">历史订单</a></router-link>
        <router-link :to="{name:'contact'}" class="nav-link" tag="li"><a class="list-group-item list-group-otem-action">联系我们</a></router-link>
        <router-link :to="{name:'delivery'}" class="nav-link" tag="li"><a class="list-group-item list-group-otem-action">点餐文档</a></router-link>
        <router-link :to="{name:'orderingGuide'}" class="nav-link" tag="li"><a class="list-group-item list-group-otem-action">快递信息</a></router-link>
      </div>
    </div>
    <div class="col-8 mt-2">
      <!-- 主要内容 -->
      <router-view></router-view>
    </div>
  </div>
</div>
</template>
