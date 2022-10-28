import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roster: []
  },
  getters: {

  },
  mutations: {
    ADD_PLAYER(state, payload) {
      state.roster.push(payload);
    }
  },
  actions: {
    addPlayer({ commit }, payload) {
      commit('ADD_PLAYER', payload)
    }
  },
  modules: {
  }
})
