<template>
  <div class="container" 
  v-if="$store.state.leagues.length>0"
  >
    <div class="text">
      <div class="location thin">
        Austin, Texas - Adult League Hockey
      </div>
      <div class="team-name">Beer League Heroes</div>
      <p class="pt-6">View standings and rosters for Austin area Adult Hockey leagues.</p>
      <v-menu
      transition="slide-y-transition"
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#0A8754"
          dark
          v-bind="attrs"
          v-on="on"
        >
        Select a League! 
        <v-icon
        right
        dark
      >
        mdi-chevron-down
      </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in $store.state.leagues"
          :key="i"
          @click='handleLeagueSel(item.seasonleagueid)'
        >
          <v-list-item-title>{{ item.leaguename }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
    <div class="d-none d-md-block">
      <v-img class="image"
        src="../assets/goalie1.svg"
        width="500px">
      </v-img>
    </div>
  </div>
</template>

<script>

export default {
    name: 'HomeView',
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
    methods: {
      handleLeagueSel(leagueid) {
        this.$store.dispatch('getTeams', leagueid);
        this.$router.push('/standings');
      }
    }
  }

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight&family=VT323&display=swap');
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 4rem;

  .location {
    text-transform: uppercase;
    font-size: 18px;
  }
  .team-name {
    font-family: 'Exo', sans-serif;
    font-weight: 900;
    font-size: 4rem;
    line-height: 80px;
  }
  .image {
    opacity: .65;
  }
}

</style>