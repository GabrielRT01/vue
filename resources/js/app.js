import './bootstrap';
import '../sass/app.scss';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import { createApp } from 'vue';
import { router } from './router.js';

import App from './components/Home.vue';
import App2 from './components/Blog.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

const app = createApp(App2)
            .use(router)
            .mount('#app');
