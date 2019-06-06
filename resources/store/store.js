import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    users:[],
    saving:false,
    loading:false,
  },
  getters:{
    users(state) 
    {
      return state.users;
    },
    user:(state) => (id) => {
      return state.users.find(user => user.id == id)
    },
    loading(state) 
    {
      return state.loading;
    },
    saving(state) 
    {
      return state.saving;
    },
  },
  actions:{
    getUsers(context)
    {
      context.commit('setLoading',true);
      axios('/users').then(response => {
        context.commit('setLoading',false);
        context.commit('setUsers',response.data);
      }).catch(err => {
        context.commit('setLoading',false);
        console.log(err);
      })
    },
    getUser(context,id)
    {
      context.commit('setLoading',true);
      return new Promise((resolve,reject) => {
        axios('/users/'+id).then(response => {
          context.commit('setLoading',false);
          resolve(response.data);
        }).catch(reject)
      })
    }
  },
  mutations:{
    editUser(state,user)
    {
      state.saving = true;
      axios
      .put('/users/'+user.id,user)
      .then(response => {
        state.saving = true;
        var index = state.users.findIndex(item => item.id == user.id);
        state.users[index] = user;
        eventBus.$emit('showNotification',{
          message:'User Updated',
          type:'success'
        });
      })
      .catch(err => {
        console.log(err);
      });
    },
    newUser(state,user)
    {
      state.saving = true;
      axios
        .post('/users',user)
        .then(response => {
          state.saving = true;
          state.users.push(response);
          eventBus.$emit('showNotification',{
            message:'User created',
            type:'success'
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteUser(state,id)
    {
      var index = state.users.findIndex(user => user.id == id);
      state.saving = true;
      axios
        .delete('/users/'+id)
        .then(response => {
          state.saving = true;
          state.users.splice(index,1);
          eventBus.$emit('showNotification',{
            message:'User deleted',
            type:'success'
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    setUsers(state,users)
    {
      state.users = users;
    },
    setLoading(state,loading)
    {
      state.loading = loading;
    },
    setSaving(state,saving)
    {
      state.saving = saving;
    },
  },
})