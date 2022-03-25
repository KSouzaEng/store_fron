<template>
  <div class="container d-flex justify-content-center ini">
  <div class="row col-md-4 ">
  <div class="card shadow p-5">
  <form @submit.stop.prevent="submit" class=" col-md-12">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="#4682b4" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
    <h1 class="h3 mb-3 fw-normal mb-4">Login</h1>
    <div class=" d-flex justify-content-center input-group input-group-md mb-3 ">
      <input v-model="form.email" type="text" class="form-control" id="floatingInput" placeholder="E-mail" required>
    </div>
    <div class="d-flex justify-content-center input-group input-group-md mb-3 ">
      <input v-model="form.password" type="password" class="form-control" id="floatingPassword" placeholder="Senha" required>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
  </form>
</div>
</div>
</div>
</template>

<script>
// @ is an alias to /src

import { mapActions } from "vuex";
export default {
  name: 'Home',
  components: {
  
  },
  data(){
    return{
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods:{
    ...mapActions( "auth",{
        login: 'login'
    }),
    submit(){
      this.login(this.form).then( () =>{
       this.$router.replace({
          name: 'Dashboard' 
        })
      })
      
    }
  }
}
</script>
<style scoped>
.ini{
      height: 100vh;
      align-items: center;
}
</style>