<template>
  <div class="nav-container">
    <v-navigation-drawer v-model="drawer" app temporary color="secondary">
      <v-list-item>
        <v-list-item-content>
          <!-- <v-img contain height="50px" src="logoIcon.svg" class="mb-2"></v-img> -->
          <v-list-item-title class="xblack pb-3" style="font-size: 18px">
            Austin Hockey Connection
          </v-list-item-title>
          <v-list-item-subtitle class="thin" style="font-size: 12px">
            "{{ quote.quote }}" <br>
            <br>
            <span class="thin">- {{quote.author}}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <div class="nav-items">
          <div class="top">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
              link
              :disabled="item.disabled"
              exact
            >
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
          <div class="profile">
            <v-list-item
              to="/profile"
              exact
              v-if="$store.state.user"
            >
              <v-list-item-content>
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            </div>
          <div v-if="!$store.state.user" class="login">
            <v-list-item
              to="/login"
              link
              exact
            >
              <v-list-item-content>
                <v-list-item-title>Login</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
          <div class="logout" v-if="$store.state.user">
            <v-list-item
              @click="logout()"
            >
              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="transparent" elevation="0" class="app-bar">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-md-none"
      ></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link to="/"
          ><span class="logo-title">Beer League Heroes</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer> </v-spacer>

      <div
        class="nav-items d-none d-md-block"
        v-for="item in items"
        :key="item.title"
      >
        <v-btn
          class="ml-1 mr-1"
          :disabled="item.disabled"
          text
          :to="item.link"
          >{{ item.title }}</v-btn
        >
      </div>
      <v-btn
        v-if="$store.state.user"
        class="ml-1 mr-1"
        text
        to="/profile"
      >Profile</v-btn>
      <v-btn
        v-if="$store.state.user"
        class="ml-1 mr-1"
        text
        to="/admin"
      >Admin</v-btn>
      <v-btn
        v-if="!$store.state.user"
        class="ml-1 mr-1"
        text
        to="/login"
      >Login</v-btn>
      <v-btn
        v-if="$store.state.user"
        class="ml-1 mr-1"
        text
        @click="logout()"
      >Logout</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { quotes } from "../assets/hockey-quotes";
import { signOut } from "firebase/auth";
import { auth } from '../plugins/firebase'

export default {
  data: () => ({
    drawer: false,
    items: [
      // { title: "Northcross", link: "/locations/northcross", disabled: true },
      { title: "Leagues", link: "/locations/crossover", disabled: false },
      // { title: "The Pond", link: "/locations/pond", disabled: true },
      { title: "Events", link: "/events", disabled: false },
      // { title: "Admin", link: "/admin", disabled: false },
    ],
  }),
  computed: {
    loginState() {
      return true;
    },
    quote() {
      const num = Math.floor(Math.random() * quotes.length + 0);
      return quotes[num];
    },
  },
  methods: {
    logout() {
      signOut(auth).then(() => console.log('logged out'))
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit !important;
}
.v-list-item__subtitle {
  white-space: normal !important;
}
.app-bar {
  max-width: 1000px;
}
.nav-container {
  display: flex;
  justify-content: center;
}
</style>
