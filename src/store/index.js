// Should be in the array that gets returned from the getStandingsApi call.
// Will need to update the url in getTeams to pass it the leagueid payload.

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leagues: [],
    roster: [],
    teams: [],
    isLoading: false,
    selectedTeam: null,
    selectedLeagueId: null,
    selectedLeague: null,
  },
  getters: {},
  mutations: {
    ADD_PLAYER(state, payload) {
      state.roster.push(payload);
      localStorage.setItem("roster", JSON.stringify(state.roster));
    },
    GET_LOCAL_STORAGE(state) {
      if (localStorage.getItem("roster") !== null) {
        state.roster = JSON.parse(localStorage.getItem("roster"));
      }
    },
    GET_LEAGUES(state) {
      state.isLoading = true;
      const url = `https://app.mysportsort.com/view/json/js_getcurrentleagues.php?&an=440&dts=7&sportid=0&securetoken=hdsLWNC*%403b772%40gd2%40AhhhdcxqnwdvA01!!nce7cX&_=1667677124908`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          state.leagues = data.leagues.seasons;
        })
        .finally(() => (state.isLoading = false));
    },
    GET_ROSTER(state, payload) {
      state.isLoading = true;
      const url = `https://app.mysportsort.com/view/json/js_getteamroster.php?&teamid=${payload.teamId}&an=440&slid=${payload.leagueid}&uid=0&key=&securetoken=hdsLWNC*%403b772%40gd2%40AhhhdcxqnwdvA01!!nce7cX&_=1667507787564`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          state.roster = data.roster.players;
          state.selectedTeam = state.teams.find(
            (team) => team.teamid === payload.teamId
          );
        })
        .finally(() => (state.isLoading = false));
    },
    GET_TEAMS(state, leagueid) {
      state.isLoading = true;
      const url = `https://app.mysportsort.com/view/json/js_getstandings.php?&=an=440&sort=0&tid=0&slid=${leagueid}&seasontype=1&uid=0&key=&securetoken=hdsLWNC*%403b772%40gd2%40AhhhdcxqnwdvA01!!nce7cX&_=1667340510330`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          state.teams = data.seasonstandings.teams.map((team) => {
            return { ...team, points: parseInt(team.points) };
          });
          state.selectedLeagueId = leagueid;
          console.log(state.leagues);
          state.selectedLeague = state.leagues.find(
            (league) => league.seasonleagueid === leagueid
          );
        })
        .finally(() => (state.isLoading = false));
    },
  },
  actions: {
    addPlayer({ commit }, payload) {
      commit("ADD_PLAYER", payload);
    },
    getLocalStorage({ commit }) {
      commit("GET_LOCAL_STORAGE");
    },
    getLeagues({ commit }) {
      commit("GET_LEAGUES");
    },
    getRoster({ commit }, payload) {
      commit("GET_ROSTER", payload);
    },
    getTeams({ commit }, leagueid) {
      commit("GET_TEAMS", leagueid);
    },
  },
  modules: {},
});
