import { createApp, h } from 'vue';

import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSweetalert2 from 'vue-sweetalert2';
import CKEditor from '@ckeditor/ckeditor5-vue';
import {
  Form, Field, ErrorMessage, configure, defineRule,
} from 'vee-validate';
import {
  required, email,
} from '@vee-validate/rules';
import { localize, loadLocaleFromURL } from '@vee-validate/i18n';
import LoaderComponent from './components/LoaderComponent.vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(CKEditor);
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
  showCloseButton: true,
  timer: 3000,
});

app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
defineRule('required', required);
defineRule('email', email);

loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json');
configure({
  generateMessage: localize('zh_TW'),
});

app.mount('#app');
