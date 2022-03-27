import axios  from "axios";
// import router from '@/router'

export default {
    namespaced: true,

    state:{
        user: {},
        users: [],
        isSaved: false,
        userID: 0
    },
    getters: {
        user(state) {
          return state.user;
        },
        users(state) {
            return state.users;
          },
      },
      mutations: {
        SET_USER_ID(state, id) {
            state.userID = id
          },
        SET_USER(state, user) {
          state.user = user;
        },
        SET_USERS(state, users) {
            state.users = users;
          },
          SET_IS_SAVED(state, response) {
            console.log('set_is_saved', response)
            state.isSaved = response
          },
      },
      actions: {

        async createUser({commit}, information) {

            try {
              let response = await axios.post('/register', {
    
                name: information.name,
                email: information.email,
                password: information.password,
              })
              console.log('response registrer', response, 'end response registrer')
           
    
              commit('SET_IS_SAVED', true)
              
            } catch (error) {
              console.log('error', error)
              commit('SET_IS_SAVED', false)
            }
          },
        async getUser({commit},token){
            try {
                token = localStorage.getItem('token')
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
        }

      }
}