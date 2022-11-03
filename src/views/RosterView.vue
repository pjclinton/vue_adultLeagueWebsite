<template>
  <div>
    <div v-if="!$store.state.isLoading">
      <ul v-for="person in $store.state.roster" :key="person.playerid">
        <li>
          {{person.name}}
        </li>
      </ul>
    </div>
    <div class="loader text-center" v-if="$store.state.isLoading">
      <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
    </div>
  </div>
</template>

<script>
  export default {

    components: {

    },
    data() {
        return {
          
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

  .title {
    font-size: 22px;
    font-weight: bold;
  }

}
.table {
  padding: 2rem 4rem;
}
</style>