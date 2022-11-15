const Home = () => import('./components/Home.vue')
const Crear = () => import('./components/Blog/Crear.vue')
const Editar = () => import('./components/Blog/Editar.vue')
const Leer = () => import('./components/Blog/Leer.vue')

export const routes = [
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
