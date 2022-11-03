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
  }
};
</script>
