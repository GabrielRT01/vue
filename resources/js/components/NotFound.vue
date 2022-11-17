<script setup>
    import Example from './Example.vue';
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
        <!-- Button trigger modal -->
        <br>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            ¡Prueba nuestro nuevo modal!
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Inicio</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Example mensaje="Hola"></Example>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>