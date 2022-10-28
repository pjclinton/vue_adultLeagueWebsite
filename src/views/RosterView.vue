<template>
  <div>
    <div class="header">
      <div class="title">
        Active Roster
      </div>
      <v-btn to="/add-player" outlined>Add Player</v-btn>
    </div>
    <div class="table">
      <player-table
        :headers="headers"
        :data="rosterData"
      />
    </div>
  </div>
</template>

<script>
import PlayerTable from '@/components/PlayerTable.vue';
  export default {

    components: {
      PlayerTable,
    },
    data() {
      return {
       headers: [
            {
          text: 'Full Name',
          align: 'start',
          sortable: false,
          value: 'fullname',
        },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' },
        { text: 'Position', value: 'position' },
        { text: 'Notes', value: 'notes' },
        { text: 'Jerssey', value: 'jerseys' },
        { text: 'Dues', value: 'dues' },
        { text: 'Number', value: 'number' },
       ],
      }
    },
    computed: {
      rosterData () {
        return this.$store.state.roster.map(player => {
          return {
            ...player,
            fullname: `${player.firstname} ${player.lastname}`
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  background: #eee;

  .title {
    font-size: 22px;
    font-weight: bold;
  }

}
.table {
  padding: 2rem 4rem;
}
</style>