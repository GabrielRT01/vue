<script>
export default {
    name: "blog",
    data() {
        return {
            blog: {
                title: "",
                content: ""
            },
            alert: 
                '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
                    'Por favor, rellene los campos.' + 
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div>',
        }
    },
    methods: {
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
        }
    }
}
</script>

<template>
    <div class="container-fluid mycontainer">
        <div class="row g-2">
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
                                <input class="form-control form-control-lg" id="title" type="text" placeholder="..." maxlength="100">
                            </td>
                            <td>
                                <input class="form-control form-control-lg" id="content" type="text" placeholder="..." maxlength="255">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="alerta"> </div>
            <button @click="create()" class="btn btn-primary btn-lg btn-block"> Añadir publicación </button>
        </div>
    </div>
</template>
