import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('./components/App.vue')
const Crear = () => import('./components/Blog/Crear.vue')
const Editar = () => import('./components/Blog/Editar.vue')
const Leer = () => import('./components/Blog/Leer.vue')

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'crearEntrada',
        path: '/new',
        component: Crear
    },
    {
        name: 'editarEntrada',
        path: '/edit/:id',
        component: Editar
    },
    {
        name: 'verEntrada',
        path: '/watch',
        component: Leer
    },
]
export default routes;

/*
export default new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
    routes: [
        ...welcome,
        ...home,
    ],
});
*/
