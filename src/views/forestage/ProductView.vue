<template>
  <div class="container pt-7 pt-md-8 pb-12">
    <h2 class="text-center mb-7 mb-md-7">商品專區</h2>
    <div class="row">
      <div class="col-md-3 d-none d-md-block">
        <h5>商品分類</h5>
        <ProductSidenav></ProductSidenav>
      </div>
      <div class="col-md-9">
        <div class="row">
          <nav class="col-md-6" aria-label="breadcrumb">
            <Breadcrumb></Breadcrumb>
          </nav>
          <div class="col-md-5 offset-md-1">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control border-green-500"
                placeholder="搜尋商品"
                aria-label="商品搜尋"
                aria-describedby="商品搜尋"
              />
              <button class="btn btn-outline-green-500" type="button">
                <img
                  src="../../assets/images/icons/search_black.svg" alt="find"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="row row-cols-2 row-cols-lg-4 gy-4 mb-7">
          <div class="col" v-for="product in products" :key="product.id">
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
                    @click="toggleFavorite(product.id)">
                    <img v-if="favorite.includes(product.id)"
                      src="../../assets/images/icons/favorite_black.svg"
                      alt="myFavorite"
                    />
                    <img v-else
                      src="../../assets/images/icons/favorite_border_black.svg"
                      alt="myFavorite"
                    />
                  </button>
                  <button
                    class="btn"
                    :class="{ disabled: product.id === loadItem }"
                    type="button"
                    @click="addToCart(product.id)"
                  >
                    <div
                      class="spinner-grow"
                      role="status"
                      :class="{ 'd-none': product.id !== loadItem }"
                    ></div>
                    <img
                      :class="{ 'd-none': product.id === loadItem }"
                      src="../../assets/images/icons/shopping_cart_black.svg"
                      alt="cart"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PaginationComponent
          :pagination="pagination"
          @change-page="getData"
        ></PaginationComponent>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../../components/BreadcrumbComponent.vue';
import ProductSidenav from '../../components/ProductSidenav.vue';
import PaginationComponent from '../../components/PaginationComponent.vue';

export default {
  data() {
    return {
      isHover: false,
      categories: [],
      products: [],
      pagination: [],
      loadItem: '',
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
    };
  },
  components: {
    Breadcrumb,
    ProductSidenav,
    PaginationComponent,
  },
  methods: {
    getData(page = 1, category = '') {
      const loader = this.$loading.show();
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/products?page=${page}&category=${category}`,
        )
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          loader.hide();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
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
          this.$swal({
            icon: 'success',
            title: res.data.message,
            showCloseButton: true,
          });
        })
        .catch((err) => {
          this.loadItem = '';
          this.$swal({
            icon: 'errpr',
            title: err.response.data.message,
            showCloseButton: true,
          });
        });
    },
    toggleFavorite(id) {
      const favoriteIndex = this.favorite.findIndex((item) => item === id);
      if (favoriteIndex === -1) {
        this.favorite.push(id);
        this.$swal({
          icon: 'success',
          title: '加入收藏',
          showCloseButton: true,
        });
      } else {
        this.favorite.splice(favoriteIndex, 1);
        this.$swal({
          icon: 'success',
          title: '取消收藏',
          showCloseButton: true,
        });
      }
    },
  },
  watch: {
    $route() {
      this.getData(1, this.$route.params.category);
    },
    favorite: {
      handler() {
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
      },
      deep: true,
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
