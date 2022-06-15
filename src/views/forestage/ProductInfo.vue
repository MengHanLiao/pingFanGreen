<template>
  <div class="container pt-7 pt-md-8 pb-9 pb-md-12">
    <h2 class="text-center mb-7 mb-md-7">商品資訊</h2>
    <div class="row">
      <div class="col-md-3 d-none d-md-block">
        <h5>商品分類</h5>
        <ProductSidenav />
      </div>
      <div class="col-md-9">
        <div class="row row-cols-1 row-cols-md-2 mb-5">
          <div class="col mb-3">
            <img class="object-fit-cover" :src="product.imageUrl"
              alt="main" style="height: 500px"/>
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
            <label class="d-flex align-items-center mb-3">
              <span class="d-block w-50">購買數量：</span>
              <select class="form-select" name="productnum" v-model="qty">
                <option :value="n" v-for="n in 10" :key="n + '98765'">
                  {{ n }}
                </option>
              </select>
            </label>
            <button class="btn btn-green-500 text-white w-100 mb-3"
              :class="{ disabled: product.id === loadItem }"
              @click="addToCart(product.id, qty)">
              <div
                class="spinner-grow me-2"
                role="status"
                :class="{ 'd-none': product.id !== loadItem }"
              ></div>
              <img
                src="@/assets/images/icons/shopping_cart_black.svg"
                class="me-2"
                style="width: 1.25rem"
                alt="cart"
                :class="{ 'd-none': product.id === loadItem }"
              />加入購物車
            </button>
            <button class="btn btn-outline-dark w-100 mb-3" @click="toggleFavorite(product.id)">
              <template v-if="favorite.includes(product.id)">
                <img class="object-fit-cover me-2" style="width: 1.25rem"
                  src="@/assets/images/icons/favorite_black.svg"
                  alt="favorite_fill"
                />已加入收藏
              </template>
              <template v-else>
                <img class="object-fit-cover me-2" style="width: 1.25rem"
                  src="@/assets/images/icons/favorite_border_black.svg"
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
            <h6>收到多肉後的基礎照顧：</h6>
            <ul>
              <li>收到植物後請立刻種下，只要是移盆，根系與葉面難免會受到損傷，隔一天之後再澆水，可以預防造成根系受傷、染菌。</li>
              <li>不論是喜歡哪種季節的多肉，換環境都會有適應期，適量光照與足夠濕度的介質是陪伴它們度過適應期最棒的夥伴。</li>
              <li>雖然部分品種的多肉喜歡光照，在換盆的適應期中，還是得從少量光照開始，請勿讓陽光長時間曝曬。</li>
            </ul>
          </div>
          <div class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab">
            <ul>
              <li class="mb-3">
                由於植物為活體，因此每一株不同的植物不可能會跟照片完全相同，我們會盡力平均出貨的植株大小。
              </li>
              <li class="mb-3">
                若收到的植株兩周內發現有蟲蟲出沒，請跟我們聯絡，平方綠會協助處理。
              </li>
              <li class="mb-3">植物是活體商品，不適用於7天鑑賞期的服務及退換貨服務。</li>
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
              <li class="mb-3">商品內已包含運費，請注意，金額不滿 600 元不出貨。</li>
              <li class="mb-3">
                收到貨品後，請盡速拆箱並錄影，確保自身權益，若開箱時發現植株異常(死亡、染菌、植株內容與訂單不符等)，請盡速通知。
              </li>
              <li class="mb-3">
                包裝會以植物體完好為優先，但是送貨過程依然是未知，因此掉葉狀況屬於正常，掉落的葉子請勿扔掉，可以用來葉夫多肉寶寶。
              </li>
              <li class="mb-3">
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
import ProductSidenav from '@/components/forestage/ProductSidenav.vue';
import ToggleFavorite from '@/mixins/ToggleFavorite';
import AddToCart from '@/mixins/AddToCart';
import SwalFire from '@/components/SwalFire.vue';

export default {
  data() {
    return {
      product: {},
      qty: 1,
    };
  },
  props: ['id'],
  mixins: [SwalFire, ToggleFavorite, AddToCart],
  components: {
    ProductSidenav,
  },
  methods: {
    getProduct() {
      const loader = this.$loading.show();
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASEURL}/api/${process.env.VUE_APP_PATH}/product/${this.id}`,
        )
        .then((res) => {
          this.product = res.data.product;
          loader.hide();
        })
        .catch((err) => {
          console.dir(err);
          loader.hide();
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
