import './bootstrap';
import '../css/app.css';

import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue';
import { router } from './router.js';

import App from './components/App.vue';

const app = createApp(App)
            .use(router)
            .mount('#app');
