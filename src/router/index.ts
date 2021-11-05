import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import CheckOut from '@/views/CheckOut.vue';
import Activate from '@/views/Activate.vue';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import AddProduct from '@/views/AddProduct.vue';
import AddUser from '@/views/AddUser.vue';

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
  {
    path: '/login',
    name: 'Logig',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/add/product',
    name: 'Add product',
    component: AddProduct,
  },
  {
    path: '/add/user',
    name: 'Add user',
    component: AddUser,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
