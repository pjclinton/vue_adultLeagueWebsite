<template>
  <div>
      <!-- Pasted code from vuetify -->
      <v-app-bar
        app
        color="primary"
        dark
      >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title>Electric Lettuce</v-toolbar-title>

        <v-spacer></v-spacer>


        <div class="btn-group">
        <v-btn
          to="/RosterView"
          text
        >
          Roster
        </v-btn>
        <v-btn
          to="/"
          text
          color="secondary"
        >
        Home
      </v-btn>
    </div>
      </v-app-bar>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>