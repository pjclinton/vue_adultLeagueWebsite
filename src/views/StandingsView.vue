<template>
  <div class="container" v-if="$store.state.teams">
    <v-card dark color="#1e1e1e87" v-if="$store.state.selectedLeague">
      <v-card-title>
        {{ $store.state.selectedLeague.leaguename }}
      </v-card-title>
      <v-card-subtitle>
        {{ $store.state.selectedLeague.startdate }} -
        {{ $store.state.selectedLeague.enddate }}
      </v-card-subtitle>
      <v-card-text>
        <v-data-table
          :headers="standingHeaders"
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
        <v-btn to="/" color="#C8102E"> Back </v-btn>
      </v-card-actions>
    </v-card>
    <br />
    <v-card dark color="#1e1e1e87" v-if="$store.state.stats.length > 0">
      <v-card-title>
        {{ $store.state.selectedTeam?.teamname }}
      </v-card-title>
      <v-card-subtitle> 2022-2023 Season </v-card-subtitle>
      <v-card-text>
        <v-data-table
          :headers="statsHeaders"
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
      standingHeaders: [
        { text: "Team Name", value: "teamname"},
        { text: "Points", value: "points"},
        { text: "Wins", value: "totalwins"},
        { text: "Losses", value: "losses"},
        { text: "OT Losses", value: "otl"},
        { text: "Ties", value: "ties"},
        { text: "Last Five", value: "lastfive"},
        { text: "", value: "teamid"},
      ],
      statsHeaders: [
        { text: "Rank", value: "rank"},
        { text: "Name", value: "name"},
        { text: "Number", value: "number"},
        { text: "Position", value: "position"},
        { text: "Season", value: "seasonname"},
        { text: "Team", value: "teamabbr"},
        { text: "GP", value: "gp"},
        { text: "Goals", value: "goals"},
        { text: "Assists", value: "assists"},
        { text: "Points", value: "points"},
        { text: "PPG", value: "ppgoals"},
        { text: "SHG", value: "shgoals"},
        { text: "PIMs", value: "pim"},
        { text: "Pts/G", value: "ppg"},
        { text: "+/-", value: "plusminus"},
      ],
    };
  },
  methods: {
    handleRosterSel(teamId) {
      console.log(teamId);
      this.$store.state.roster = [];
      this.$store.dispatch("getRoster", {
        leagueid: this.$store.state.selectedLeagueId,
        teamId: teamId,
      });
      this.$router.push("/roster");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 4rem;
}

.data-table {
  background: transparent;
}
</style>
