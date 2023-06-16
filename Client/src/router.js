import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
// import Anime from './components/Anime.vue'
// import Cars from './components/Cars.vue'
// import Tech from './components/Tech.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/anime', component: import('./components/Anime.vue') },
  { path: '/cars', component: import('./components/Cars.vue') },
  { path: '/tech', component: import('./components/Tech.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
