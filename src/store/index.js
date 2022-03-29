import { createStore } from 'vuex'
import auth from './auth'
import user from './user'
import cliente from './cliente'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
      auth,
      user,
      cliente
  }
})
