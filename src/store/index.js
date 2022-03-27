import { createStore } from 'vuex'
import auth from './auth'
import user from './user'

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
  }
})
