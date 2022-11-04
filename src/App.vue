<template>
  <v-app>
    <app-bar />
    <v-main>
      <router-view/>
      <v-switch
          class="theme-toggle"
          v-model="$vuetify.theme.dark"
          :label="$vuetify.theme.dark ? 'Dark Mode' : 'Light Mode'">
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

<style lang="scss" scoped>
.theme-toggle {
  margin-left: 20px;
}
</style>
