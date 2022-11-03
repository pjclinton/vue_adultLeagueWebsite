<template>
  <v-app>
    <app-bar />
    <v-main>
      <router-view/>
      <v-switch
          v-model="$vuetify.theme.dark"
          :label="$vuetify.theme.dark ? 'dark mode' : 'light'">
        </v-switch>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';

export default {
  name: 'App',
  components: {
    AppBar,
  },

  data: () => ({
    //
  }),
  async created() {
    this.$store.dispatch('getLocalStorage')
    this.$store.dispatch('getTeams')
<<<<<<< HEAD
=======
    this.$store.dispatch('getRoster', '61428')
    
>>>>>>> 6e72c380244f846726ce8a81750730ad9fb66f12
  }
};
</script>
