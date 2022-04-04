<template>
  <div>
    <FrontNavbar></FrontNavbar>
    <div class="container text-center pt-7 pt-md-8 pb-12">
      <h2 class="mb-7 mb-md-7">404</h2>
      <p>您想找的頁面不存在</p>
      <p class="mb-7">請重新確認搜尋的項目或是回到首頁</p>
      <router-link to="/" class="btn btn-outline-dark mb-9">回到首頁</router-link>
      <img
        class="object-fit-cover mb-7"
        style="height: 300px"
        src="../assets/images/mutiple404.jpg"
        alt="banner"
      />
    </div>
    <FrontFooter></FrontFooter>
  </div>
</template>

<script>
import FrontNavbar from '../components/forestage/FrontNavbar.vue';
import FrontFooter from '../components/forestage/FrontFooter.vue';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
};
</script>
