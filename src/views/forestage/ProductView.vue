<template>
  <div class="container pt-7 pt-md-8 pb-12">
    <h2 class="text-center mb-7 mb-md-7">商品專區</h2>
    <div class="row">
      <div class="col-lg-3 d-none d-lg-block">
        <h5>商品分類</h5>
        <ProductSidenav />
      </div>
      <div class="col-lg-9">
        <div class="row">
          <nav class="col-md-6" aria-label="breadcrumb">
            <Breadcrumb />
          </nav>
          <div class="col-md-5 offset-md-1">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control border-green-500"
                placeholder="搜尋商品或類別"
                aria-label="商品搜尋"
                aria-describedby="商品搜尋"
                v-model.trim="keyword"
                @change="searchProduct"
              />
              <button class="btn btn-outline-green-500" type="button" @click="searchProduct">
                <img
                  src="@/assets/images/icons/search_black.svg" alt="find"
                />
              </button>
            </div>
          </div>
        </div>
        <template v-if="products.length !== 0">
          <div class="row row-cols-2 row-cols-lg-4 gy-4 mb-7">
            <div class="col" v-for="product in products" :key="product.id">
              <div
                class="card"
                :class="{ 'card-hover': isHover, 'cursor-pointer': isHover }"
                @mouseover="isHover = true"
                @focus="isHover = true"
                @click.prevent="goToProduct(product.id)"
                @keydown="goToProduct(product.id)"
              >
                <div class="overlay" :class="{hover: isHover}">
                  <img
                    class="overlay-img object-fit-cover img-h-sm"
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
            <PaginationComponent
              :pagination="pagination"
              @change-page="getData"
            ></PaginationComponent>
        </template>
        <template v-else>
          <p class="fs-4 me-5">目前沒有符合的品名或類別<br>
          請重新輸入關鍵字</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/forestage/BreadcrumbComponent.vue';
import ProductSidenav from '@/components/forestage/ProductSidenav.vue';
import ToggleFavorite from '@/mixins/ToggleFavorite';
import AddToCart from '@/mixins/AddToCart';
import PaginationComponent from '@/components/PaginationComponent.vue';
import SwalFire from '@/components/SwalFire.vue';

export default {
  data() {
    return {
      isHover: false,
      products: [],
      pagination: [],
      keyword: '',
    };
  },
  props: ['category'],
  mixins: [SwalFire, ToggleFavorite, AddToCart],
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
    searchProduct() {
      let allProduct = [];
      const loader = this.$loading.show();
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/products/all`,
        )
        .then((res) => {
          allProduct = res.data.products;
          this.products = allProduct.filter(
            (item) => item.title.match(this.keyword) || item.category.match(this.keyword),
          );
          console.log(this.pagination);
          this.pagination = {
            current_page: 1,
            total_pages: 1,
          };
          loader.hide();
          this.keyword = '';
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    goToProduct(id) {
      this.$router.push({ path: `/product/${id}` });
    },
  },
  watch: {
    $route() {
      this.getData(1, this.$route.params.category);
    },
  },
  mounted() {
    const pagesCategory = this.$route.params.category || '';
    this.getData(1, pagesCategory);
  },
};
</script>
