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
    stats: [],
    chapEvents: [],
    pondEvents: [],
    isLoading: false,
    isStatsLoading: false,
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

    // using mysport api found on crossovertx site.
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
    // uses multiple sources to get stick times.
    GET_CHAP_SKATES(state) {
      state.isLoading = true;
      const url =
        "https://apps.daysmartrecreation.com/dash/jsonapi/api/v1/teams?cache[save]=false&page[size]=10&sort=start_date&include=registrationInfo%2Cfacility%2Cleague.season.priorities.memberships%2CskillLevel%2CprogramType%2Csport%2Cleague.houseProduct.locations%2Cproduct.locations%2Cevents%2CregistrableEvents&filter[league_id]=2289&filter[visible_online]=true&company=chaparralice";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const events = data.data.map((event) => {
            return {
              url: `https://member.daysmartrecreation.com/#/online/chaparralice/login?next=/online/chaparralice/group/register/${event.id}`,
              name: event.attributes.name,
              startDate: event.attributes.start_date,
              eventLength: event.attributes.event_length,
              description: event.attributes.description,
            };
          });
          state.chapEvents = events;
          console.log(state.chapEvents);
        })
        .finally(() => (state.isLoading = false));
    },
    GET_POND_SKATES(state) {
      state.isLoadings = true;

      // friday = 5
      const today = new Date();
      const currentDay = today.getDay();
      const daysTillFriday =
        5 - currentDay > 0 ? 5 - currentDay : 5 - currentDay + 7;

      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
      const fridays = [];
      let friday = today.addDays(daysTillFriday);
      // push first friday
      fridays.push(friday);
      // push next number fridays
      for (let i = 1; i <= 1; i++) {
        fridays.push(friday.addDays(7 * i));
      }
      const dateToUrl = (date) => {
        const dateString = date.toString().split(" ");
        const mapDate = (month) => {
          switch (month) {
            case "Nov":
              return "november";
            case "Dec":
              return "december";
            case "Jan":
              return "january";
            case "Feb":
              return "february";
            case "Mar":
              return "march";
            case "Apr":
              return "april";
            case "May":
              return "may";
            case "Jun":
              return "june";
            case "Jul":
              return "july";
            case "Aug":
              return "august";
            default:
              return month;
          }
        };
        const finalDate = `${mapDate(dateString[1])}-${dateString[2]}th`;
        return finalDate;
      };
      const events = fridays.map((day) => {
        return {
          url: `https://the-pond-hockey-club.myshopify.com/products/${dateToUrl(
            day
          )}-lunchtime-adult-5v5-shinny-12-30-1-45`,
          date: day,
        };
      });
      state.pondEvents = events;
    },
  },
  actions: {
    addPlayer({ commit }, payload) {
      commit("ADD_PLAYER", payload);
    },
    getLocalStorage({ commit }) {
      commit("GET_LOCAL_STORAGE");
    },
    getLeagues({ commit }, location) {
      commit("GET_LEAGUES", location);
    },
    getRoster({ commit }, payload) {
      commit("GET_ROSTER", payload);
    },
    getTeams({ commit }, leagueid) {
      commit("GET_TEAMS", leagueid);
    },
    getChapSkates({ commit }) {
      commit("GET_CHAP_SKATES");
    },
    getPondSkates({ commit }) {
      commit("GET_POND_SKATES");
    },
    getStats({ commit }, leagueid) {
      commit("GET_STATS", leagueid);
    },
  },
  modules: {},
});
