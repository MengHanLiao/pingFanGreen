<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a class="page-link"
          @click.prevent="changePage(pagination.current_page-1)"
          @keyup.prevent="changePage(pagination.current_page-1)"
          >上一頁</a>
      </li>
      <li class="page-item" :class="{ active: pagination.current_page === n}"
        v-for="n in pagination.total_pages" :key="n+'dadfsd'">
        <a class="page-link"
          @click.prevent="changePage(n)"
          @keyup.prevent="changePage(n)">
          {{ n }}</a>
      </li>
      <li class="page-item" :class="{disabled: !pagination.has_next}">
        <a class="page-link"
          @click.prevent="changePage(pagination.current_page+1)"
          @keyup.prevent="changePage(pagination.current_page+1)"
          >下一頁</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    changePage(target) {
      this.$emit('change-page', target);
    },
  },
};
</script>
