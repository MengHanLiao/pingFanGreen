<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between mb-3">
      <h2>文章列表</h2>
      <button
        class="btn btn-primary"
        type="button"
        @click="openArticleModal"
      >
        新增文章
      </button>
    </div>
    <div class="table-responsive">
      <table class="table align-middle mb-4">
        <thead>
          <tr>
            <th>標題</th>
            <th>作者</th>
            <th>發布時間</th>
            <th>是否公開</th>
            <th>編輯</th>
            <th class="text-end">操作</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="articles.length === 0">
            <tr>
              <td colspan="6">目前沒有文章</td>
            </tr>
          </template>
          <template v-else>
            <tr></tr>
          </template>
        </tbody>
      </table>
      <!-- <PaginationComponent
        :pagination="pagination"
        @change-page="getOrders"></PaginationComponent> -->
    </div>
    <ArticleModal ref="articleModal"></ArticleModal>
  </div>
</template>

<script>
// import PaginationComponent from '../../components/PaginationComponent.vue';
import ArticleModal from '../../components/backstage/ArticleModal.vue';

export default {
  data() {
    return {
      articles: [],
    };
  },
  components: {
    // PaginationComponent,
    ArticleModal,
  },
  methods: {
    openArticleModal() {
      this.$refs.articleModal.openModal();
    },
  },
};
</script>
