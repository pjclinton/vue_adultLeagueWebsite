<template>
  <div class="container" v-if="$store.state.stats.length>0">
  <v-card dark color="#1e1e1e87">
    <v-card-title>
      {{ $store.state.selectedTeam?.teamname }}
    </v-card-title>
    <v-card-subtitle>
      2022-2023 Season
    </v-card-subtitle>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="$store.state.stats"
        class="elevation-1 data-table"
        :loading="$store.state.isLoading"
        loading-text="Loading... Please wait"
        elevation="0"
      >
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
            { text: 'Rank', value: 'rank'},
            { text: 'Name', value: 'name'},
            { text: 'Number', value: 'number'},
            { text: 'Position', value: 'position'},
            { text: 'Season', value: 'seasonname'},
            { text: 'Team', value: 'teamabbr'},
            { text: 'GP', value: 'gp'},
            { text: 'Goals', value: 'goals'},
            { text: 'Assists', value: 'assists'},
            { text: 'Points', value: 'points'},
            { text: 'PPG', value: 'ppgoals'},
            { text: 'SHG', value: 'shgoals'},
            { text: 'PIMs', value: 'pim'},
            { text: 'Pts/G', value: 'ppg'},
            { text: '+/-', value: 'plusminus'},
          ]
        }
   },
  }
</script>

<style lang="scss" scoped>
.container {
  padding: 4rem;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  .title {
    font-size: 22px;
    font-weight: bold;
  }

}
.table {
  padding: 2rem 4rem;
}
.data-table {
  background: transparent;
}
</style>