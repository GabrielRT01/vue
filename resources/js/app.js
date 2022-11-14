require('./bootstrap');
require('../sass/app.scss')

import { Vue } from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import { routes } from './routes.js';
import App from './components/App.vue';

//window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// router
//window.router = router;
//window.Fire = new Vue();

//Vue.component('mycomponent', require('./components/app.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes: routes,
})

const app = new Vue({
    el: '#app',
    router: router,
    render: h => (App)
});

export default app;
