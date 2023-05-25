import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {MotionPlugin} from '@vueuse/motion'

const app = createApp(App);
app.use(router);
app.use(MotionPlugin);
app.mount('#app');

/* 
todo: Tune up the performance of the app so it doesn't take too much time delay in load
todo:  Make a Home page parallax 
todo: find ideas for landing page
*/