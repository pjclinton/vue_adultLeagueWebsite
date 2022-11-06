<template>
  <div>
      <!-- Pasted code from vuetify -->
      <v-app-bar
        class="pl-10 pr-10 pt-3"
        app
        color="transparent"
        flat
        dark
        hide-on-scroll
      >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <router-link to="/">
          <div class="logo xblack">Beer League Heroes</div>
        </router-link>
        
        <div class="btn-group ml-10">
      </div>
      <v-spacer></v-spacer>
      <v-btn text elevation="0" small>
        {{ $store.state.isLoggedIn ? 'Logout' : 'Login' }}
      </v-btn>
      </v-app-bar>
  </div>
</template>

<script>
  export default {

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
</style>