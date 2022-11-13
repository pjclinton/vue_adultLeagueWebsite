import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3a3a31",
        secondary: "#cdc6bf",
        accent: "#247BA0",
        error: "#b71c1c",
      },
    },
  },
});
