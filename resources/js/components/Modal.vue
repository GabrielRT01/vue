<script>
export default {
    props: {
        mensaje: Object
    },
    methods: {
        sendMessageToParent() {
            const c = document.getElementById("color").value;
            this.$store.commit('color', { c })
            this.$emit("messageFromChild", "#566573");
        }
    }
}
</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Inicio </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{ this.mensaje.message }} <br>
                    <button @click="sendMessageToParent()" class="btn btn-secondary"> Cambiar a </button>
                    <input class="form-control" id="color" type="text" placeholder="#566573" maxlength="15" value="#566573">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button>
                    <button type="button" class="btn btn-primary"> Save changes </button>
                </div>
            </div>
        </div>
    </div>
</template>