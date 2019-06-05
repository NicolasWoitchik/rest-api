<template>
    <v-app id="inspire" light>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-title>REST Api</v-toolbar-title>
        </v-toolbar>
        <v-content flat> 
            <router-view></router-view>
        </v-content>
        <v-footer app fixed flat>
            <span>Created By: <a href="mailto:nicolas@woitchik.com">Nicolas Woitchik</a></span>
        </v-footer>
    </v-app>
</template>

<script>
    import 'vuetify/dist/vuetify.min.css'
    export default {
        data: () => ({
            drawer: null
        }),
    }
</script>