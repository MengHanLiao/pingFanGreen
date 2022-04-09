<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" v-for="item in routeList" :key="item.name">
      <router-link :to="item.link">{{ item.name }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      routeList: [{
        name: '全部商品',
        link: '/products',
      }],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      if (this.routeList.length !== 1) {
        this.routeList.pop();
      }
      this.routeList.push({
        name: this.$route.params.category,
        link: this.$route.fullPath,
      });
    },
  },
};
</script>
