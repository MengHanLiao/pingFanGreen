<script>
export default {
  methods: {
    successFire(message) {
      this.$swal({
        icon: 'success',
        title: message,
      });
    },
    warningFire(message) {
      this.$swal({
        icon: 'warning',
        title: message,
      });
    },
    failFire(message) {
      this.$swal({
        icon: 'error',
        title: message,
      });
    },
  },
};
</script>
