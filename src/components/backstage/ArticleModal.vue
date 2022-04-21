<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ isNew ? "新增文章" : "編輯文章" }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="article_title">標題</label>
            <input
              type="text"
              class="form-control"
              id="article_title"
              v-model="tempArticle.title"
              placeholder="請輸入標題"
            />
          </div>
          <div class="mb-3">
            <label for="article_author">作者</label>
            <input
              type="text"
              class="form-control"
              id="article_author"
              v-model="tempArticle.author"
              placeholder="請輸入作者姓名"
            />
          </div>
          <div class="mb-3">
            <label for="create_date">建立日期</label>
            <input
              type="date"
              class="form-control"
              v-model="createDate"
              id="create_date"
            />
          </div>
          <div class="mb-3">
            <label for="article_img">文章主圖</label>
            <input
              type="text"
              class="form-control"
              id="article_img"
              v-model="tempArticle.image"
              placeholder="請輸入圖片網址"
            />
          </div>
          <div class="mb-3">
            <label for="article_tags">標籤</label>
            <div class="row">
              <div class="col-6 col-lg-4"
                v-for="(tag,index) in tempArticle.tags" :key="index+'asdf'">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="請輸入標籤"
                    v-model="tempArticle.tags[index]">
                  <button class="btn btn-outline-danger"
                    @click="tempArticle.tags.splice(index, 1)">X</button>
                </div>
              </div>
              <div class="col-3">
                <button class="btn btn-outline-primary w-100" type="button"
                  v-if="!tempArticle.tags.length || tempArticle.tags[tempArticle.tags.length-1]"
                  @click="tempArticle.tags.push('')">新增</button>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="article_description" class="form-label">文章描述</label>
            <textarea
              type="text"
              class="form-control"
              id="article_description"
              v-model="tempArticle.description"
              placeholder="請輸入文章描述"
            ></textarea>
          </div>
          <div class="mb-3">
            <span class="mb-1">文章內容</span>
            <ckeditor :editor="editor" v-model="tempArticle.content"></ckeditor>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="tempArticle.isPublic"
                id="is_public"
              />
              <label class="form-check-label" for="is_public">
                是否發表
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateArticle"
          >
            {{ isNew ? "新增" : "更新" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalControl from '@/methods/modalControl';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  props: {
    articleId: {
      type: String,
    },
    isNew: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      tempArticle: {
        isPublic: false,
        tags: [],
      },
      createDate: '',
      editor: ClassicEditor,
    };
  },
  mixins: [modalControl],
  watch: {
    createDate() {
      this.tempArticle.create_at = Math.floor(new Date(this.createDate) / 1000);
    },
    articleId() {
      if (this.articleId) {
        const loader = this.$loading.show();
        this.$http.get(`${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.articleId}`).then((res) => {
          this.tempArticle = res.data.article;
          this.createDate = this.dateChange(this.tempArticle.create_at);
          loader.hide();
        }).catch((err) => {
          console.dir(err);
          loader.hide();
        });
      } else {
        const newArticle = {
          isPublic: false,
          tags: [],
        };
        this.tempArticle = { ...newArticle };
      }
    },
  },
  methods: {
    updateArticle() {
      this.$emit('update-article', this.tempArticle);
    },
    dateChange(timestamp) {
      const dateAndTime = new Date(timestamp * 1000)
        .toISOString()
        .split('T');
      return dateAndTime.shift();
    },
  },
};
</script>
