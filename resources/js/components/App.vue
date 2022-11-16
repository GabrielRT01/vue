<script>

export default {
    data() {
        return {
            message: 'This is my message'
        }
    },
    methods: {
        home() {
            this.$router.push({ name: "home" })
        },
        ver() {
            this.$router.push({ name: "blog" })
        },
    }
};

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" @click="home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="ver">Ver entradas</a>
                    </li>
                    <li class="nav-item">
                        <!--<a href="#" class="nav-link" @click="go()">Contacto</a>-->
                        <!--<router-link :to='{ name: "blog" }' class="btn btn-info">Editar </router-link> -->
                    </li>
                    <li class="nav-item">
                        <a type="button" @click="go" class="btn btn-success"> Log in </a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <div>
        <router-view></router-view>
    </div>
    <br>
</template>
