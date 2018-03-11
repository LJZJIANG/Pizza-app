<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td><button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">      
      <div v-if="baskets.length>0">
        <table class="table">
         <thead class="thead-default">
              <tr>
                <th>数量</th>
                <th>品种</th>
                <th>价格</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="basket in baskets">
              <td>
                 <button @click="decreaseQuantity(basket)" class="btn btn-sm" style="background:none">-</button>
                <span>{{basket.quantity}}</span>
                <button @click="increaseQuantity(basket)" class="btn btn-sm" style="background:none">+</button>
              </td>
              <td>{{basket.name}}{{basket.size}}</td>
              <td>{{basket.price * basket.quantity}}</td>
            </tr>
          </tbody>
      </table>
      <p>总价: <strong style="color:#f00">{{total}} </strong>RMB</p>
      <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>{{basketText}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      basketText: "购物车空空如也...",
      baskets: [], //购物车
      getMenuItems: {
        1: {
          name: "榴莲pizza",
          description: "这是喜欢吃榴莲朋友的最佳选择",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        2: {
          name: "芝士pizza",
          description: "芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        3: {
          name: "夏威夷pizza",
          description: "众多人的默认选择",
          options: [
            {
              size: 9,
              price: 36
            },
            {
              size: 12,
              price: 46
            }
          ]
        }
      }
    };
  },
  computed: {
    // 计算购物车商品总价
    total() {
      let totalMoney = 0;
      for (const key in this.baskets) {
        totalMoney += this.baskets[key].price * this.baskets[key].quantity;
      }
      return totalMoney;
    }
  },
  methods: {
    // 添加购物车
    addToBasket(item, option) {
      let basket = {
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      };

      // 判断购物车中是否已有对应商品，如果存在，直接增加数量
      if (this.baskets.length != null && this.baskets.length) {
        
        let result = this.baskets.filter(basket => {
          return basket.name === item.name && basket.price === option.price;
        });
        if (result.length) {
          result[0].quantity++;
        } else {
          this.baskets.push(basket);
        }
      } else {
        this.baskets.push(basket);
      }
    },
    // 购物车数量 减
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.baskets.splice(this.baskets.indexOf(item), 1);
      }
    },
    // 购物车数量 加
    increaseQuantity(item) {
      item.quantity++;
    }
  }
};
</script>