import { createApp, h } from 'vue';

import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSweetalert2 from 'vue-sweetalert2';

import LoaderComponent from './components/LoaderComponent.vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(VueLoading, {
  opacity: 0.8,
}, {
  default: () => h(LoaderComponent),
});
app.use(VueSweetalert2, {
  reverseButtons: true,
  focusConfirm: false,
  confirmButtonText: '確認',
  cancelButtonText: '取消',
  timer: 3000,
});

app.mount('#app');
