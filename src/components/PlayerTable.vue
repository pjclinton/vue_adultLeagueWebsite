<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
  export default {
    props: {
      headers: {},
      data: {}
    },
  }
</script>

<style lang="scss" scoped>

</style>