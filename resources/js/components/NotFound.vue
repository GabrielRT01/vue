<script>

import Modal from './Modal.vue';

export default {
    data() {
        return {
            mensaje: {
                color: "white"
            }
        }
    },
    methods: {
        setColor() {
            this.mensaje.color = document.getElementById("app").style.backgroundColor.valueOf();
        },
        childMessageReceived(color) {
            this.setColor(color);
            document.getElementById("app").style.backgroundColor = color;
        },
        probarVuex() {
            this.$store.commit('increment');
        }

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
            @click="setColor()">
            Cambiar color
        </button>
        &nbsp;
        <!--
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
            @click="setColor('#F9E79F')">
            Claro
        </button>
        -->
        <br><br>
        <button type="button" class="btn btn-danger" @click="probarVuex()">
            Incrementar: {{ this.$store.state.count }}
        </button>

        <Modal v-bind:mensaje="this.mensaje" v-on:messageFromChild="childMessageReceived"></Modal>
    </div>
</template>