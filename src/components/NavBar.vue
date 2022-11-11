<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-content>
          <!-- <v-img contain height="50px" src="logoIcon.svg" class="mb-2"></v-img> -->
          <v-list-item-title class="text-h6 text-center">
            Beer League Hockey! <br>
            <span class="thin" style="text-transform:uppercase;">AUSTIN, TEXAS</span>
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
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
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

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
        ><span class="logo-title">Austin Hockey Connection</span></v-toolbar-title
      >

      <v-spacer> </v-spacer>

      <div
        class="nav-items d-none d-md-block"
        v-for="item in items"
        :key="item.title"
      >
        <v-btn class="ml-1 mr-1" text :to="item.link">{{ item.title }}</v-btn>
      </div>
      <!-- <div>
        <template v-if="loginState">
          <v-btn color="primary" class="ml-4">Logout</v-btn>
        </template>
        <template v-else>
          <v-btn color="accent" class="ml-4" to="/login">Login</v-btn>
        </template>
      </div> -->
    </v-app-bar>
  </div>
</template>

<script>
import { quotes } from '../assets/hockey-quotes'

export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Northcross", link: "/locations/northcross" },
      { title: "Crossover", link: "/locations/crossover" },
      { title: "The Pond", link: "/locations/pond" },
      { title: "Events", link: "/events" },
      { title: "Login", link: "/login" },
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

</style>