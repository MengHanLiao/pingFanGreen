<template>
  <div class="container pt-7 pt-md-8 pb-12">
    <ul class="stepper ps-0 mb-7">
      <li
        class="stepper-item"
        :class="{ active: currentStep === i, completed: currentStep > i }"
        v-for="(step, i) in steps"
        :key="i + 'step'"
      >
        <div class="stepper-name">{{ step }}</div>
      </li>
    </ul>
    <keep-alive>
      <StepOne v-if="currentStep === 0" @emit-next="goNext"></StepOne>
      <StepTwo v-else-if="currentStep === 1" @emit-orderid="getOrderId"
        @emit-next="goNext"></StepTwo>
      <StepThree v-else-if="currentStep === 2" :order-id="orderId"
        @emit-next="goNext"></StepThree>
      <template v-else-if="currentStep === 3">
        <h2 class="text-primary text-center mb-5 mb-md-7 ">完成訂購</h2>
        <p class="text-center">
          感謝您本次的購買<br>
          出貨時會寄送確認信件<br>
          請您留意<br>
        </p>
        <p class="text-center mb-5 mb-md-7">
          訂單編號：<br><span class="fs-5 text-green-500">{{ orderId }}</span>
        </p>
        <div class="d-flex justify-content-center">
          <router-link to="/" custom v-slot="{ navigate }">
            <button @click="navigate" role="link"
              class="btn btn-lg btn-green-500 text-white">返回首頁</button>
          </router-link>
        </div>
      </template>
    </keep-alive>
  </div>
</template>

<script>
import StepOne from '@/components/forestage/CheckoutStep/StepOne.vue';
import StepTwo from '@/components/forestage/CheckoutStep/StepTwo.vue';
import StepThree from '@/components/forestage/CheckoutStep/StepThree.vue';

export default {
  data() {
    return {
      steps: ['確認購買商品', '填寫購買資訊', '確認訂單與付款', '完成購買'],
      currentStep: 0,
      orderId: '',
      canChange: true,
    };
  },
  components: {
    StepOne,
    StepTwo,
    StepThree,
  },
  methods: {
    goNext() {
      this.currentStep += 1;
    },
    getOrderId(id) {
      this.orderId = id;
    },
  },
  created() {
    this.currentStep = 0;
  },
};
</script>
