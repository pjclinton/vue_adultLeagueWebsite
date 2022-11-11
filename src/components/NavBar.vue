<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary dark color="primary">
      <v-list-item>
        <v-list-item-content>
          <!-- <v-img contain height="50px" src="logoIcon.svg" class="mb-2"></v-img> -->
          <v-list-item-title class="text-h6">
            Austin Hockey Connection<br><br>
          </v-list-item-title>
          <v-list-item-subtitle>
            "{{ quote.quote }}" <br>
            <br>
            <span class="thin">- {{quote.author}}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
          :disabled="item.disabled"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dark color="transparent" elevation="0">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-md-none"
      ></v-app-bar-nav-icon>
      
        <v-toolbar-title
          ><router-link to="/"><span class="logo-title">Austin Hockey Connection</span>
            </router-link>
          </v-toolbar-title> 
     

      <v-spacer> </v-spacer>

      <div
        class="nav-items d-none d-md-block"
        v-for="item in items"
        :key="item.title"
      >
        <v-btn class="ml-1 mr-1" :disabled="item.disabled" text :to="item.link">{{ item.title }}</v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { quotes } from '../assets/hockey-quotes'

export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Northcross", link: "/locations/northcross", disabled: true },
      { title: "Crossover", link: "/locations/crossover", disabled: false },
      { title: "The Pond", link: "/locations/pond", disabled: true },
      { title: "Events", link: "/events", disabled: false },
      { title: "Login", link: "/login", disabled: true },
    ],
  }),
  computed: {
    loginState() {
      return true;
    },
    quote() {
        const num = Math.floor(Math.random() * quotes.length + 0);
        return quotes[num];
      }
  },
  methods: {
    // logout() {
    //   this.$store.dispatch("logout");
    // },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff !important;
}
.v-list-item__subtitle {
  white-space: wrap !important;
}
</style>