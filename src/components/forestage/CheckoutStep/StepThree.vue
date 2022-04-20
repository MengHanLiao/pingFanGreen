<template>
  <div>
    <h2 class="text-primary text-center mb-7 mb-md-7">確認訂單</h2>
    <h4 class="text-center">購買人資料</h4>
    <div class="d-flex align-items-center mb-7">
      <div class="d-none d-md-block w-50 me-3">
        <img
          class="object-fit-cover img-h-md"
          src="@/assets/images/lastStep.jpg"
          alt="circlePlants"
        />
      </div>
      <ul class="w-50 list-style-none ps-0">
        <li>姓名： {{ userForm.name }}</li>
        <li>信箱： {{ userForm.email }}</li>
        <li>電話： {{ userForm.tel }}</li>
        <li>地址： {{ userForm.address }}</li>
        <li v-if="message !== ''">
          留言：
          <p class="ps-2">{{ userForm.message }}</p>
        </li>
      </ul>
    </div>
    <h4 class="text-center">訂單內容</h4>
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">商品</th>
            <th scope="col">售價</th>
            <th scope="col" width="100px">購買數量</th>
            <th scope="col" class="text-center">總計</th>
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
            <td>{{ cart.qty }}</td>
            <td class="text-center">{{ cart.final_total }} 元</td>
          </tr>
        </tbody>
      </table>
      <p class="fs-4 text-primary text-end">
        <span class="fs-6 text-muted">訂單金額： </span>NT$ {{ total }}
      </p>
    </div>
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-lg btn-green-500 text-white"
        type="button"
        @click="checkout"
      >
        確認付款
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      total: 0,
      userForm: {},
      message: '',
    };
  },
  props: ['orderId'],
  methods: {
    getOrder() {
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`,
        )
        .then((res) => {
          this.carts = res.data.order.products;
          this.total = res.data.order.total;
          this.userForm = res.data.order.user;
          this.message = res.data.order.message || '';
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: err.response.data.message,
            showCloseButton: true,
          });
        });
    },
    checkout() {
      this.$http.post(`${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`).then((res) => {
        this.$swal({
          icon: 'success',
          title: res.data.message,
          showCloseButton: true,
        });
        this.goNext();
      }).catch((err) => {
        this.$swal({
          icon: 'error',
          title: err.response.data.message,
          showCloseButton: true,
        });
      });
    },
    goNext() {
      this.$emit('emit-next');
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>
