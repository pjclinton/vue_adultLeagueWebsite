<template>
  <div class="container">
    <div class="text">
<<<<<<< HEAD
      <div class="location thin">
        Austin, Texas - Adult League Hockey
      </div>
      <div class="team-name xblack">Beer League Heroes</div>
      <p class="pt-6">View standings and rosters for Austin area Adult Hockey leagues.</p>
        <v-btn
          color="#254bc8"
          dark
          v-bind="attrs"
          v-on="on"
          large
          to="/locations/crossover"
        >
=======
      <div class="location thin">Austin, Texas - Adult League Hockey</div>
      <div class="team-name">Beer League Heroes</div>
      <p class="pt-6">
        View standings and rosters for Austin area Adult Hockey leagues.
      </p>
      <v-btn
        color="#254bc8"
        dark
        v-bind="attrs"
        v-on="on"
        large
        to="/locations/crossover"
      >
>>>>>>> origin/development
        View Crossover Leagues
      </v-btn>
    </div>
    <div class="d-none d-md-block">
      <v-img class="image" src="../assets/greatone.svg" width="300px"> </v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
    ],
  }),
  methods: {
    handleLeagueSel(leagueid) {
      this.$store.dispatch("getTeams", leagueid);
      this.$store.dispatch("getStats", leagueid);
      this.$router.push("/standings");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3rem 4rem;
  max-height: 600px;

  .location {
    text-transform: uppercase;
    font-size: 18px;
  }
  .team-name {
<<<<<<< HEAD
=======
    font-family: "Exo", sans-serif;
    font-weight: 900;
>>>>>>> origin/development
    font-size: 4rem;
    line-height: 60px;
  }
  .image {
    opacity: 0.85;
  }
}
</style>
