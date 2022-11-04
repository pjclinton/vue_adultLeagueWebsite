<template>
  <div>
      <!-- Pasted code from vuetify -->
      <v-app-bar
        class="pl-10 pr-10 pt-3"
        app
        color="transparent"
        flat
        dark
      >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      
        <v-toolbar-title><span class="logo">Electric Lettuce</span></v-toolbar-title>
        <div class="btn-group ml-10">
          <v-btn
            to="/"
            text
          >
          Home
        </v-btn>
        <v-btn
            to="/standings"
            text
          >
          Standings
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn text elevation="0" small>
        {{ isLoggedIn ? 'Logout' : 'Login' }}
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
}
.btn-group {
  display: flex;
  gap: 8px;

}
</style>