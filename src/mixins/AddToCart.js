import emitter from '../methods/emitter';

export default {
  data() {
    return {
      loadItem: '',
    };
  },
  methods: {
    addToCart(id, qty = 1) {
      this.loadItem = id;
      this.$http
        .post(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`,
          {
            data: {
              product_id: id,
              qty,
            },
          },
        )
        .then((res) => {
          this.loadItem = '';
          emitter.emit('change-cart');
          this.successFire(res.data.message);
        })
        .catch((err) => {
          this.loadItem = '';
          this.failFire(err.response.data.message);
        });
    },
  },
};
