<template>
  <div class="container" v-if="$store.state.teams">
  <v-card dark color="#1e1e1e87" v-if="$store.state.selectedLeague">
    <v-card-title>
      {{ $store.state.selectedLeague.leaguename }}
    </v-card-title>
    <v-card-subtitle>
      {{$store.state.selectedLeague.startdate}} - {{$store.state.selectedLeague.enddate}}
    </v-card-subtitle>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="$store.state.teams"
        class="elevation-1 data-table"
        :loading="$store.state.isLoading"
        loading-text="Loading... Please wait"
        :hide-default-footer="true"
        elevation="0"
      >
      <template v-slot:[`item.teamid`]="{ item }">
        <v-btn color="#254bc8" small @click="handleRosterSel(item.teamid)">
          View Roster
        </v-btn>
      </template>
    </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-btn to="/" color="secondary">
        Back
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
        { text: 'Team Name', value: 'teamname', width: '150px' },
        { text: 'Points', value: 'points', width: '100px' },
        { text: 'Wins', value: 'totalwins', width: '100px' },
        { text: 'Losses', value: 'losses', width: '100px' },
        { text: 'OT Losses', value: 'otl', width: '115px' },
        { text: 'Ties', value: 'ties', width: '100px'},
        { text: 'Last Five', value: 'lastfive', width: '115px'},
        { text: '', value: 'teamid', width: '100px'},
        ]
      }
    },
    methods: {
      handleRosterSel(teamId) {
        console.log(teamId);
        this.$store.state.roster = []
        this.$store.dispatch('getRoster', {
          leagueid: this.$store.state.selectedLeagueId,
          teamId: teamId
        })
        this.$router.push('/roster')
      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  padding: 4rem;
}

.data-table {
  background: transparent;
}
</style>