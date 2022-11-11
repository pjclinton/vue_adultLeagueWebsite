import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#041E42",
        secondary: "#C8102E",
        accent: "#247BA0",
        error: "#b71c1c",
      },
    },
  },
});
