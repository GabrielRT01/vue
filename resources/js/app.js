import './bootstrap';
import '../css/app.css';

import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue';
import { createStore } from 'vuex';
import { router } from './router.js';

import App from './components/App.vue';

/* Example -- Not implemented yet */
const store = createStore({
    state() {
        return {
            count: 0,
            color: "",
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        changeColor(state, { color }) {
            localStorage.setItem('color', color);
        }
    }
})

const app = createApp(App)
    .use(router)
    .use(store)
    .mount('#app');