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
      localStorage.setItem('roster', JSON.stringify((state.roster)))
    },
    GET_LOCAL_STORAGE(state) {
      if (localStorage.getItem('roster') !== null) {
        state.roster = JSON.parse(localStorage.getItem('roster'))
      }
    }
  },
  actions: {
    addPlayer({ commit }, payload) {
      commit('ADD_PLAYER', payload)
    },
    getLocalStorage({commit}) {
      commit('GET_LOCAL_STORAGE')
    }
  },
  modules: {
  }
})
