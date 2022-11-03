<template>
  <div v-if="$store.state.teams">
    <ul v-for="team in $store.state.teams" :key="team.id">
      <router-link to="/roster">
        <li @click="handleRosterSel(team.teamid)">
        {{team.teamname}}
      </li>
      </router-link>
  
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      handleRosterSel(teamId) {
        this.$store.state.roster = []
        this.$store.dispatch('getRoster', teamId)
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>