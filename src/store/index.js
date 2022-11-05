// Get Leagues -
// https://app.mysportsort.com/view/json/js_getleagues.php?callback=jQuery1112016170151843907266_1667579886525&an=440&sportid=0&securetoken=hdsLWNC*%403b772%40gd2%40AhhhdcxqnwdvA01!!nce7cX&_=1667579886531

// TO DO:
// Set up store for the Leagues api call. 
// 1. Create a variable called leagues in our state. Initialized to an empty array.
// 2. Create the ADD_LEAGUES mutation. Should take no payload, can use the link directly from above.
// 3. Change getTeams in the store, so that it can take a payload which will be the leagueid - or something like that. Should be in the array that gets returned from the getStandingsApi call. Will need to update the url in getTeams to pass it the leagueid payload.

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
    isLoading: false,
    selectedTeam: null,
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
    GET_LEAGUES(state, leagueid) {
      state.isLoading = true;
      const url = `https://app.mysportsort.com/view/json/js_getleagues.php?&leagueid=${leagueid}&an=440&sportid=0&securetoken=hdsLWNC*%403b772%40gd2%40AhhhdcxqnwdvA01!!nce7cX&_=1667579886531`
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        state.roster = data.roster.players;
        state.selectedTeam = state.teams.find(team => team.teamid === teamId)
        console.log(state.roster)
      }).finally(()=> state.isLoading = false)
    },
    GET_ROSTER(state, teamId) {
      state.isLoading = true;
      const url = `https://app.mysportsort.com/view/json/js_getteamroster.php?&teamid=${teamId}&an=440&slid=32320&uid=0&key=&securetoken=hdsLWNC*%403b772%40gd2%40AhhhdcxqnwdvA01!!nce7cX&_=1667507787564`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          state.roster = data.roster.players;
          state.selectedTeam = state.teams.find(team => team.teamid === teamId)
          console.log(state.roster)
        }).finally(()=> state.isLoading = false)
    },
    GET_TEAMS(state) {
      state.isLoading = true;
      const url = `https://app.mysportsort.com/view/json/js_getstandings.php?&an=440&sort=0&tid=0&slid=32320&seasontype=1&uid=0&key=&securetoken=hdsLWNC*%403b772%40gd2%40AhhhdcxqnwdvA01!!nce7cX&_=1667340510330`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          state.teams = data.seasonstandings.teams.map((team) => {
            return {...team, points: parseInt(team.points)}
          })
        }).finally(() => state.isLoading = false)
    }
  },
  actions: {
    addPlayer({ commit }, payload) {
      commit('ADD_PLAYER', payload)
    },
    getLocalStorage({commit}) {
      commit('GET_LOCAL_STORAGE')
    },
    getRoster({commit}, teamId) {
      commit('GET_ROSTER', teamId)
    },
    getTeams({commit}) {
      commit('GET_TEAMS')
    }
  },
  modules: {
  }
})
