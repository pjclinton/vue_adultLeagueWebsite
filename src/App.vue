<template>
  <v-app>
    <nav-bar />
    <v-main>
      <Transition name="fade" mode="out-in">
        <router-view />
      </Transition>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
<<<<<<< HEAD
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;400;700&family=Proza+Libre&family=Sarala&display=swap');
#app {
  background: #cdc6bf;
  font-family: 'Sarala', sans-serif;
  letter-spacing: .05em;
=======
@import url("https://fonts.googleapis.com/css2?family=Inter+Tight&family=Exo:wght@100;700&family=Overpass:wght@100;400;900&display=swap");
#app {
  background: rgb(4, 30, 66);
  background: linear-gradient(
    146deg,
    rgba(0, 32, 91, 1) 20%,
    rgba(191, 13, 62, 1) 100%
  );
  color: #fff;
  font-family: "Inter Tight", sans-serif;
  letter-spacing: 0.1em;
>>>>>>> origin/development
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
  font-family: 'Kanit', sans-serif;

  font-weight: 800;
}
.thin {
  
  font-weight: 100;
  font-family: 'Proza Libre', sans-serif;

}
</style>
