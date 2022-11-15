
import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import crossover from "./crossover.module";
import events from "./events.module";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    crossover,
    events,
  }
});
