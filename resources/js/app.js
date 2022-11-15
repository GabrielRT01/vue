import './bootstrap';
import '../sass/app.scss';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import { createApp } from 'vue';
import { useRouter } from 'vue-router';
import { routes } from './routes.js';

import App from './components/Home.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

const router = useRouter();

const app = createApp(App).mount('#app');
/*
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes: routes,
})
*/

/*const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});*/



