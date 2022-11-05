<template>
  <div class="container" v-if="$store.state.roster">
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
        :items="$store.state.roster"
        class="elevation-1 data-table"
        :loading="$store.state.isLoading"
        loading-text="Loading... Please wait"
        :hide-default-footer="true"
        elevation="0"
      >
      <template v-slot:[`item.position`]="{ item }">
        <v-chip :color="item.position === 'Defense' ? 'green' : 'blue'">
          {{ item.position }}
        </v-chip>
      </template>
    </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-btn to="/standings" color="warning">
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
            { text: 'Name', value: 'name', width: '200px' },
            { text: 'Age', value: 'age', width: '100px' },
            { text: 'City', value: 'city', width: '150px' },
            { text: 'DOB', value: 'dob', width: '100px' },
            { text: 'Height', value: 'height', width: '100px' },
            { text: 'Number', value: 'number', width: '100px'},
            { text: 'Position', value: 'position', width: '100px'},
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