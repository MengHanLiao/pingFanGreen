<template>
  <div class="container">
    <div class="text-end mt-4">
      <button
        class="btn btn-primary"
        type="button"
        @click="openCouponModal(true)"
      >
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>到期日</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelCouponModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal
      :coupon="tempCoupon"
      :is-new="isNew"
      ref="couponModal"
      @update-coupon="updateCoupon"
    />
    <deleteConfirm
      ref="deleteModal"
      :delete-item="tempCoupon"
      @emit-delete="deleteCoupon"
    ></deleteConfirm>
  </div>
</template>

<script>
import CouponModal from '../../components/CouponModal.vue';
import deleteConfirm from '../../components/DeleteConfirm.vue';

export default {
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isLoading: false,
      isNew: false,
    };
  },
  components: { CouponModal, deleteConfirm },
  props: {
    config: Object,
  },
  methods: {
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.openModal();
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      const delComponent = this.$refs.deleteModal;
      delComponent.openModal();
    },
    getCoupons() {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupons`,
          this.tempProduct,
        )
        .then((res) => {
          this.coupons = res.data.coupons;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    updateCoupon(tempCoupon) {
      this.isLoading = true;
      let url = `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethos = 'post';
      let data = tempCoupon;
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        httpMethos = 'put';
        data = this.tempCoupon;
      }
      this.$http[httpMethos](url, { data })
        .then(() => {
          this.isLoading = false;
          this.getCoupons();
          this.$refs.couponModal.closeModal();
        })
        .catch((err) => {
          this.isLoading = false;
          console.dir(err);
        });
    },
    deleteCoupon() {
      this.isLoading = true;
      this.$http
        .delete(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`,
        )
        .then(() => {
          this.isLoading = false;
          const delComponent = this.$refs.deleteModal;
          delComponent.closeModal();
          this.getCoupons();
        })
        .catch((err) => {
          this.isLoading = false;
          console.dir(err);
        });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
