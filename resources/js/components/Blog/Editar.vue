<script setup>
import axios from 'axios';
import App from './../App.vue';
</script>

<script>
export default {
    name: "blog",
    data() {
        return {
            blog: {
                title: "",
                content: ""
            }
        }
    },
    created() {
        this.mostrarBlog();
    },
    methods: {
         mostrarBlog() {
                console.log(this.$route)  
             //axios.get(`/api/blog/${this.$route.params.id}`)

             axios.get('/api/blog/' + this.$route.params.id)
                .then(response => {
                    const { title, content } = response.data
                    this.blog.title = title; 
                    this.blog.content = content;
                })
                .catch(error=>{
                    console.log(error)
                })
        }, 
        async update() {
            this.blog.title = document.getElementById("title").value;
            this.blog.content = document.getElementById("content").value;

            await axios.put(`/api/blog/${this.$route.params.id}`, this.blog)
                .then(response => {
                    this.$router.push({
                        name: 'blog'
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row g-2">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Contenido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <textarea name="title" id="title" cols="30" rows="10" v-model="blog.title"></textarea>
                        </td>
                        <td>
                            <textarea name="content" id="content" cols="30" rows="10" v-model="blog.content"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button @click="update()" class="btn btn-warning btn-lg btn-block"> Terminar </button>
        </div>
    </div>
</template>
