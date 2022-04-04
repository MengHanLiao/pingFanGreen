<template>
  <div class="bg-green-50">
    <div class="container d-flex flex-column flex-md-row justify-content-between py-4">
      <div class="d-flex flex-md-column justify-content-between justify-content-md-start">
        <router-link to="/" class="d-flex align-items-center mb-2">
          <img
            class="me-1"
            src="../../assets/images/icons/logo.png"
            alt="logo.png"
            style="width: 36px"
          />
          <span class="fs-2 d-flex flex-column logo-font">平方綠</span>
        </router-link>
        <router-link to="/login" custom v-slot="{ navigate }">
          <button @click="navigate" role="link" class="btn btn-outline-dark border-2">登入後台</button>
        </router-link>
      </div>
      <div class="text-start text-md-end">
        <p>
          平方綠僅供個人作品使用，不提供轉載、引用及商業用途<br>
          部分圖片來源： <a href="https://unsplash.com/">Unsplash</a>、<a href="">Pexels</a> ；
          Icons 來源： <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Flaticon</a><br>
          Copyrights © 2022 平方綠
        </p>
        <div>
          <a class="d-inline-block github replace-text me-2" href="https://github.com/MengHanLiao?tab=repositories">github</a>
          <a class="d-inline-block codepen replace-text" href="https://codepen.io/your-work/?item_type=collection&grid_type=grid">codepen</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.github{
  width: 32px;
  height: 32px;
  background-image: url('../../assets/images/icons/github.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.codepen{
  width: 32px;
  height: 32px;
  background-image: url('../../assets/images/icons/codepen.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
