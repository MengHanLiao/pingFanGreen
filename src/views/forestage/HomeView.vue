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
          <div class="swipper-hint d-flex flex-column align-items-center px-3 py-2">
            <p class="text-black fw-bold mb-0">scroll</p>
            <img class="bounce" src="../../assets/images/icons/swipe_down_black.svg" alt=""/>
          </div>
        </template>
      </swiper>
    </section>
    <section id="aboutUs">
      <div class="container pt-8">
        <div class="row">
          <div class="col-lg-6 col-xl-5 offset-xl-1 text-center text-lg-start">
            <h2 class="text-primary mb-5 mb-md-6">關於平方綠</h2>
            <h3 class="fs-4 mb-5">大家好，我們是平方綠</h3>
            <p>因為養了仙人掌而開始被小多肉們迷得神魂顛倒，
            平方綠希望能讓每個人都成為多肉好盆友。</p>
            <p>我們不只提供健康的多肉盆栽、客製化禮物，
            也推出一系列的養育心得文章，歡迎大家聯絡交流。</p>
            <div class="mt-5 mb-2 mb-lg-12">
              <router-link to="/customization" custom v-slot="{ navigate }">
                <button @click="navigate" role="link"
                  class="btn btn-green-100" type="button">聯絡我們</button>
              </router-link>
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
        <div class="container pt-8 pb-9 pb-md-12">
          <h2 class="text-center mb-6">系列商品</h2>
          <div class="row gy-4">
            <div class="col-md-4" v-for="category in categories" :key="category.seriesName">
              <router-link class="overlay" to="/product">
                <img class="overlay-img object-fit-cover"
                  :src="require(`../../assets/images/${category.imgName}.jpg`)"
                  style="height: 300px" alt="series1">
                <p class="overlay-text text-white fs-4">{{ category.seriesName }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="customization">
      <div class="container pt-8 pb-12">
        <div class="row align-items-center">
          <div class="col-4 offset-md-1">
            <img src="../../assets/images/customRing.jpg" alt="custom"
              class="object-fit-cover" style="height: 500px">
          </div>
          <div class="col-8 col-md-4 offset-md-1">
            <h2 class="text-primary mb-5 mb-md-6">客製化禮品</h2>
            <h3 class="fs-4 mb-5">多肉組盆、禮品訂製</h3>
            <p>覺得多肉們聚集在一起會更美嗎？<br>
              平方綠提供全客製化商品：多肉組盆與多肉花圈，
              根據您的需求，製作出理想中的禮品。</p>
            <p class="mb-5">由於客製化商品需要與您討論，準備時間會拉長，
              心動不如馬上行動！</p>
            <router-link to="/customization" custom v-slot="{ navigate }">
              <button @click="navigate" role="link"
                class="btn btn-green-100" type="button">查看更多資訊</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="recommand">
      <div class="bg-green-50">
        <div class="container pt-8 pb-12 border-bottom border-2">
          <h2 class="text-primary text-center mb-5 mb-md-6">好評推薦</h2>
          <ul class="row row-cols-1 row-cols-lg-4 gy-4">
            <li class="col" v-for="(recommand) in customRecommands" :key="recommand.name">
              <div class="card h-100">
                <div class="row row-cols-2 row-cols-lg-1">
                  <div class="col">
                    <img :src="require(`../../assets/images/${recommand.pictureName}.jpg`)"
                      alt="randomCustom"
                      class="card-img-top object-fit-cover" style="height: 200px">
                  </div>
                  <div class="col">
                    <div class="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 class="card-title">{{ recommand.name }}</h5>
                        <div class="mb-3">
                          <img src="../../assets/images/icons/star_black.svg"
                            style="width: 24px" alt="rate">
                          <img src="../../assets/images/icons/star_black.svg"
                            style="width: 24px" alt="rate">
                          <img src="../../assets/images/icons/star_black.svg"
                            style="width: 24px" alt="rate">
                          <img src="../../assets/images/icons/star_black.svg"
                            style="width: 24px" alt="rate">
                          <img src="../../assets/images/icons/star_black.svg"
                            style="width: 24px" alt="rate">
                        </div>
                        <p>{{ recommand.comment }}</p>
                      </div>
                      <span class="d-block text-muted text-end">{{ recommand.date }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
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
      categories: [
        {
          seriesName: '仙人掌',
          path: '/product',
          imgName: 'succulents_brownPots',
        },
        {
          seriesName: '熊童子',
          path: '/product',
          imgName: 'bearSucculents',
        },
        {
          seriesName: '花形多肉',
          path: '/product',
          imgName: 'flowerSucclents',
        },
      ],
      customRecommands: [
        {
          name: 'Vue Kata',
          pictureName: 'custom1',
          comment: '很棒的購物體驗，多肉們看起來很健康。',
          date: '2022/1/3',
        },
        {
          name: 'Glasses Great',
          pictureName: 'custom2',
          comment: '包裝完善，商品出貨快速，不錯的店家。',
          date: '2021/12/23',
        },
        {
          name: 'Turnip Cake',
          pictureName: 'custom3',
          comment: '客製化成品令人滿意，一段時間的等待是值得的。',
          date: '2022/3/18',
        },
        {
          name: 'Kitty Taoyuan',
          pictureName: 'custom4',
          comment: '服務態度親切，部落格內有許多種植技巧！！',
          date: '2022/1/17',
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    const loader = this.$loading.show();
    setTimeout(() => { loader.hide(); }, 1000);
  },
};
</script>
