
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('HomeComponent', require('./components/HomeComponent.vue'));

window.Vuetify = require('vuetify');
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuetify);

import Home from './components/HomeComponent'
import Users from './components/Users'
import App from './components/App'

const router = new VueRouter({
  mode: 'history',
  routes: [
      {
          path: '/',
          name: 'home',
          component: Home
      },
      {
          path: '/users',
          name: 'users',
          component: Users,
      },
  ],
});
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  data() {
    return {
      drawer:true
    }
  },
});
