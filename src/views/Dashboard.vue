<template>
  <div>
    <Navbar />
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="card shadow">
            <div class="card-header p-0">Clientes Cadastrados</div>
            <div class="card-body"></div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="accordion accordion-flush shadow" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>Cadastrar Clientes</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <input
                        v-model="form.name"
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Nome Completo"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <input
                         v-model="form.email"
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="E-mail"
                          required
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                         v-model="form.telefone1"
                          type="tel"
                          class="form-control"
                          id="name"
                          placeholder="Telefone 1"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <input
                          v-model="form.telefone2"
                          type="tel"
                          class="form-control"
                          id="name"
                          placeholder="Telefone 2"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <select
                          v-model="form.tipo_cliente"
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Selecione o Tipo de Cliente</option>
                          <option value="Pessoa Física">Pessoa Física</option>
                          <option value="Pessoa Jurídica">
                            Pessoa Jurídica
                          </option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <input class="form-control" type="file" id="formFile" />
                      </div>

                      <div
                        class="d-grid gap-2 d-md-flex justify-content-md-end my-3"
                      >
                        <button
                          class="btn btn-primary me-md-2"
                          type="button"
                          @click="update()"
                        >
                          Cadastrar Informações
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavBar";
export default {
  components: {
    Navbar,
  },
  data() {
      return {
        form:{
            name:"",
            email: "",
            telefone1: "",
            telefone2: "",
            tipo_cliente: "",
            imagem: "",
        }
    }
   },

  methods: {},
};
</script>

<style></style>
