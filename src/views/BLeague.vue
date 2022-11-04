<template>
  <div class="container" v-if="$store.state.teams">
  <v-card>
    <v-card-title>
      B League
    </v-card-title>
    <v-card-subtitle>
      2022-2023 Season
    </v-card-subtitle>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="$store.state.teams"
        class="elevation-1"
        :loading="$store.state.isLoading"
        loading-text="Loading... Please wait"
        :hide-default-footer="true"
        elevation="0"
      >
      <template v-slot:[`item.teamid`]="{ item }">
        <v-btn small @click="handleRosterSel(item.teamid)">
          View Roster
        </v-btn>
      </template>
    </v-data-table>
    </v-card-text>
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
        { text: 'OT Losses', value: 'otl', width: '100px' },
        { text: 'Ties', value: 'ties', width: '100px'},
        { text: 'Last Five', value: 'lastfive', width: '100px'},
        { text: '', value: 'teamid', width: '100px'},
        ]
      }
    },
    methods: {
      handleRosterSel(teamId) {
        this.$store.state.roster = []
        this.$store.dispatch('getRoster', teamId)
        this.$router.push('/roster')
      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  padding: 4rem;
}
</style>