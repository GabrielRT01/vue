<script>
export default {
    name: "blog",
    data() {
        return {
            blog: {
                title: "",
                content: "",
            },
            alert:
                '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
                'Por favor, rellene los campos.' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div>',
        }
    },
    created() {
        this.show();
    },
    props: {
        id: Int8Array,
        reload: Boolean
    },
    methods: {
        show() {
            if (this.id < 0) {
                return;
            }

            axios.get('/api/blog/' + this.id)
                .then(response => {
                    const { title, content } = response.data
                    this.blog.title = title;
                    this.blog.content = content;
                })
                .catch(error => {
                    console.log(error)
                })
        },
        update() {
            this.blog.title = document.getElementById("title").value;
            this.blog.content = document.getElementById("content").value;

            if (!this.blog.title || !this.blog.content) {
                document.getElementById("alerta").innerHTML = this.alert;
                return;
            }

            axios.put(`/api/blog/${this.id}`, this.blog)
                .then(response => {
                    this.$router.push({
                        name: 'blog'
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        },
        create() {
            this.blog.title = document.getElementById("title").value;
            this.blog.content = document.getElementById("content").value;

            if (!this.blog.title || !this.blog.content) {
                document.getElementById("alerta").innerHTML = this.alert;
                return;
            }

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
        },
        cerrarModal() {
            this.$emit("modalCerrado", true);
        }
    },
    watch: {
        reload: {
            // the callback will be called immediately after the start of the observation
            immediate: true,
            handler (val, oldVal) {
                this.show();
            }
        }
    }
}
</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="container-fluid mycontainer text-center">
            <div class="row g-2">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"> Formulario </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="cerrarModal()"></button>
                        </div>
                        <div class="modal-body">
                            <div class="table-responsive">
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
                                                <input class="form-control form-control-lg" id="title" type="text"
                                                    placeholder="..." maxlength="100" v-model="blog.title">
                                            </td>
                                            <td>
                                                <input class="form-control form-control-lg" id="content" type="text"
                                                    placeholder="..." maxlength="255" v-model="blog.content">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="alerta"> </div>
                            <button v-if="this.id > -1" @click="update()" class="btn btn-warning btn-lg btn-block">
                                Terminar </button>
                            <button v-else @click="create()" class="btn btn-primary btn-lg btn-block"> Añadir
                                publicación </button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cerrarModal()"> Close </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
