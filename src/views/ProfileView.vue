<template>
  <div>
    <v-card>
      <v-card-title>
        {{ $store.state.userProfile.email }}
      </v-card-title>
      <v-card-subtitle>

      </v-card-subtitle>
      <v-card-text>

      </v-card-text>
      <v-card-actions>
        <v-btn color="secondary">Edit</v-btn>
        <v-btn color="accent">Save</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>