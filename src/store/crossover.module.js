
  const state = {
    leagues: [],
    roster: [],
    teams: [],
    stats: [],
    selectedTeam: null,
    selectedLeagueId: null,
    selectedLeague: null,
    isLoading: false,
    isStatsLoading: false,
  }


  const mutations = {
    GET_LEAGUES(state, location) {
      state.isLoading = true;
      if (location === "crossover") {
        const url = `https://app.mysportsort.com/view/json/js_getcurrentleagues.php?&an=440&dts=7&sportid=0&securetoken=hdsLWNC*%403b772%40gd2%40AhhhdcxqnwdvA01!!nce7cX&_=1667677124908`;
        console.log(url);
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            state.leagues = data.leagues.seasons;
          })
          .finally(() => (state.isLoading = false));
      } else {
        state.leagues = [];
      }
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
          state.selectedLeague = state.leagues.find(
            (league) => league.seasonleagueid === leagueid
          );
        })
        .finally(() => (state.isLoading = false));
    },
    GET_STATS(state, leagueid) {
      state.isStatsLoading = true;
      state.stats = [];
      const url = `https://app.mysportsort.com/view/json/js_getseasonleaders.php?&an=440&slid=${leagueid}&tid=0&pl=&seasontype=&uid=0&key=&sort=2&bottom=0&numperpage=60&mingames=0&securetoken=hdsLWNC*%403b772%40gd2%40AhhhdcxqnwdvA01!!nce7cX&_=1667914388740`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          state.stats = data.leagueleaders.leaders;
        })
        .finally(() => (state.isStatsLoading = false));
    },
  }
  const actions = {
    getLeagues({ commit }, location) {
      commit("GET_LEAGUES", location);
    },
    getRoster({ commit }, payload) {
      commit("GET_ROSTER", payload);
    },
    getTeams({ commit }, leagueid) {
      commit("GET_TEAMS", leagueid);
    },
    getStats({ commit }, leagueid) {
      commit("GET_STATS", leagueid);
    },
  }

  export default {
    state,
    actions,
    mutations,
  }