<script>

import Modal from './Modal.vue';

export default {
    data() {
        return {
            mensaje: ""
        }
    },
    methods: {
        setMessage(m) {
            this.mensaje = m;
        },
        childMessageReceived(arg1) {
            console.log("Mensaje de mi hijo: " + arg1);
        },

    },
    components: {
        Modal,
    }
}
</script>

<template>
    <div class="container text-center">
        <div class="row g-2">
            <div class="col-4 offset-4">
                <h3> Ups... Parece que te has perdido. </h3>
                <br>
                <router-link to="/">
                    <button class="btn btn-success">
                        Volver
                    </button>
                </router-link>
            </div>
        </div>
        <!-- Buttons trigger modal -->
        <br>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
            @click="setMessage('Modal A pulsado')">
            Modal A
        </button>
        <br><br>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
            @click="setMessage('Modal B pulsado')">
            Modal B
        </button>

        <Modal v-bind:mensaje="this.mensaje" v-on:messageFromChild="childMessageReceived"></Modal>
    </div>
</template>