<template>
  <div class="container pt-7 pt-md-8 pb-12">
    <ul class="stepper ps-0 mb-7">
      <li
        class="stepper-item"
        :class="{ active: currentStep === i, completed: currentStep > i }"
        v-for="(step, i) in steps"
        :key="i + 'step'"
      >
        <div class="stepper-name">{{ step }}</div>
      </li>
    </ul>
    <template v-if="currentStep === 0">
      <h2 class="text-center mb-7 mb-md-7">購物車</h2>
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <th scope="col">商品</th>
              <th scope="col">售價</th>
              <th scope="col" width="100px">購買數量</th>
              <th scope="col" class="text-center">總計</th>
              <th scope="col" class="text-end pe-4">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cart in carts" :key="cart.id">
              <td>
                <div class="d-flex align-items-center">
                  <img
                    :src="cart.product.imageUrl"
                    :alt="cart.product.title"
                    class="object-fit-cover d-none d-md-block me-3"
                    style="width: 100px; height: 50px"
                  />
                  <p class="mb-0">{{ cart.product.title }}</p>
                </div>
              </td>
              <td>
                <del
                  v-if="cart.product.origin_price !== cart.product.price"
                  class="text-muted fs-sm"
                  >{{ cart.product.origin_price }} 元</del
                >
                <p class="mb-0">{{ cart.product.price }} 元</p>
              </td>
              <td>
                <select
                  class="form-select form-select-sm"
                  name="productNum"
                  v-model="cart.qty"
                  @change="updateCart(cart)"
                >
                  <option
                    v-for="n in 10"
                    :key="n + 'dfafaew'"
                    :value="n"
                    :selected="n === cart.qty"
                  >
                    {{ n }}
                  </option>
                </select>
              </td>
              <td class="text-center">{{ cart.final_total }} 元</td>
              <td class="text-end">
                <button class="btn btn-light text-primary" type="button"
                  @click="deleteCart(cart.id)">
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="
          d-flex
          flex-column
          align-items-start
          flex-md-row
          justify-content-md-between
          align-items-md-center
          mb-3
        "
      >
        <label class="mb-3">
          <span class="form-label me-3">折扣: </span>
          <input
            class="form-control-sm"
            type="text"
            placeholder="輸入 ILoveGreen 打九折"
          />
          <p class="fs-sm mb-0">
            複製: <span class="user-select-all">ILoveGreen</span>
          </p>
        </label>
        <div class="text-md-end fs-5">
          <p class="mb-0">總價： {{ total }} 元</p>
          <p class="mb-0">
            折價後： <span class="fs-4">{{ finalTotal }}</span> 元
          </p>
          <span class="text-muted" v-if="finalTotal !== total"
            >省下 {{ total - finalTotal }} 元</span
          >
        </div>
      </div>
      <div class="d-flex justify-content-center justify-content-md-end">
        <button class="btn btn-lg btn-green-500 text-white px-10" type="button"
          @click="this.currentStep++">
          開始結帳
        </button>
      </div>
    </template>
    <template v-else-if="currentStep === 1">
      <p>下一步</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: ['確認購買商品', '填寫購買資訊', '確認訂單與付款', '完成購買'],
      currentStep: 0,
      carts: [],
      total: 0,
      finalTotal: 0,
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`,
        )
        .then((res) => {
          console.log(res);
          this.carts = res.data.data.carts;
          this.total = res.data.data.total;
          this.finalTotal = res.data.data.final_total;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    updateCart(item) {
      console.log(item);
      const updateProduct = {
        data: {
          product_id: item.product_id,
          qty: item.qty,
        },
      };
      this.$http
        .put(`${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, updateProduct)
        .then((res) => {
          console.log(res);
          this.getCart();
          this.$swal({
            icon: 'success',
            title: '更新數量成功',
            showCloseButton: true,
          });
        })
        .catch((err) => {
          this.$swal({
            icon: 'err',
            title: err.response.data.message,
            showCloseButton: true,
          });
        });
    },
    deleteCart(cartId) {
      this.$http
        .delete(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart/${cartId}`,
        )
        .then((res) => {
          console.log(res);
          this.getCart();
          this.$swal({
            icon: 'success',
            title: '刪除成功',
            showCloseButton: true,
          });
        })
        .catch((err) => {
          this.$swal({
            icon: 'err',
            title: err.response.data.message,
            showCloseButton: true,
          });
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
