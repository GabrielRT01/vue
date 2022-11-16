<script setup>
    import axios from 'axios';
    import App from './App.vue';
</script>

<script>
export default {
    name: "blog",
    data() {
        return {
            blog: []
        }
    },
    mounted() {
        this.showBlogs()
    },
    methods: {
        showBlogs() {
            axios.get('api/blog')
                .then(response => {
                    this.blogs = response.data;
                })
                .catch(error => {
                    this.blogs = []
                })
        },
        borrarBlog(id) {
            axios.delete('api/blog?id=' + id)
                .then(response => {
                    this.blogs = response.data;
                    console.log(response.data)
                })
                .catch(error => {
                    this.blogs = []
                })
        }
    }
}
</script>

<template>
    <App></App>
    <div class="container">
        <div class="row g-2">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Título</th>
                        <th scope="col">Contenido</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {{ blog.id }}</td>
                        <td> {{ blog.title }}</td>
                        <td> {{ blog.content }}</td>
                        <td>
                            <a type="button" @click="editarBlog(blog.id)" class="btn btn-warning"> Terminar </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
