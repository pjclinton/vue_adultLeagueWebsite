<template>
  <div>
      <!-- Pasted code from vuetify -->
      <v-app-bar
        app
        color="primary"
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
            to="/b-league"
            text
          >
          B-League
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn elevation="0" small color="#d02473">
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
.btn-group {
  display: flex;
  gap: 8px;
}
</style>