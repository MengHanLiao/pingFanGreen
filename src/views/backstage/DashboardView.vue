<template>
  <div v-if="isSignup">
    <DashBoardNavbar />
    <Router-View />
  </div>
</template>

<script>
import DashBoardNavbar from '@/components/backstage/DashBoardNavbar.vue';

export default {
  data() {
    return {
      isSignup: false,
    };
  },
  components: {
    DashBoardNavbar,
  },
  methods: {
    checkSignup() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)pfgToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;
        this.$http
          .post(`${process.env.VUE_APP_API_BASEURL}/api/user/check`)
          .then(() => {
            this.isSignup = true;
          })
          .catch((err) => {
            console.dir(err);
          });
      } else {
        this.$router.push('/');
      }
    },
  },
  created() {
    this.checkSignup();
  },
};
</script>
