<script>
export default {
    props: {
        mensaje: String
    }
}
</script>

<template>
    <h3 style="text-align: center"> Modal </h3>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p> Mensaje nuevo a través de las props: <strong> {{this.mensaje}} </strong> </p> 
            </div>
        </div>
    </div>
</template>