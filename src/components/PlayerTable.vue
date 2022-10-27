<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="rosterData"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
       data: [],
       headers: [
            {
          text: 'First Name',
          align: 'start',
          sortable: false,
          value: 'firstname',
        },
        { text: 'Last Name', value: 'lastname' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' },
        { text: 'Position', value: 'position' },
        { text: 'Dues', value: 'dues' },
       ],
      }
    },
    computed: {
      rosterData () {
        return this.$store.state.roster
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>