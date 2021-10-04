import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import CheckOut from '@/views/CheckOut.vue';
import Activate from '@/views/Activate.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
  },
  {
    path: '/activate',
    name: 'Activate',
    component: Activate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
