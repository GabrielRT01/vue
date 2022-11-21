<script>
import ModalForm from './Blog/ModalForm.vue';

export default {
    name: "blogs",
    data() {
        return {
            blogs: [],
            id: -1,
        }
    },
    components: {
        ModalForm,
    },
    mounted() {
        this.show();
    },
    methods: {
        show() {
            axios.get('api/blog')
                .then(response => {
                    this.blogs = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        delete(id) {
            if (!confirm("¿Desea eliminar la entrada?")) return;

            axios.delete('api/blog/' + id)
                .then(response => {
                    this.blogs = response.data;
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    this.show();
                })
        },
        modalCerrado(val) {
            this.show();
        },
    }
}
</script>

<template>
    <div class="container-fluid mycontainer">
        <div class="row g-6">
            <div class="table-responsive text-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nº</th>
                            <th scope="col">Título</th>
                            <th scope="col">Contenido</th>
                            <th scope="col" colspan="2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blogs" :key="blog.id">
                            <td> {{ blog.id }}</td>
                            <td> {{ blog.title }}</td>
                            <td> {{ blog.content }}</td>
                            <td>
                                <button type="button" class="btn btn-warning"
                                    @click="this.id = blog.id; this.reload = true" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    Edit(M)
                                </button>
                            </td>
                            <td>
                                <router-link :to="'/form/' + blog.id" type="button" class="btn btn-warning">
                                    Editar
                                </router-link>
                            </td>
                            <td>
                                <a type="button" @click="this.delete(blog.id)" class="btn btn-danger">
                                    Borrar
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row g-2">
            <div class="col-6"></div>
            <div class="col-6"></div>
            <button type="button" class="btn btn-primary btn-lg btn-block" @click="this.id = -1;"
                data-bs-toggle="modal" data-bs-target="#exampleModal">
                Añadir entrada (Modal)
            </button>
            <router-link to="/form" type="button" class="btn btn-primary btn-lg btn-block">
                Añadir entrada
            </router-link>
        </div>

        <ModalForm v-bind:id="this.id" v-on:modalCerrado="modalCerrado"></ModalForm>
    </div>
</template>
