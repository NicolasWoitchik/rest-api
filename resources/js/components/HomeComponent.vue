<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <v-btn color="success" :to="{name:'home'}">Create User</v-btn>
                <v-btn color="primary" :to="{name:'users'}">List Users</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
