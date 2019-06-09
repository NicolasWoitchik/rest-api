<template>
  <div class="container users">
    <div class="row justify-content-center">
      <div>
      <v-card 
        class="col-md-8"
        :loading='true'
      >

        <v-card-title>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              style="flex:1"
            >
              <v-text-field
                v-model="user.name"
                :rules="rules.name"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="user.email"
                :rules="rules.email"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="user.phone"
                :rules="rules.phone"
                label="Phone"
                mask="(##) ##### - ####"
                required
              ></v-text-field>
              
            </v-form>
        </v-card-title>

        <v-card-actions>
          <v-btn
            :disabled="!valid"
            color="success"
            @click="save"
          >
            Save
          </v-btn>
          <v-btn
            color="warning"
            @click="routerBack"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    data: () => ({
      valid: true,
      user:{
        id:null,
        name:'',
        email:'',
        phone:''
      },
      rules:{
        name: [
          v => !!v || 'Name is required',
        ],
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        phone: [
          v => !!v || 'Phone is required',
        ],
      }
    }),
    mounted(){
      var userID = this.$route.params.userID;
      if(userID != undefined)
      {
        const self = this;
        this.$store.dispatch('getUser',userID)
          .then(user => {
            self.user = user;
          })
          .catch(console.log)
      }
    },
    methods: {
      save () {
        if (this.$refs.form.validate()) {
          this.saving = true;
          if(this.user.id == null)
          {
            this.$store.commit('newUser',this.user);
          }
          else
          {
            this.$store.commit('editUser',this.user);
          }
          this.saving = false;
          this.$router.push('/users')
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      routerBack()
      {
        this.$router.go(-1);
      }
    }
  }

</script>
