<template>
  <div class="container">
    <div class="main-body">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/dashboard" replace class="link text-dark"
              >Home</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:void(0)">Perfil do usuário</a>
          </li>
        </ol>
      </nav>
      <!-- /Breadcrumb -->

      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card shadow">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h5>{{ user.name }}</h5>
                  <p class="text-secondary mb-1">Vendedor(a)</p>
                  <p class="text-muted font-size-sm">Manaus - AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8" v-if="edit === false">
          <div class="card shadow">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Nome Completo</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.name }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">E-mail</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.email }}
                </div>
              </div>
              <hr />
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  class="btn btn-primary me-md-2"
                  type="button"
                  @click="showform()"
                >
                  Editar
                </button>
                <button
                  class="btn btn-danger"
                  type="button"
                  @click="handleDelete()"
                >
                  Excluir Perfil
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8" v-else>
          <div class="card shadow">
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Nome Completo</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" v-model="user.name" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.email"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Senha</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.password"
                  />
                </div>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end my-3">
                <button
                  class="btn btn-primary me-md-2"
                  type="button"
                  @click="update()"
                >
                  Atualizar Informações
                </button>
                <button class="btn btn-danger" type="button" @click="cancel">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import swal from "sweetalert2";
export default {
  computed: {
    ...mapState("user", {
      user: "user",
    }),
  },
  data() {
    return {
      edit: false,
    };
  },
  methods: {
    ...mapActions("user", {
      getUser: "getUser",
      updateUser: "updateUser",
      deleteUser: "deleteUser",
    }),
    showform() {
      console.log();
      this.edit = !this.edit;
    },
    handleUpdate() {
      console.log("Atualizando....");
      this.updateUser(this.user);
      this.edit = !this.edit;
    },
    cancel() {
      this.edit = !this.edit;
    },
    handleDelete() {
      swal.fire({
        title: "Tem certeza que deseja excluir o perfil?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, quero deletar!",
      }).then((result) => {
        if (result.isConfirmed) {
          swal.fire("Deletado!", "Perfil deletado.", "success");
           this.deleteUser();
           this.$router.replace('/')
        }
      });
     
    },
  },

  mounted() {
    this.getUser();
    // console.log('mounted EditUser', this.user)
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  font-size: 15px;
  /* color: #080808; */
}
</style>