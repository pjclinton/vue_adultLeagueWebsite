<template>
  <div>
    <div class="container" v-if="$store.state.leagues.length > 0">
      <h1>
        {{ locationName }}
      </h1>
      <div class="title">Select League</div>
      <v-slide-group
        dark
        v-model="model"
        active-class="#C8102E"
        show-arrows
      >
        <v-slide-item
          v-for="league in $store.state.leagues"
          :key="league.seasonleagueid"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? '#C8102E' : '#041E42'"
            class="ma-4 pa-4"
            height="150"
            width="300"
            dark
            @click="toggle, handleLeagueSel(league.seasonleagueid)"
  
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
      <v-divider class="pt-3 pb-3" dark></v-divider>
      <v-card dark color="#041E42" v-if="$store.state.selectedLeague">
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
  
      <v-divider class="pt-5 pb-5" dark></v-divider>
  
      <v-card dark color="#041E42" v-if="$store.state.selectedLeague">
      <v-card-title>
        Stats
      </v-card-title>
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
    <div class="container" v-else>
      Coming Soon!
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        teamHeaders: [
        { text: 'Team Name', value: 'teamname', width: '150px' },
        { text: 'Points', value: 'points', width: '100px' },
        { text: 'Wins', value: 'totalwins', width: '100px' },
        { text: 'Losses', value: 'losses', width: '100px' },
        { text: 'OT Losses', value: 'otl', width: '115px' },
        { text: 'Ties', value: 'ties', width: '100px'},
        { text: 'Last Five', value: 'lastfive', width: '115px'},
        // { text: '', value: 'teamid', width: '100px'},
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
      }
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

{
  "seasonleagueid": "32201",
  "leaguename": "AA Fall/Winter 22-23",
  "schedule": "Scheduled",
  "startdate": "09/08/2022",
  "enddate": "04/13/2023",
  "sport": "Hockey",
  "publish": 0,
  "displayschedule": "2",
  "displaystandings": "2",
  "displaystats": "2",
  "displayplayoffs": "2",
  "displaysuspensions": "2",
  "displayrules": "2",
  "sportid": "1",
  "tournament": "N",
  "archive": "N",
  "displayemail": null
}