<template>
  <div class="container d-flex justify-content-center ini">
    <div class="row col-md-4">
      <div class="card shadow p-5">
        <div class="card-body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-person-bounding-box"
            viewBox="0 0 16 16"
          >
            <path
              d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
            />
            <path
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            />
          </svg>
          <!-- <h1 class="h3 mb-3 fw-normal card-title">Login</h1> -->
          <form @submit.stop.prevent="Onsubmit" class="col-md-12 py-5">
            <div
              class="
                d-flex
                justify-content-center
                input-group input-group-md
                mb-4
              "
            >
              <input
                v-model="form.name"
                type="text"
                class="form-control"
                id="name"
                placeholder="Nome Completo"
                required
              />
            </div>
            <div
              class="
                d-flex
                justify-content-center
                input-group input-group-md
                mb-4
              "
            >
              <input
                v-model="form.email"
                type="text"
                class="form-control"
                id="email"
                placeholder="E-mail"
                required
              />
            </div>
            <div
              class="
                d-flex
                justify-content-center
                input-group input-group-md
                mb-4
              "
            >
              <input
                v-model="form.password"
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Senha"
                required
              />
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Cadastrar
            </button>
          </form>
          <router-link to="/" replace class="link">Fazer Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("user", {
         createUser: 'createUser'
    }),
    Onsubmit(){
        this.createUser(this.form).then(() => { this.$routes.push('/') });
    }
  }
};
</script>

<style>
.ini {
  height: 100vh;
  align-items: center;
}
</style>