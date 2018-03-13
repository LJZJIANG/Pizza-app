<template>
  <form>
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size">
      </div>
    </div>
     <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price">
      </div>
    </div>

    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
     <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price1">
      </div>
    </div>
    <div class="form-group row">
      <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>
<script>
export default {
  data(){
      return{
          newPizza:{}
      }
  },
  methods:{
      addMenuItem(){
          let data = {
            name:this.newPizza.name,
            description:this.newPizza.description,
            options:[
              {
                price:this.newPizza.price,
                size:this.newPizza.size
              },
              {
                price:this.newPizza.price1,
                size:this.newPizza.size1
              }
            ]
          }
          // feach 方式请求数据

          // fetch('menu.json',{
          //   method:'POST',
          //   headers:{
          //     'Content-type':'application/json'
          //   },
          //   body:JSON.stringify(data)// 必须转换我为字符串，不然会提示跨域
          // }).then(res=>{
          //   return res.json(); // 将数据转换为json格式
          // }).then(data=>{
          //   // console.log(data)
          //   this.$router.push('menu');
          // }).catch(err=>{
          //   console.log(err);
          // })

          // axios 方式请求数据
          this.$axios.post('menu.json',data)
          .then(res=> this.$router.push('menu'))
      }
  }
}
</script>
