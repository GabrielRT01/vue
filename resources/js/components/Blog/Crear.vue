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

            if (!this.blog.title || !this.blog.content) {
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
    <div class="container">
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
            <button @click="crear()" class="btn btn-primary btn-lg btn-block"> Crear </button>
        </div>
    </div>
</template>
