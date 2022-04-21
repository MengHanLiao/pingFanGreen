<template>
  <div class="container-fluid bg-white sticky-top px-0">
    <nav class="navbar navbar-expand-lg navbar-light shadow px-3">
      <h1>
        <router-link to="/" class="logo d-flex align-items-center">
          <img class="icon-w-lg me-1" src="@/assets/images/icons/logo.png" alt="logo.png"/>
          <span class="fs-3 d-flex flex-column logo-font">
            平方綠<small class="fs-sm text-center">多肉專賣店</small>
          </span>
        </router-link>
      </h1>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        aria-labelledby="offcanvasLabel"
        ref="navOffcanvas"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel">
            <router-link to="/" class="d-flex align-items-center">
              <img class="icon-w-lg me-1" src="@/assets/images/icons/logo.png"
                alt="logo.png">
              <span class="fs-2 d-flex flex-column logo-font">
                平方綠
              </span>
            </router-link>
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            aria-label="Close"
            @click="hideOffcanvas"
          ></button>
        </div>
        <div class="offcanvas-body justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/products"
                @click="hideOffcanvas">
                產品專區</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/customization"
                @click="hideOffcanvas">
                禮物訂製</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/question"
                @click="hideOffcanvas">
                常見問題</router-link>
            </li>
          </ul>
          <div class="d-lg-none border-top pt-2">
            <ProductSidenav :can-hide="true" @emit-hide="hideOffcanvas"></ProductSidenav>
          </div>
        </div>
      </div>
      <div>
        <router-link to="/favorite" custom v-slot="{ navigate }">
          <button @click="navigate" role="link" class="btn position-relative me-2">
            <span v-if="favoriteNum"
              class="position-absolute top-20 start-80 translate-middle px-2
              bg-primary border border-light rounded-pill text-white text-sm">
              {{ favoriteNum }}
              <span class="visually-hidden">new favorite</span>
            </span>
            <span
              ><img src="@/assets/images/icons/favorite_border_black.svg" alt="myFavorite"
            /></span>
          </button>
        </router-link>
        <router-link to="/cart" custom v-slot="{ navigate }">
          <button @click="navigate" role="link" class="btn position-relative">
            <span v-if="cartNum"
              class="position-absolute top-20 start-80 translate-middle px-2
              bg-primary border border-light rounded-pill text-white text-sm">
              {{ cartNum }}
              <span class="visually-hidden">new item</span>
            </span>
            <span
              ><img src="@/assets/images/icons/shopping_cart_black.svg" alt="cart"
            /></span>
          </button>
        </router-link>
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="offcanvasNavbar"
        aria-expanded="false"
        aria-label="Toggle"
        @click="showOffcanvas"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      </div>
    </nav>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import SwalFire from '@/components/SwalFire.vue';
import ProductSidenav from './ProductSidenav.vue';

export default {
  data() {
    return {
      favoriteNum: 0,
      cartNum: 0,
      bsOffcanvas: '',
    };
  },
  components: {
    ProductSidenav,
  },
  mixins: [SwalFire],
  methods: {
    showOffcanvas() {
      this.bsOffcanvas.show();
    },
    hideOffcanvas() {
      this.bsOffcanvas.hide();
    },
    getCart() {
      this.$http.get(`${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartNum = res.data.data.carts.length;
      }).catch((err) => {
        this.failFire(err.response.data.message);
      });
    },
    getfavorite() {
      const content = JSON.parse(localStorage.getItem('favorite'));
      if (content) {
        this.favoriteNum = content.length;
      }
    },
  },
  mounted() {
    this.getCart();
    this.bsOffcanvas = new Offcanvas(this.$refs.navOffcanvas);
    emitter.on('emit-favorite', (num) => {
      this.favoriteNum = num;
    });
    emitter.on('change-cart', () => {
      this.getCart();
    });
  },
};
</script>
