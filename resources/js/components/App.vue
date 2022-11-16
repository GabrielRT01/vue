<script>
import { router } from '../router';
import { routes } from '../routes';

export default {
    data() {
        return {
            message: 'This is my message'
        }
    },
    methods: {
        go() {
            router.push({ name: "new" })
        }
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
                        <a class="nav-link active" aria-current="page" v-on:click="go()">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="go()">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <router-link to='/blog' class="btn btn-success">Log in</router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <br>
</template>
