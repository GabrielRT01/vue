<script>
export default {
    name: "blogs",
    data() {
        return {
            blogs: []
        }
    },
    mounted() {
        this.showBlogs();
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
            if (!confirm("¿Desea eliminar la entrada?")) return;

            axios.delete('api/blog/' + id)
                .then(response => {
                    this.blogs = response.data;
                })
                .catch(error => {
                    this.blogs = [];
                })
                .finally(()=>{
                    this.showBlogs();
                })
        },
        editar(id) {
            this.$router.push({ name: "editar", params: { id: id } })
        },
        crear() {
            this.$router.push({ name: "nueva" })
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row g-2">
            <div class="table-responsive text-center">
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
