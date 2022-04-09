<template>
  <div class="container pt-7 pt-md-8 pb-9 pb-md-12">
    <h2 class="text-center mb-7 mb-md-7">商品資訊</h2>
    <div class="row">
      <div class="col-md-3 d-none d-md-block">
        <h5>商品分類</h5>
        <ProductSidenav></ProductSidenav>
      </div>
      <div class="col-md-9">
        <div class="row row-cols-1 row-cols-md-2 mb-5">
          <div class="col mb-3">
            <img :src="product.imageUrl" alt="main" />
          </div>
          <div class="col">
            <h3 class="fs-4 mb-4">{{ product.title }}</h3>
            <p>{{ product.intro }}</p>
            <p>{{ product.gift }}</p>
            <p class="mb-5">尺寸： {{ product.size }}</p>
            <p class="fs-4 text-primary text-end">
              <del class="fs-sm text-gray me-2">NT$ {{ product.origin_price }}</del>
              NT$ {{ product.price }}
            </p>
            <label class="d-flex mb-3">
              <select class="form-select" name="productnum" v-model="qty">
                <option value="請選擇數量" selected="selected">
                  請選擇數量
                </option>
                <option :value="n" v-for="n in 10" :key="n + '98765'">
                  {{ n }}
                </option>
              </select>
            </label>
            <button class="btn btn-green-500 text-white w-100 mb-3" @click="addToCart(product.id)">
              <img
                src="../../assets/images/icons/shopping_cart_black.svg"
                class="me-2"
                style="width: 1.25rem"
                alt="cart"
              />加入購物車
            </button>
            <button class="btn btn-outline-dark w-100 mb-3" @click="toggleFavorite(product.id)">
              <template v-if="favorite.includes(product.id)">
                <img class="object-fit-cover me-2" style="width: 1.25rem"
                  src="../../assets/images/icons/favorite_black.svg"
                  alt="favorite_fill"
                />已加入收藏
              </template>
              <template v-else>
                <img class="object-fit-cover me-2" style="width: 1.25rem"
                  src="../../assets/images/icons/favorite_border_black.svg"
                  alt="favorite_border"
                />我的最愛
              </template>
            </button>
          </div>
        </div>
        <nav class="mb-3">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active fs-5"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
            >商品介紹</button>
            <button
              class="nav-link fs-5"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
            >售後服務</button>
            <button
              class="nav-link fs-5"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
            >運送與包裝</button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab">
            <p class="mb-5">名稱： {{ product.title }}</p>
            <p class="mb-5">內容：{{ product.content }}</p>
            <p class="mb-5"><span class="d-block">商品描述： </span>{{ product.description }}</p>
          </div>
          <div class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab">
            <ul>
              <li>
                由於植物為活體，因此每一株不同的植物不可能會跟照片完全相同，我們會盡力平均出貨的植株大小。
              </li>
              <li>
                若收到的植株兩周內發現有蟲蟲出沒，請跟我們聯絡，平方綠會協助處理。
              </li>
              <li>植物是活體商品，不適用於7天鑑賞期的服務及退換貨服務。</li>
              <li>
                有任何問題歡迎與我們聯繫，理性的溝通才能共創美好的購物體驗，希望給您最好的售後服務。
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab">
            <ul>
              <li>商品內已包含運費，請注意，金額不滿 600 元不出貨。</li>
              <li>
                收到貨品後，請盡速拆箱並錄影，確保自身權益，若開箱時發現植株異常(死亡、染菌、植株內容與訂單不符等)，請盡速通知。
              </li>
              <li>
                包裝會以植物體完好為優先，但是送貨過程依然是未知，因此掉葉狀況屬於正常，掉落的葉子請勿扔掉，可以用來葉夫多肉寶寶。
              </li>
              <li>
                商品出貨時會寄送通知給您，請密切注意收貨時間，避免植物在箱中悶太長時間，植體死亡。
              </li>
              <li>
                一律採取貨運，一般情況下，隔日會到達。若從到貨時間起算，延遲收穫時間超過
                4 天，植體死亡則不補寄。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSidenav from '../../components/forestage/ProductSidenav.vue';
import ToggleFavorite from '../../components/forestage/ProductMixin/ToggleFavorite.vue';
import SwalFire from '../../components/forestage/SwalFire.vue';

export default {
  data() {
    return {
      product: {},
      qty: 1,
    };
  },
  props: ['id'],
  mixins: [SwalFire, ToggleFavorite],
  components: {
    ProductSidenav,
  },
  methods: {
    getProduct() {
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/product/${this.id}`,
        )
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    addToCart(id) {
      this.loadItem = id;
      this.$http
        .post(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/cart`,
          {
            data: {
              product_id: id,
              qty: this.qty,
            },
          },
        )
        .then((res) => {
          this.loadItem = '';
          this.successFire(res.data.message);
        })
        .catch((err) => {
          this.loadItem = '';
          this.failFire(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
