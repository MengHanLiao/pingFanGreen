<template>
  <div class="container pt-7 pt-md-8 pb-9 pb-md-12">
    <h2 class="text-center mb-7 mb-md-7">客製化產品</h2>
    <img class="object-fit-cover mb-7" style="height: 400px"
      src="../../assets/images/gift.jpg" alt="banner">
    <div class="text-center mb-7">
      <h3 class="text-primary fs-4 mb-5">客製化多肉盆栽實現你的願望</h3>
      <p>普通的多肉盆栽，送禮顯得不夠用心？<br>
      單一種的多肉植栽太過單調？<br>
      好想要送出獨一無二的禮物啊！</p>
      <p>這些願望，我們都知道，<br>
        平方綠通通願意為您實現。</p>
    </div>
    <h3 class="text-primary text-center fs-4 mb-5">給您參考，我們的作品</h3>
    <div class="row gy-3 gy-md-0 mb-7">
      <div class="col-md-4">
        <img class="object-fit-cover" style="height: 400px"
          src="../../assets/images/work1.jpg" alt="work1">
      </div>
      <div class="col-md-4">
        <img class="object-fit-cover" style="height: 400px"
          src="../../assets/images/work2.jpg" alt="work2">
      </div>
      <div class="col-md-4">
        <img class="object-fit-cover" style="height: 400px"
          src="../../assets/images/work3.jpg" alt="work3">
      </div>
    </div>
    <div class="text-center mb-7">
      <h3 class="text-primary fs-4 mb-5">離您的理想更近一點</h3>
      <p>無論是多肉的品種組合或是盆栽選擇，<br>
        都歡迎與我們討論。<br></p>
      <p>提醒您，好的作品需要一定的時間完成，<br>
        平方綠想要離您的理想更近一點，<br>
        心動不如馬上行動。</p>
    </div>
    <div class="row justify-content-center">
      <div class="col-4">
        <button class="w-100 btn btn-green-500 text-white" type="button"
          @click="openContactModal">聯絡我們</button>
      </div>
    </div>
    <ContactModal ref="contactModal"></ContactModal>
  </div>
</template>

<script>
import ContactModal from '../../components/forestage/ContactModal.vue';

export default {
  components: {
    ContactModal,
  },
  methods: {
    openContactModal() {
      this.$refs.contactModal.openModal();
    },
  },
};
</script>
