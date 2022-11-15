import './bootstrap';
import '../sass/app.scss';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { createApp } from 'vue';
import { useRouter } from 'vue-router';
import { routes } from './routes.js';

import App from './components/App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

const router = useRouter();
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

createApp(App)
    .mount('#app')

