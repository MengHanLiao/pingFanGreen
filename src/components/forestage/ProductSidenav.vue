<template>
  <ul class="nav flex-column">
    <li class="nav-item" v-for="(category,index) in categories" :key="index+'dasdf'">
      <router-link :to="`/products/${category}`" @click="hideOffcanvas"
        class="nav-link ps-0">{{ category }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  props: {
    canHide: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getCategory() {
      this.$http.get(
        `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/products/all`,
      ).then((res) => {
        const products = [...res.data.products];
        products.forEach((item) => {
          const isExist = this.categories.some((category) => category === item.category);
          if (!isExist) {
            this.categories.push(item.category);
          }
        });
      }).catch((err) => {
        console.dir(err);
      });
    },
    hideOffcanvas() {
      if (this.canHide) {
        this.$emit('emit-hide');
      }
    },
  },
  mounted() {
    this.getCategory();
  },
};
</script>
