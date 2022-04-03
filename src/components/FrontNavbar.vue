<template>
  <div class="container-fluid bg-white sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light shadow">
      <h1>
        <router-link to="/" class="logo d-flex align-items-center">
          <img class="me-1" src="../assets/images/icons/logo.png"
            alt="logo.png" style="width: 3rem"/>
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
              <img class="me-1" src="../assets/images/icons/logo.png"
                alt="logo.png" style="width:36px"/>
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
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/article"
                @click="hideOffcanvas">
                所有文章</router-link>
            </li> -->
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
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link class="nav-link ps-0" to="/products/仙人掌"
                  @click="hideOffcanvas">
                  仙人掌系列</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link ps-0" to="/products/熊童子"
                  @click="hideOffcanvas">
                  熊童子系列</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link ps-0" to="/products/花形多肉"
                  @click="hideOffcanvas">
                  花形多肉</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link ps-0" to="/products/石頭玉"
                  @click="hideOffcanvas">
                  石頭玉家族</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link ps-0" to="/products/盆栽器具"
                  @click="hideOffcanvas">
                  盆栽器具</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <router-link to="/favorite" custom v-slot="{ navigate }">
          <button @click="navigate" role="link" class="btn">
            <span
              ><img src="../assets/images/icons/favorite_border_black.svg" alt="myFavorite"
            /></span>
          </button>
        </router-link>
        <router-link to="/cart" custom v-slot="{ navigate }">
          <button @click="navigate" role="link" class="btn">
            <span
              ><img src="../assets/images/icons/shopping_cart_black.svg" alt="cart"
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
import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default {
  data() {
    return {
      bsOffcanvas: '',
    };
  },
  methods: {
    showOffcanvas() {
      this.bsOffcanvas.show();
    },
    hideOffcanvas() {
      this.bsOffcanvas.hide();
    },
  },
  mounted() {
    this.bsOffcanvas = new Offcanvas(this.$refs.navOffcanvas);
  },
};
</script>
