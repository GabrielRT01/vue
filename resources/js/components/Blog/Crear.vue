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
    methods: {
        crear() {
            this.blog.title = document.getElementById("title").value;
            this.blog.content = document.getElementById("content").value;

            axios.post(`/api/blog`, this.blog)
                .then(response => {
                    this.$router.push({
                        name: 'blog'
                    });
                    console.log(response)
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
            <div class="col-12">
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
                                <textarea name="title" id="title" cols="30" rows="10"></textarea>
                            </td>
                            <td>
                                <textarea name="content" id="content" cols="30" rows="10"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button @click="crear()" class="btn btn-primary btn-lg btn-block"> Crear </button>
        </div>
    </div>
</template>
