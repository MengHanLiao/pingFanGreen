<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between mb-3">
      <h2>文章列表</h2>
      <button
        class="btn btn-primary"
        type="button"
        @click="openArticleModal(true)"
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
            <th>Tag</th>
            <th>是否公開</th>
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
            <tr v-for="article in articles" :key="article.id">
              <td>{{ article.title }}</td>
              <td>{{ article.author }}</td>
              <td>{{ dateChange(article.create_at) }}</td>
              <td>
                <span class="me-2"
                  v-for="(tag, index) in article.tags" :key="index+'article'">
                  # {{ tag }}
                </span>
              </td>
              <th>
                <span class="text-primary" v-if="article.isPublic">已公開</span>
                <span class="text-danger" v-else>未公開</span>
              </th>
              <td class="text-end">
                <div class="btn-group" role="group" aria-label="operateBtn">
                  <button class="btn btn-outline-primary" type="button"
                    @click="openArticleModal(false, article.id)">編輯</button>
                  <button class="btn btn-outline-danger" type="button"
                    @click="openDeleteModal(article.id)">刪除</button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <PaginationComponent
        :pagination="pagination"
        @change-page="getArticles"
      ></PaginationComponent>
    </div>
    <ArticleModal
      :is-new="isNew"
      :article-id="articleId"
      @update-article="updateArticle"
      ref="articleModal"
    ></ArticleModal>
    <deleteConfirm
      ref="deleteModal"
      :delete-item="tempArticle"
      @emit-delete="deleteArticle"
    ></deleteConfirm>
  </div>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import DeleteConfirm from '@/components/backstage/DeleteConfirm.vue';
import ArticleModal from '@/components/backstage/ArticleModal.vue';
import SwalFire from '@/components/SwalFire.vue';

export default {
  data() {
    return {
      articles: [],
      pagination: {},
      tempArticle: {},
      articleId: '',
      isNew: true,
    };
  },
  mixins: [SwalFire],
  components: {
    ArticleModal,
    DeleteConfirm,
    PaginationComponent,
  },
  methods: {
    openArticleModal(isNew, id = '') {
      this.isNew = isNew;
      this.articleId = id;
      this.$refs.articleModal.openModal();
    },
    openDeleteModal(article) {
      this.tempArticle = { ...article };
      const controlDeleteModal = this.$refs.deleteModal;
      controlDeleteModal.openModal();
    },
    dateChange(timestamp) {
      const dateAndTime = new Date(timestamp * 1000)
        .toISOString()
        .split('T');
      return dateAndTime.shift();
    },
    getArticles(target = 1) {
      this.$http.get(`${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${target}`).then((res) => {
        this.articles = res.data.articles;
        this.pagination = res.data.pagination;
      }).catch((err) => {
        this.failFire(err.response.data.message);
      });
    },
    updateArticle(tempArticle) {
      let method = 'post';
      let url = `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/article`;
      if (!this.isNew) {
        method = 'put';
        url = `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.articleId}`;
      }
      this.$http[method](url, { data: tempArticle }).then((res) => {
        this.getArticles();
        this.successFire(res.data.message);
        this.$refs.articleModal.closeModal();
      }).catch((err) => {
        this.failFire(err.response.data.message);
      });
    },
    deleteArticle() {
      this.$http
        .delete(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`,
        ).then((res) => {
          this.getArticles();
          const controlDeleteModal = this.$refs.deleteModal;
          controlDeleteModal.closeModal();
          this.successFire(res.data.message);
        }).catch((err) => {
          this.failFire(err.response.data.message);
        });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
