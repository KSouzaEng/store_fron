import axios  from "axios";
// import router from '@/router'

export default {
    namespaced: true,

    state:{
        cliente: {},
        clientes: [],
        isSaved: false,
        clienteID: 0
    },
    getters: {
        cliente(state) {
          return state.cliente;
        },
        clientes(state) {
            return state.clientes;
          },
      },
      mutations: {
        SET_CLIENT_ID(state, id) {
            state.userID = id
          },
        SET_CLIENT(state, cliente) {
          state.cliente = cliente;
        },
        SET_CLIENTS(state, clientes) {
            state.clientes = clientes;
          },
          SET_IS_SAVED(state, response) {
            console.log('set_is_saved', response)
            state.isSaved = response
          },
      },
      actions: {

        async createClient({commit}, information) {

            let data = new FormData()
              let settings = { headers: { 'content-type': 'multipart/form-data' } }
              data.append('settings', settings)
              data.append('nome', information.imagem.name)
              data.append('file', information.imagem.file)
              data.append('tipo', information.imagem.tipo)
      
            try {
              let response = await axios.post('register/cliente', {
    
                'name':information.name,
                'email':information.email,
                'imagem':information.imagem,
                'telefone1':information.telefone1,
                'telefone2':information.telefone2,
                'tipo_pessoa':information.tipo_pessoa,
              })
              console.log('response registrer', response, 'end response registrer')
           
    
              commit('SET_IS_SAVED', true)
              
            } catch (error) {
              console.log('error', error)
              commit('SET_IS_SAVED', false)
            }
          },
       
        }
}