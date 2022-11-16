<script setup>
import axios from 'axios';
import App from './App.vue';
</script>

<script>
export default {
    name: "blogs",
    data() {
        return {
            blogs: []
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
        async borrarBlog(id) {
            if (!confirm("¿Desea eliminar la entrada?")) return;
            await axios.delete('api/blog/' + id)
                .then(response => {
                    this.blogs = response.data;
                    console.log(response.data)
                })
                .catch(error => {
                    this.blogs = []
                })
        },
        editar(id) {
            this.$router.push({ name: "editar", params: { id: id } })
        },
        crear() {
            this.$router.push({ name: "nueva" })
        },
        refrescar() {
            this.$router.push({ name: "blog" })
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row g-2">
            <div class="col-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nº</th>
                            <th scope="col">Título</th>
                            <th scope="col">Contenido</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blogs" :key="blog.id">
                            <td> {{ blog.id }}</td>
                            <td> {{ blog.title }}</td>
                            <td> {{ blog.content }}</td>
                            <td>
                                <!--<router-link :to='{ name: "editar", params: { id: blog.id } }' class="btn btn-info">Editar
                            </router-link>-->
                                <a type="button" @click="editar(blog.id)" class="btn btn-warning"> Editar </a>
                                &nbsp;
                                <a type="button" @click="borrarBlog(blog.id)" class="btn btn-danger"> Borrar </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row g-2">
            <button @click="crear()" class="btn btn-primary btn-lg btn-block"> Añadir entrada</button>
        </div>
    </div>
</template>
