<template>
  <div>
    <FrontNavbar></FrontNavbar>
    <router-view></router-view>
    <FrontFooter></FrontFooter>
  </div>
</template>

<script>
import FrontNavbar from '../../components/forestage/FrontNavbar.vue';
import FrontFooter from '../../components/forestage/FrontFooter.vue';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
};
</script>
