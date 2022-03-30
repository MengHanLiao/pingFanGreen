<template>
  <div class="container pt-8 pb-12">
    <h2 class="text-center mb-7">商品專區</h2>
    <div class="row">
      <div class="col">
        <h5>商品分類</h5>
        <ul class="nav flex-column">
          <li class="nav-item" v-for="(category,index) in categories" :key="index+'dasdf'">
            <router-link to="/product" class="nav-link">{{ category }}</router-link>
          </li>
        </ul>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      products: [],
      pagination: [],
    };
  },
  methods: {
    getData() {
      this.$http.get(
        `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/products`,
      ).then((res) => {
        this.products = res.data.products;
        this.pagination = res.data.pagination;
        this.findCategory();
      }).catch((err) => {
        console.dir(err);
      });
    },
    findCategory() {
      this.products.forEach((item) => {
        const isExist = this.categories.some((category) => category === item.category);
        if (!isExist) {
          this.categories.push(item.category);
        }
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
