<template>
  <v-app>
    <app-bar />
    <v-main>
      <Transition name="fade"  mode="out-in">
      <router-view/>
    </Transition>
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
    // this.$store.dispatch('getLocalStorage')
    this.$store.dispatch('getLeagues')
    // this.$store.dispatch('getTeams')
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@100;700&family=Overpass:wght@100;400;900&display=swap');
#app {
  background: #ad5389;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3c1053, #ad5389);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3c1053, #ad5389); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  font-family: 'Overpass', sans-serif;

}
.theme-toggle {
  margin-left: 20px;
}
.fade-enter-active, .fade-leave-active{
  transition: all 0.4s ease-out;
}

.fade-enter, .fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
