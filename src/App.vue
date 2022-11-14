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
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;400;700&family=Proza+Libre&family=Sarala&display=swap');
#app {
  background: #cdc6bf;
  font-family: 'Sarala', sans-serif;
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
  font-family: 'Kanit', sans-serif;

  font-weight: 800;
}
.thin {
  
  font-weight: 100;
  font-family: 'Proza Libre', sans-serif;

}
</style>
