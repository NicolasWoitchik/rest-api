<template>
  <div class="container users">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <v-spacer></v-spacer>
        <div class="new-user">
          <v-btn :to="{path:'/'}" color="primary" class="mb-2">
            Back
          </v-btn>
          <v-btn color="success" class="mb-2" :to="{name:'new-user'}">
            New User
            <v-icon>add</v-icon>
          </v-btn>
        </div>
        <v-data-table
          :headers="headers"
          :items="users"
          class="elevation-1"
          :loading="loading"
        >
          <template 
            v-slot:items="props"
          >
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.email }}</td>
            <td>{{ props.item.phone }}</td>
            <td class="justify-center">
              <v-icon
                small
                class="mr-2"
                @click="editUser(props.item)"
              >
                edit
              </v-icon>
              <v-icon
                small
                @click="deleteUser(props.item)"
              >
                delete
              </v-icon>
            </td>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<style>
  .users .new-user
  {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
</style>

<script>
  export default {
    data() {
      return {
        headers: [
        {
          text: 'ID',
          value: 'id' 
        },
        { 
          text: 'Name', 
          value: 'name'
        },
        { 
          text: 'E-mail',
          value: 'email'
        },
        { 
          text: 'Phone',
          value: 'phone'
        },
        { 
          text: 'Actions', 
          value: 'name', 
          sortable: false 
        }
      ],
      }
    },
    created(){
      this.$store.dispatch('getUsers');
    },
    computed:{
      users()
      {
        return this.$store.getters.users;
      },
      loading()
      {
        return this.$store.getters.loading
      }
    },
    methods:{
      editUser(user)
      {
        this.$router.push({
          name:'edit-user',
          params:{
            userID:user.id
          }
        });
      },
      deleteUser(user)
      {
        this.$store.commit('deleteUser',user.id);
      }
    },
  }
</script>
