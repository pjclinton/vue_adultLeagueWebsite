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
    <div class="testing">
      {{ test }}
    </div>
  </div>
</template>

<script>
import PlayerTable from '@/components/PlayerTable.vue';
import { db } from '../plugins/firebase';
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
      { text: 'Jersey', value: 'jerseys' },
      { text: 'Dues', value: 'dues' },
      { text: 'Number', value: 'number' },
     ],
     test: ''
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
    async created() {
      const querySnapshot = await getDocs(collection(db, "rosters"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data())
      })
  }
  }
</script>

<style lang="scss" scoped>
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
</style>