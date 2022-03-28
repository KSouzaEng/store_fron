<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-light
      p-3
      mb-2
      bg-primary bg-gradient
      fixed-top
      
    "
  >
    <div class="container-fluid ">
      <a class="navbar-brand d-flex justify-content-start abs text-white" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-box"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
          />
        </svg>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDarkDropdown"
        aria-controls="navbarNavDarkDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavDarkDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown ">
            <a
              class="nav-link dropdown-toggle "
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#FFF"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li > <router-link to="/about" replace class="link dropdown-item">Perfil</router-link></li>
              <li>
                <form class="d-inline-flex" @submit.stop.prevent="sair">
                  <button class="btn btn-link" type="submit">Sair</button>
                </form>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions} from "vuex";
export default {

  methods: {
    ...mapActions("auth", {
      logout: "logout",
    }),
  
    sair() {
      this.logout().then(() => {
        console.log("saiu");
      });
    },
  },
 
};
</script>

<style>
.btn-link {
  text-decoration: none;
  color: black;
}
 @media (min-width: 768px) {
.navbar-brand.abs
    {
        position: relative;
        width: 90%;
        left: 0;
        text-align: center;
    }
}

</style>