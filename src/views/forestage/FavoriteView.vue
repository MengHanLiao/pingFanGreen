<template>
  <div class="container pt-7 pt-md-8 pb-12">
    <h2 class="text-center mb-7 mb-md-7">收藏夾</h2>
    <div class="row justify-content-center">
      <template v-if="favorite.length === 0">
        <img
          class="object-fit-cover img-h-lg mb-7"
          src="@/assets/images/oneHandPot.jpg"
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
          <div class="row gy-5">
            <div class="col-md-6" v-for="product in products" :key="product.id">
              <div
                class="card"
                :class="{ 'card-hover': isHover, 'cursor-pointer': isHover }"
                @mouseover="isHover = true"
                @focus="isHover = true"
                @click.prevent="goToProduct(product.id)"
                @keydown="goToProduct(product.id)"
              >
                <div class="overlay">
                  <img
                    class="overlay-img object-fit-cover img-h-md"
                    :src="product.imageUrl"
                    alt="series1"
                  />
                  <button
                    class="overlay-content btn btn-outline-light"
                    type="button"
                  >
                    更多資訊
                  </button>
                </div>
                <div class="card-body">
                  <h5 class="text-truncate">{{ product.title }}</h5>
                  <p class="text-primary fs-5 mb-0">
                    <del
                      class="d-block text-muted fs-sm"
                      v-show="product.origin_price !== product.price"
                    >
                      NT$ {{ product.origin_price }}</del
                    >
                    NT$ {{ product.price }}
                  </p>
                  <div class="d-flex justify-content-end">
                    <button class="btn" type="button"
                      @click.stop="toggleFavorite(product.id)">
                      <img v-if="favorite.includes(product.id)"
                        src="@/assets/images/icons/favorite_black.svg"
                        alt="myFavorite"
                      />
                      <img v-else
                        src="@/assets/images/icons/favorite_border_black.svg"
                        alt="myFavorite"
                      />
                    </button>
                    <button
                      class="btn"
                      :class="{ disabled: product.id === loadItem }"
                      type="button"
                      @click.stop="addToCart(product.id)"
                    >
                      <div
                        class="spinner-grow"
                        role="status"
                        :class="{ 'd-none': product.id !== loadItem }"
                      ></div>
                      <img
                        :class="{ 'd-none': product.id === loadItem }"
                        src="@/assets/images/icons/shopping_cart_black.svg"
                        alt="cart"
                      />
                    </button>
                  </div>
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
import ToggleFavorite from '@/methods/ProductMixin/ToggleFavorite';
import AddToCart from '@/methods/ProductMixin/AddToCart';
import SwalFire from '@/components/SwalFire.vue';

export default {
  data() {
    return {
      isHover: false,
      loadItem: '',
      products: [],
    };
  },
  mixins: [ToggleFavorite, AddToCart, SwalFire],
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
            this.failFire(err.response.data.message);
          });
      });
    },
    goToProduct(id) {
      this.$router.push({ path: `/product/${id}` });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
