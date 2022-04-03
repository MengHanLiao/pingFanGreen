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
      <cartTable :can-change="true"></cartTable>
      <div class="d-flex justify-content-center justify-content-md-end">
        <button
          class="btn btn-lg btn-green-500 text-white px-10"
          type="button"
          @click="this.currentStep++"
        >
          開始結帳
        </button>
      </div>
    </template>
    <template v-else-if="currentStep === 1">
      <h2 class="text-center mb-7 mb-md-7">填寫購買資訊</h2>
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <v-form
            ref="form"
            v-slot="{ errors }"
            @submit="submitOrder"
          >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="required|email"
                v-model="userForm.user.email"
              ></v-field>
              <error-message
                name="email"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <v-field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="userForm.user.name"
              ></v-field>
              <error-message
                name="姓名"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <v-field
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="userForm.user.tel"
              ></v-field>
              <error-message
                name="電話"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <v-field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="userForm.user.address"
              ></v-field>
              <error-message
                name="地址"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-4">
              <label for="message" class="form-label">留言</label>
              <textarea
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="userForm.message"
              ></textarea>
            </div>
            <div class="d-flex justify-content-center justify-content-md-end">
              <button
                type="submit"
                class="w-100 btn btn-green-500 text-white"
                :disabled="Object.keys(errors).length > 0"
              >
                送出訂單
              </button>
            </div>
          </v-form>
        </div>
      </div>
    </template>
    <template v-else-if="currentStep === 2">
      <h2 class="text-center mb-7 mb-md-7">確認訂單</h2>
      <h4 class="text-center">購買人資料</h4>
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <ul class="list-style-none text-center ps-0">
            <li>姓名： {{ userForm.user.name }}</li>
            <li>信箱： {{ userForm.user.email }}</li>
            <li>電話： {{ userForm.user.tel }}</li>
            <li>地址： {{ userForm.user.address }}</li>
            <li v-if="userForm.message!==''">
              留言：<p class="ps-2">{{ userForm.message }}</p>
            </li>
          </ul>
        </div>
      </div>
      <h4 class="text-center">訂單內容</h4>
      <cartTable :can-change="false"></cartTable>
      <div class="d-flex justify-content-center">
        <button
            class="btn btn-lg btn-green-500 text-white px-10"
            type="button"
            @click="this.currentStep++"
          >
            確認付款
        </button>
      </div>
    </template>
    <template v-else-if="currentStep === 3">
      <h2 class="text-center mb-7 mb-md-7">完成訂購</h2>
      <p class="text-center">
        感謝您本次的購買<br>
        出貨時會寄送確認信件<br>
        請您留意<br>
      </p>
      <div class="d-flex justify-content-center">
        <router-link to="/" class="btn btn-lg btn-outline-dark px-10">返回首頁</router-link>
      </div>
    </template>
  </div>
</template>

<script>
import cartTable from '../../components/CartTable.vue';

export default {
  data() {
    return {
      steps: ['確認購買商品', '填寫購買資訊', '確認訂單與付款', '完成購買'],
      currentStep: 0,
      userForm: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      orderId: '',
    };
  },
  components: {
    cartTable,
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    submitOrder() {
      this.$http.post(`${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/order`, { data: this.userForm }).then((res) => {
        this.$swal({
          icon: 'success',
          title: res.data.message,
          showCloseButton: true,
        });
        this.orderId = res.data.orderId;
        this.currentStep += 1;
        console.log(this.orderId);
      }).catch((err) => {
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
      }).catch((err) => {
        this.$swal({
          icon: 'error',
          title: err.response.data.message,
          showCloseButton: true,
        });
      });
    },
  },
  watch: {
    currentStep() {
      if (this.currentStep === 0) {
        this.$refs.form.resetForm();
        this.user.message = '';
        this.orderId = '';
      }
    },
  },
  created() {
    this.currentStep = 0;
  },
};
</script>
