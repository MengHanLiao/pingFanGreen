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
  </div>
</template>

<style lang="scss" scoped>
.bounce{
  animation: 1s ease-in-out infinite bouncing;
}
@keyframes bouncing{
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>

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
