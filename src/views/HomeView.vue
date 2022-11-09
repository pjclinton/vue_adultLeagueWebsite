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
      offset-y
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#254bc8"
          dark
          v-bind="attrs"
          v-on="on"
          large
        >
        Select a League! 
        <v-icon
        right
        dark
        class="pl-6 pr-2"
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
        src="../assets/greatone.svg"
        width="300px">
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
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3rem 4rem;

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
    opacity: .85;
  }
}

</style>