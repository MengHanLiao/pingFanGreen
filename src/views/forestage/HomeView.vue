<template>
  <div>
    <section id="hero">
      <swiper
        :modules="modules"
        :space-between="10"
        navigation
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide>
          <div class="hero eventA">
            <div class="container">
              <div class="row">
                <div class="col-md-6 offset-md-1">
                  <h3 class="display-5 mt-10 mb-3">用多肉裝飾你的家</h3>
                  <router-link to="/product"
                    class="btn btn-outline-dark w-50 border-2">
                    開始選購</router-link>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hero eventB">
            <div class="container">
              <div class="row">
                <div class="col-md-6 offset-md-1">
                  <h3 class="display-5 mt-10">春日多肉季</h3>
                  <p class="fs-3 text-gray">商品折扣中</p>
                  <router-link to="/product"
                    class="btn btn-outline-dark w-50 border-2">
                    開始選購</router-link>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hero eventC">
            <div class="container">
              <div class="row">
                <div class="col-md-6 offset-md-1">
                  <h3 class="display-5 mt-10">獨一無二</h3>
                  <p class="fs-3 text-gray">母親節禮物客製化</p>
                  <router-link to="/product"
                    class="btn btn-outline-dark w-50 border-2">
                    聯絡我們</router-link>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <template v-slot:container-end>
          <div class="swipper-hint border border-2 d-flex flex-column align-items-center px-3 py-2">
            <p class="text-white mb-0">scroll</p>
            <img class="bounce" src="../../assets/images/icons/swipe_down_black.svg" alt=""/>
          </div>
        </template>
      </swiper>
    </section>
    {{containerHeight}}
    <section id="aboutUs">
      <div class="container pt-8">
        <div class="row">
          <div class="col-lg-6 col-xl-5 offset-xl-1 text-center text-lg-start">
            <h2 class="text-primary mb-6">關於平方綠</h2>
            <h3 class="fs-4 mb-5">大家好，我們是平方綠</h3>
            <p>因為養了仙人掌而開始被小多肉們迷得神魂顛倒，<br>
            平方綠希望能讓每個人都成為多肉好盆友。</p>
            <p>我們不只提供健康的多肉盆栽、客製化禮物，<br>
            也推出一系列的養育心得文章，歡迎大家聯絡交流。</p>
            <div class="mb-2 mb-lg-12">
              <button class="btn btn-green-100 me-3" type="button">聯絡我們</button>
              <a href="#" class="p-3"><img src="../../assets/images/icons/facebook.png"
                style="width: 2rem" alt="fb"></a>
              <a href="#" class="p-3"><img src="../../assets/images/icons/instagram.png"
                style="width: 2rem" alt="ig"></a>
            </div>
          </div>
          <div class="col-lg-6 align-self-end">
            <div class="background-about"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="productCategory">
      <div class="bg-green-50">
        <div class="container pt-8">
          <h2 class="text-center mb-6">系列商品</h2>
          <div class="row gy-4">
            <div class="col-md-4">
              <router-link class="overlay" to="/product">
                <img class="overlay-img object-fit-cover"
                  src="../../assets/images/succulents_brownPots.jpg"
                  style="height: 300px" alt="series1">
                <p class="overlay-text text-white fs-4">仙人掌</p>
              </router-link>
            </div>
            <div class="col-md-4">
              <router-link class="overlay" to="/product">
                <img class="overlay-img object-fit-cover"
                  src="../../assets/images/bearSucculents.jpg"
                  style="height: 300px" alt="series1">
                <p class="overlay-text text-white fs-4">熊童子</p>
              </router-link>
            </div>
            <div class="col-md-4">
              <router-link class="overlay" to="/product">
                <img class="overlay-img object-fit-cover"
                  src="../../assets/images/flowerSucclents.jpg"
                  style="height: 300px" alt="series1">
                <p class="overlay-text text-white fs-4">花形多肉</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
// eslint-disable-next-line import/no-relative-packages
import '../../../node_modules/swiper/swiper.scss';

export default {
  data() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
