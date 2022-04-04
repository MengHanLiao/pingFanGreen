<template>
  <ul class="nav flex-column">
    <li class="nav-item" v-for="(category,index) in categories" :key="index+'dasdf'">
      <router-link :to="`/products/${category}`" class="nav-link">{{ category }}</router-link>
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
  },
  mounted() {
    this.getCategory();
  },
};
</script>
