import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/forestage/frontView.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/backstage/DashboardView.vue'),
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
