<template>
  <v-app>
    <app-bar />
    <v-main>
      <Transition name="fade" mode="out-in">
        <router-view />
      </Transition>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
  },

  data: () => ({
  }),
  async created() {
    this.$store.dispatch("getLeagues");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@100;700&family=Inter+Tight&family=Overpass:wght@100;400;900&display=swap");
#app {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    146deg,
    rgba(0, 32, 91, 1) 40%,
    rgba(191, 13, 62, 1) 100%
  );
  color: #fff;
  font-family: "Inter Tight", sans-serif;
  letter-spacing: .05em;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-out;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.xblack {
  font-weight: 800;
}
.thin {
  font-weight: 100;
}
</style>
