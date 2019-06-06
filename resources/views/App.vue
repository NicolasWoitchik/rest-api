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
        <v-snackbar
            v-model="snackbar"
            :top="true"
            :color="notificationColor"
            align-center
        >
        {{notificationText}}
        </v-snackbar>
    </v-app>
</template>

<script>
    import 'vuetify/dist/vuetify.min.css'
    export default {
        data: () => ({
            drawer: null,
            snackbar:false,
            notificationText:'',
            notificationColor:'',
        }),
        created(){
            eventBus.$on('showNotification',this.showNotification)
        },
        methods:{
            showNotification(data)
            {
                if(data.type == undefined)
                    data.type = 'success';

                this.notificationText = data.message;
                this.notificationColor = data.type;
                this.snackbar = true;
            }
        }
    }
</script>