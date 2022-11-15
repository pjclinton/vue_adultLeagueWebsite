<template>
  <div>
    <div class="container" v-if="$store.state.leagues.length > 0">
      <div class="thin mt-4 pb-4">Select League</div>
      <v-divider></v-divider>
      <v-slide-group
<<<<<<< HEAD
=======
        v-model="model"
>>>>>>> origin/development
        active-class="secondary"
        show-arrows
      >
        <v-slide-item
          v-for="league in $store.state.leagues"
          :key="league.seasonleagueid"
          v-slot="{ active }"
        >
          <v-card
            :color="active ? 'secondary' : 'primary'"
            class="ma-4 pa-4"
            height="100"
            max-width="350"
            dark
            @click="handleLeagueSel(league.seasonleagueid)"
  
          >
              <v-row
                class="fill-height"
              >
                  <v-card-title>
                    {{ league.leaguename }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ league.startdate }} - {{ league.enddate }}
                  </v-card-subtitle>
              </v-row>
        
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <v-divider class="pt-3 pb-3"></v-divider>

      <div v-if="$store.state.selectedLeague" class="thin mt-4 pb-4">Standings</div>
      <v-card class="mx-4 mb-6" dark color="primary" v-if="$store.state.selectedLeague">
      <v-card-title>
        {{ $store.state.selectedLeague.leaguename }}
      </v-card-title>
      <v-card-subtitle>
        {{$store.state.selectedLeague.startdate}} - {{$store.state.selectedLeague.enddate}}
      </v-card-subtitle>
      <v-card-text>
        <v-data-table
          :headers="teamHeaders"
          :items="$store.state.teams"
          class="elevation-1 data-table"
          :loading="$store.state.isLoading"
          loading-text="Loading... Please wait"
          :hide-default-footer="true"
          elevation="0"
          color="transparent"
        >
        <template v-slot:[`item.teamid`]="{ item }">
          <v-btn color="#254bc8" small @click="handleRosterSel(item.teamid)">
            View Roster
          </v-btn>
        </template>
      </v-data-table>
      </v-card-text>
      </v-card>
  
      <div v-if="$store.state.selectedLeague" class="thin mt-4 pb-4">Stats</div>
      <v-card class="mx-4 mb-6" dark color="primary" v-if="$store.state.selectedLeague">
        <v-card-text>
          <v-data-table
            :headers="statsHeaders"
            :items="$store.state.stats"
            class="elevation-1 data-table"
            :loading="$store.state.isStatsLoading"
            loading-text="Loading... Please wait"
            elevation="0"
            color="transparent"
          >
          <template v-slot:[`item.teamid`]="{ item }">
            <v-btn color="#254bc8" small @click="handleRosterSel(item.teamid)">
              View Roster
            </v-btn>
          </template>
        </v-data-table>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        teamHeaders: [
        { text: 'Rank', value: 'rank', width: '' },
        { text: 'Team', value: 'teamname', width: '' },
        { text: 'GP', value: 'gp', width: '' },
        { text: 'W', value: 'totalwins', width: '' },
        { text: 'L', value: 'totallosses', width: '' },
        { text: 'OT', value: 'owins', width: '' },
        { text: 'PTS', value: 'points', width: '' },
        { text: 'GF', value: 'gf', width: ''},
        { text: 'GA', value: 'ga', width: ''},
        { text: 'Diff', value: 'diff', width: '' },
        { text: 'Last Five', value: 'lastfive', width: '' },
        { text: 'Streak', value: 'streak', width: '' },
        // { text: '', value: 'teamid', width: ''},
        ],
        statsHeaders: [
        { text: "Rank", value: "rank"},
        { text: "Name", value: "name"},
        { text: "Team", value: "teamabbr"},
        { text: "GP", value: "gp"},
        { text: "Goals", value: "goals"},
        { text: "Assists", value: "assists"},
        { text: "Points", value: "points"},
        { text: "PPG", value: "ppgoals"},
        { text: "SHG", value: "shgoals"},
        { text: "PIMs", value: "pim"},
        { text: "Pts/G", value: "ppg"},
      ],
      }
    },
    async created () {
      this.$store.dispatch('getLeagues', this.$route.params.id);
    },
    methods: {
      handleLeagueSel(leagueid) {
        this.$store.dispatch('getTeams', leagueid);
        this.$store.dispatch('getStats', leagueid);
      }
    },
    computed: {
      locationName() {
        return this.$route.params.id === 'crossover' ? 'The Crossover' : 'Coming Soon!'
      },
    },
    watch: {
      '$route.params.id': {
        handler: function(id) {
          this.$store.dispatch('getLeagues', this.$route.params.id);
        }, 
        deep: true,
        immediate: true
      }
    },
  }
</script>

<style lang="scss" scoped>
.theme--dark.v-data-table {
  background: transparent;
}
</style>