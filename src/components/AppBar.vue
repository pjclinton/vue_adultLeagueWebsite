<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="nav-drawer"
      dark
    >
    <v-list-item>
        <v-list-item-content style="overflow-wrap: break-word;">
          <v-list-item-title class="text-h6">
            Beer League Hockey! <br>
            <span class="thin" style="text-transform:uppercase;">AUSTIN, TEXAS</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            "{{ quote.quote }}" <br>
            <br>
            <span class="thin">- {{quote.author}}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
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
      <v-app-bar

        app
        color="primary"
        flat
        dark
        hide-on-scroll
      >
        <div :class="drawer ? 'puck' : 'puckActive'" @click.stop="drawer = !drawer"></div>
        <router-link to="/">
          <div class="logo xblack">Beer League Heroes</div>
        </router-link>
      </v-app-bar>
  </div>
</template>

<script>
import { quotes } from '../assets/hockey-quotes'
  export default {
    data() {
      return {
        drawer: false,
        items: [
          {
            title: 'Home',
            icon: 'mdi-hockey-sticks',
            link: '/'
          },
          {
            title: 'Events',
            icon: 'mdi-calendar',
            link: '/events'
          },
          {
            title: 'Login',
            icon: 'mdi-account',
            link: '/login'
          },
        ]
      }
    },
    computed: {
      quote() {
        const num = Math.floor(Math.random() * quotes.length + 0);
        return quotes[num];
      }
    },
  }
</script>

<style lang="scss" scoped>
.logo {
  margin-bottom: 3px;
  font-size: 18px;
  text-transform: uppercase;
}
.btn-group {
  display: flex;
  gap: 8px;
}
a {
  text-decoration: none;
  color: inherit !important;
}
.nav-drawer {
  background: #041E42;
}
.puckActive {
  cursor: pointer;
  background: url('../assets/hockeyPuck.svg');
  background-size: contain;
  height: calc(90px / 4);
  width: calc(180px / 4);
  margin-right: 20px;
  background-repeat: no-repeat;

}
.puck {
  cursor: pointer;
  background: url('../assets/puckHover.svg');
  height: calc(150px / 4);
  width: calc(180px / 4);
  background-repeat: no-repeat;
  margin-right: 20px;
}

// overrides
.v-list-item__title, .v-list-item__subtitle {
  padding-top: 10px;
  padding-bottom: 6px;
  white-space: unset;
}
</style>