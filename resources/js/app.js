
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

window.eventBus = new Vue()

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

window.Vuetify = require('vuetify');
import VueRouter from 'vue-router'
import {store} from '../store/store'

Vue.use(VueRouter)
Vue.use(Vuetify);

import Home from '../views/HomeView'
import ListUsers from '../views/users/ListView'
import EditUsers from '../views/users/EditView'
import App from '../views/App'

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
          component: ListUsers,
      },
      {
          path: '/users/add',
          name: 'new-user',
          component: EditUsers,
      },
      {
          path: '/users/:userID',
          name: 'edit-user',
          component: EditUsers,
      },
  ],
});
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  data() {
    return {
      drawer:true
    }
  },
});
