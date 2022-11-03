import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export class player {
  playerid = "1029534";
  name = "Todd Hummel";
  height = "";
  weight= "";
  city= "";
  state= "";
  dob= "09/13/1987";
  age= 35;
  number= "13";
  facebook= "0";
  position= "Defense";
}

export default new Vuex.Store({
  state: {
    roster: [],
    teams: [],
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
    },
    GET_ROSTER(state, teamId) {
      const uid = process.env.HOCKEY_APP_UID;
      const key = process.env.HOCKEY_APP_KEY;
      const token = process.env.HOCKEY_APP_TOKEN;
      const url = `https://app.mysportsort.com/view/json/js_getteamroster.php?&teamid=${teamId}&uid=${uid}&key=${key}&securetoken=${token}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          state.roster = data.players;
          console.log({data})
        })
    },
    GET_TEAMS(state) {
      const uid = process.env.HOCKEY_APP_UID;
      const key = process.env.HOCKEY_APP_KEY;
      const token = process.env.HOCKEY_APP_TOKEN;
      const url = `https://app.mysportsort.com/view/json/js_getstandings.php?&an=440&sort=0&tid=0&slid=32320&seasontype=1&uid=${uid}&key=${key}&securetoken=${token}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          state.teams = data.teams;
          console.log({data})
        })
    }
  },
  actions: {
    addPlayer({ commit }, payload) {
      commit('ADD_PLAYER', payload)
    },
    getLocalStorage({commit}) {
      commit('GET_LOCAL_STORAGE')
    },
    getRoster({commit}, payload) {
      commit('GET_ROSTER', payload)
    },
    getTeams({commit}) {
      commit('GET_TEAMS')
    }
  },
  modules: {
  }
})
