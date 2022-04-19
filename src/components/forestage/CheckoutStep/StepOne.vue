<template>
  <div id="step_CheckCart">
    <h2 class="text-center mb-7 mb-md-7">購物車</h2>
    <template v-if="carts.length !== 0">
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
                    class="object-fit-cover table-img-sm d-none d-md-block me-3"
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
        <div v-if="isDiscount">{{ coupoun }}</div>
        <label v-else class="mb-3">
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
        <div class="align-self-end text-end fs-5">
          <p class="mb-0">總價： {{ total }} 元</p>
          <p class="mb-0">
            折價後： <span class="fs-4">{{ finalTotal }}</span> 元
          </p>
          <span class="text-primary" v-if="finalTotal !== total"
            >省下 {{ total - finalTotal }} 元</span
          >
        </div>
      </div>
      <div class="text-center text-md-end">
      <button
        class="btn btn-lg btn-green-500 text-white px-10"
        type="button"
        :disabled="!canCheck"
        @click="goNext"
      >
        {{ canCheck ? "開始結帳" : "未達低消" }}
      </button>
      <span class="d-block text-muted">最低出貨金額為 NT$ 600</span>
    </div>
    </template>
    <template v-else>
      <div class="text-center">
        <p class="fs-5 mb-5">目前尚未選購商品喔！</p>
        <router-link to="/products" class="btn btn-green-500 text-white">前往商品頁</router-link>
      </div>
    </template>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import SwalFire from '../../SwalFire.vue';

export default {
  data() {
    return {
      carts: [],
      total: 0,
      finalTotal: 0,
      coupoun: '',
      canCheck: false,
      isDiscount: false,
    };
  },
  mixins: [SwalFire],
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
          this.failFire(err.response.data.message);
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
        .put(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          updateProduct,
        )
        .then((res) => {
          this.getCart();
          this.successFire(res.data.message);
        })
        .catch((err) => {
          this.failFire(err.response.data.message);
        });
    },
    deleteCart(cartId) {
      this.$http
        .delete(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart/${cartId}`,
        )
        .then((res) => {
          this.getCart();
          this.successFire(res.data.message);
          emitter.emit('change-cart');
        })
        .catch((err) => {
          this.failFire(err.response.data.message);
        });
    },
    useCoupon() {
      const couponData = {
        data: {
          code: this.coupoun,
        },
      };
      this.$http
        .post(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/coupon`,
          couponData,
        )
        .then((res) => {
          this.successFire(res.data.message);
          this.isDiscount = true;
          this.coupoun = res.data.message;
          this.finalTotal = res.data.data.final_total;
        })
        .catch((err) => {
          this.failFire(err.response.data.message);
          this.getCart();
        });
    },
    reachAmount() {
      if (this.finalTotal > 600) {
        this.canCheck = true;
      } else {
        this.canCheck = false;
      }
    },
    goNext() {
      this.$emit('emit-next');
    },
  },
  watch: {
    finalTotal() {
      this.reachAmount();
    },
  },
  created() {
    this.getCart();
  },
};
</script>
