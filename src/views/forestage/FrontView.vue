<template>
  <div>
    <FrontNavbar />
    <Router-View />
    <FrontFooter />
  </div>
</template>

<script>
import FrontNavbar from '@/components/forestage/FrontNavbar.vue';
import FrontFooter from '@/components/forestage/FrontFooter.vue';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
};
</script>
