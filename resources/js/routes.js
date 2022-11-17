const Home = () => import('./components/Home.vue')
const Blog = () => import('./components/Blog.vue')
const Form = () => import('./components/Blog/Form.vue')
const NotFoundComponent = () => import('./components/NotFound.vue')

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
        name: 'form',
        path: '/form/:id?',
        component: Form,
    },
    {
        path: "/:catchAll(.*)", 
        component: NotFoundComponent
    }
]
