import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/forestage/frontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/forestage/HomeView.vue'),
      },
      {
        path: 'product',
        component: () => import('../views/forestage/ProductView.vue'),
      },
      {
        path: 'article',
        component: () => import('../views/forestage/ArticleView.vue'),
      },
      {
        path: 'question',
        component: () => import('../views/forestage/QuestionView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/forestage/CartView.vue'),
      },
      {
        path: 'favorite',
        component: () => import('../views/forestage/FavoriteView.vue'),
      },
      {
        path: 'customization',
        component: () => import('../views/forestage/CustomizationView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/backstage/DashboardView.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/backstage/AdminHome.vue'),
      },
      {
        path: 'product',
        component: () => import('../views/backstage/AdminProduct.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/backstage/AdminOrder.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/backstage/AdminCoupon.vue'),
      },
      {
        path: 'article',
        component: () => import('../views/backstage/AdminArticle.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
