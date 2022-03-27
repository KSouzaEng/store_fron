    import axios  from "axios";
    import router from '@/router'

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
      
          if(!response.data.access_token){
           router.push('/')
          }else{
              console.log('nasjdbhsdb')
              localStorage.setItem('token',response.data.access_token)
             router.push('/dashboard')
          }
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
        async logout({commit}){

          // return axios.post("logout").then(() => {
          //   localStorage.removeItem('token')
          //   commit("SET_TOKEN", null);
          //   commit("SET_USER", null);
          // });
          let token = localStorage.getItem('token')
          return axios({
            url: '/logout',
            method: 'POST',
            headers: {'Content-Type': 'application/json',Authorization: 'Bearer ' + token},
          }).then( () => {
            localStorage.removeItem('token')
              commit("SET_TOKEN", null);
              commit("SET_USER", null);
              router.push('/')
          }).catch( e => {
            console.log(e)
          })
        }
        
      },
    };