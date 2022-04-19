<template>
  <div>
    <h2 class="text-center mb-7 mb-md-7">填寫購買資訊</h2>
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <v-form ref="form" v-slot="{ errors }" @submit="submitOrder">
          <div class="mb-3">
            <label for="email" class="form-label">
              Email<span class="text-sm text-primary ms-2">必填</span>
            </label>
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
            <label for="name" class="form-label">
              收件人姓名<span class="text-sm text-primary ms-2">必填</span>
            </label>
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
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">
              收件人電話<span class="text-sm text-primary ms-2">必填</span>
            </label>
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
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">
              收件人地址<span class="text-sm text-primary ms-2">必填</span>
            </label>
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
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-4">
            <label for="payMethod" class="form-label">
              付款方式<span class="text-sm text-primary ms-2">必填</span>
            </label>
            <select class="form-select" name="payMethod" id="payMethod">
              <option value="銀行轉帳">銀行轉帳</option>
              <option value="信用卡">信用卡</option>
              <option value="行動支付">行動支付</option>
            </select>
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
          <div class="d-flex justify-content-end">
            <button
              type="submit"
              class="btn btn-green-500 text-white"
              :disabled="Object.keys(errors).length > 0"
            >
              訂單確認
            </button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import SwalFire from '../../SwalFire.vue';

export default {
  data() {
    return {
      userForm: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  mixins: [SwalFire],
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    submitOrder() {
      this.$http.post(`${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/order`, { data: this.userForm }).then((res) => {
        this.successFire(res.data.message);
        this.$emit('emit-orderid', res.data.orderId);
        this.goNext();
      }).catch((err) => {
        this.failFire(err.response.data.message);
      });
    },
    goNext() {
      this.$emit('emit-next');
    },
  },
};
</script>
