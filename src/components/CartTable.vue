<template>
  <div class="table-responsive">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col">商品</th>
          <th scope="col">售價</th>
          <th scope="col" width="100px">購買數量</th>
          <th scope="col" class="text-center">總計</th>
          <th v-if="canChange" scope="col" class="text-end pe-4">操作</th>
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
            <template v-if="canChange">
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
            </template>
            <template v-else>
              <div>{{ cart.qty }}</div>
            </template>
          </td>
          <td class="text-center">{{ cart.final_total }} 元</td>
          <td class="text-end" v-if="canChange">
            <button
              class="btn btn-light text-primary"
              type="button"
              @click="deleteCart(cart.id)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
      <label class="mb-3" v-if="canChange">
        <span class="form-label me-3">折扣: </span>
        <input
          class="form-control-sm"
          type="text"
          placeholder="輸入 ILoveGreen 打九折"
          v-model="coupoun"
          @change="useCoupon"
        />
        <p class="fs-sm mb-0">
          新綠優惠碼: <span class="user-select-all">ILoveGreen</span>
        </p>
      </label>
      <div class="fs-5"
        :class="{'text-md-end': canChange}">
        <p class="mb-0">總價： {{ total }} 元</p>
        <p class="mb-0">
          折價後： <span class="fs-4">{{ finalTotal }}</span> 元
        </p>
        <span class="text-primary" v-if="finalTotal !== total"
          >省下 {{ total - finalTotal }} 元</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      total: 0,
      finalTotal: 0,
      coupoun: '',
    };
  },
  props: {
    canChange: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  // props: ['can-change'],
  methods: {
    getCart() {
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`,
        )
        .then((res) => {
          this.carts = res.data.data.carts;
          this.total = res.data.data.total;
          this.finalTotal = res.data.data.final_total;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    updateCart(item) {
      const updateProduct = {
        data: {
          product_id: item.product_id,
          qty: item.qty,
        },
      };
      this.$http
        .put(`${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, updateProduct)
        .then((res) => {
          this.getCart();
          this.$swal({
            icon: 'success',
            title: res.data.message,
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
    useCoupon() {
      const couponData = {
        data: {
          code: this.coupoun,
        },
      };
      this.$http
        .post(`${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/coupon`, couponData).then((res) => {
          this.$swal({
            icon: 'success',
            title: res.data.message,
            showCloseButton: true,
          });
          this.getCart();
        }).catch((err) => {
          this.$swal({
            icon: 'error',
            title: err.response.data.message,
            showCloseButton: true,
          });
          this.getCart();
        });
    },
  },
  watch: {
    finalTotal() {
      this.$emit('check-amount', this.finalTotal);
    },
  },
  created() {
    this.getCart();
  },
};
</script>
