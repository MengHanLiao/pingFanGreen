<template>
  <div class="container pt-7 pt-md-8 pb-12">
    <h2 class="text-center mb-7 mb-md-7">收藏夾</h2>
    <div class="row justify-content-center">
      <template v-if="favorite.length === 0">
        <img
          class="object-fit-cover mb-7"
          style="height: 400px"
          src="../../assets/images/oneHandPot.jpg"
          alt="banner"
        />
        <div class="col-md-4">
          <h4 class="text-center mb-6">還沒有添加收藏的商品喔！</h4>
          <router-link
            to="/products"
            class="d-block btn btn-green-500 text-white"
            >瀏覽商品</router-link
          >
        </div>
      </template>
      <template v-else>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" v-for="product in products" :key="product.id">
              <div
                class="card"
                :class="{ 'card-hover': isHover }"
                @mouseover="isHover = true"
                @focus="isHover = true"
              >
                <router-link class="overlay" :to="`/product/${product.id}`">
                  <img
                    class="overlay-img object-fit-cover"
                    :src="product.imageUrl"
                    style="height: 200px"
                    alt="series1"
                  />
                  <button
                    class="overlay-content btn btn-outline-light"
                    type="button"
                  >
                    更多資訊
                  </button>
                </router-link>
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h5 class="text-truncate">{{ product.title }}</h5>
                    <button
                      class="btn"
                      type="button"
                      @click="toggleFavorite(product.id)"
                    >
                      <img
                        v-if="favorite.includes(product.id)"
                        src="../../assets/images/icons/favorite_black.svg"
                        alt="myFavorite"
                      />
                      <img
                        v-else
                        src="../../assets/images/icons/favorite_border_black.svg"
                        alt="myFavorite"
                      />
                    </button>
                  </div>
                  <p class="text-primary fs-5 mb-0">
                    <del
                      class="d-block text-muted fs-sm"
                      v-show="product.origin_price !== product.price"
                    >
                      NT$ {{ product.origin_price }}</del
                    >
                    NT$ {{ product.price }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import SwalFire from '../../components/forestage/SwalFire.vue';

export default {
  data() {
    return {
      isHover: false,
      loadItem: '',
      products: [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
    };
  },
  mixins: [SwalFire],
  methods: {
    getProduct() {
      this.favorite.forEach((id) => {
        this.$http
          .get(
            `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/product/${id}`,
          )
          .then((res) => {
            this.products.push(res.data.product);
          })
          .catch((err) => {
            console.dir(err);
          });
      });
    },
    toggleFavorite(id) {
      const favoriteIndex = this.favorite.findIndex((item) => item === id);
      if (favoriteIndex === -1) {
        this.favorite.push(id);
        this.successFire('加入收藏');
      } else {
        this.favorite.splice(favoriteIndex, 1);
        this.warningFire('取消收藏');
      }
    },
  },
  watch: {
    favorite: {
      handler() {
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
      },
      deep: true,
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
