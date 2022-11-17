const Home = () => import('./components/Home.vue')
const Blog = () => import('./components/Blog.vue')
const Crear = () => import('./components/Blog/Crear.vue')
const Editar = () => import('./components/Blog/Editar.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'blog',
        path: '/blog',
        component: Blog,
    },
    {
        name: 'nueva',
        path: '/new',
        component: Crear,
    },
    {
        name: 'editar',
        path: '/edit/:id',
        component: Editar,
    }
]
