import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
// import Anime from './components/Anime.vue'
// import Cars from './components/Cars.vue'
// import Tech from './components/Tech.vue'
const Anime = () => import('./components/Anime.vue');
const Cars = () => import('./components/Cars.vue');
const Tech = () => import('./components/Tech.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/anime', component: Anime },
  { path: '/cars', component: Cars },
  { path: '/tech', component: Tech },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
