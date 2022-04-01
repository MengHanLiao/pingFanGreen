<template>
  <div class="container pt-7 pt-md-8 pb-12">
    <h2 class="text-center mb-7 mb-md-7">商品專區</h2>
    <div class="row">
      <div class="col-md-3 d-none d-md-block">
        <h5>商品分類</h5>
        <ul class="nav flex-column">
          <li class="nav-item" v-for="(category,index) in categories" :key="index+'dasdf'">
            <router-link :to="`/product/${category}`" class="nav-link">{{ category }}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-9">
        <div class="row">
          <nav class="col-md-6" aria-label="breadcrumb">
            <Breadcrumb></Breadcrumb>
          </nav>
          <div class="col-md-5 offset-md-1">
            <div class="input-group mb-3">
              <input type="text" class="form-control border-green-500" placeholder="搜尋商品"
                aria-label="商品搜尋" aria-describedby="商品搜尋">
              <button class="btn btn-outline-green-500" type="button">
                <img src="../../assets/images/icons/search_black.svg" alt="find">
              </button>
            </div>
          </div>
        </div>
        <div class="row row-cols-2 row-cols-lg-4 gy-4">
          <div class="col" v-for="product in products" :key="product.id">
            <div class="card" :class="{'card-hover': cardHover}"
              @mouseover="cardHover = true" @focus="cardHover = true">
              <img :src="product.imageUrl" :alt="product.title"
                class="card-img-top object-fit-cover" style="height: 150px">
              <div class="card-body">
                <h5>{{ product.title }}</h5>
                <p class="text-primary fs-5 mb-0">
                  <del class="d-block text-muted fs-sm"
                    v-show="product.origin_price !== product.price">
                    NT$ {{ product.origin_price }}</del>
                  NT$ {{ product.price }}
                </p>
                <div class="d-flex justify-content-end">
                  <button class="btn" type="button">
                    <img src="../../assets/images/icons/favorite_border_black.svg"
                      alt="myFavorite"/>
                  </button>
                  <button class="btn" type="button" @click="addToCart(product.id)">
                    <img src="../../assets/images/icons/shopping_cart_black.svg" alt="cart"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../../components/BreadcrumbComponent.vue';

export default {
  data() {
    return {
      cardHover: false,
      categories: [],
      products: [],
      pagination: [],
    };
  },
  components: {
    Breadcrumb,
  },
  methods: {
    getData(category = '') {
      const loader = this.$loading.show();
      this.$http.get(
        `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/products?category=${category}`,
      ).then((res) => {
        this.products = res.data.products;
        this.pagination = res.data.pagination;
        this.findCategory();
        loader.hide();
      }).catch((err) => {
        console.dir(err);
      });
    },
    findCategory() {
      this.products.forEach((item) => {
        const isExist = this.categories.some((category) => category === item.category);
        if (!isExist) {
          this.categories.push(item.category);
        }
      });
    },
    addToCart(id, qty = 1) {
      this.$http.post(`${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`, {
        data: {
          product_id: id,
          qty,
        },
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  watch: {
    $route() {
      this.getData(this.$route.params.category);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
