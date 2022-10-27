<template>
  <div>
    <div class="header">
      <div class="title">
        Active Roster
      </div>
      <v-btn elevation="9" to="/add-player" outlined>Add Player</v-btn>
    </div>
    <div class="table">
      <player-table />
    </div>
  </div>
</template>

<script>
import PlayerTable from '@/components/PlayerTable.vue';
  export default {
    components: {
      PlayerTable,
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

  .title {
    font-size: 22px;
    font-weight: bold;
  }
}
</style>