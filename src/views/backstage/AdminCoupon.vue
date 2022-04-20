<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between mb-3">
      <h2>優惠券列表</h2>
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
import CouponModal from '@/components/backstage/CouponModal.vue';
import deleteConfirm from '@/components/backstage/DeleteConfirm.vue';
import SwalFire from '@/components/SwalFire.vue';

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
      isNew: false,
    };
  },
  mixins: [SwalFire],
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
          is_enabled: 0,
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
      const loader = this.$loading.show();
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupons`,
          this.tempProduct,
        )
        .then((res) => {
          this.coupons = res.data.coupons;
          loader.hide();
        })
        .catch((err) => {
          loader.hide();
          this.failFire(err.response.data.message);
        });
    },
    updateCoupon(tempCoupon) {
      const loader = this.$loading.show();
      let url = `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethos = 'post';
      let data = tempCoupon;
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        httpMethos = 'put';
        data = this.tempCoupon;
      }
      this.$http[httpMethos](url, { data })
        .then((res) => {
          loader.hide();
          this.getCoupons();
          this.$refs.couponModal.closeModal();
          this.successFire(res.data.message);
        })
        .catch((err) => {
          loader.hide();
          this.failFire(err.response.data.message);
        });
    },
    deleteCoupon() {
      const loader = this.$loading.show();
      this.$http
        .delete(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`,
        )
        .then((res) => {
          loader.hide();
          const delComponent = this.$refs.deleteModal;
          delComponent.closeModal();
          this.getCoupons();
          this.successFire(res.data.message);
        })
        .catch((err) => {
          loader.hide();
          this.failFire(err.response.data.message);
        });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
