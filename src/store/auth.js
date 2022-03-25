    import axios  from "axios";

    export default {
      namespaced: true,

      state: {
        token: null,
        user: null,
      },
      getters: {
        authenticated(state) {
          return state.token && state.user;
        },
        user(state) {
          return state.user;
        },
      },
      mutations: {
        SET_TOKEN(state, token) {
          state.token = token;
        },
        SET_USER(state, user) {
          state.user = user;
        },
      },
      actions: {
        async login({ dispatch }, credentials) {
          let response = await axios.post("/login", credentials);
        //   console.log(response.data)
          dispatch("attempt", response.data.access_token);
        },

        async attempt({ commit, state }, token) {
          if (token) {
            console.log(token);
            commit("SET_TOKEN", token);
          }

          if (!state.token) {
            return;
          }

          try {
            let response = await  axios({
                url: '/me',
                method: 'GET',
                headers: {'Content-Type': 'application/json',Authorization: 'Bearer ' + token},
              });

            commit("SET_USER", response.data);
          } catch (e) {
            commit("SET_TOKEN", null);
            commit("SET_USER", null);
          }
        },
      },
    };