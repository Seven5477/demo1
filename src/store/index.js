import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    welcome (state, value) {
      state.user = value
    }
  },
  actions: {
  },
  modules: {
  }
})
