import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue';
import TestX from '../pages/TestX.vue';


const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },

  {
    name: 'testx',
    path: '/testx',
    component: TestX
  },

 
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
