<template>
  <div class="profile-container mt-10" v-if="$store.state.auth.userProfile">
    <v-card color="primary" dark max-width="800px">
      <v-card-title>
        User Profile
      </v-card-title>
      <v-card-subtitle>
        
      </v-card-subtitle>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              username: <br>
              {{ $store.state.auth.userProfile.username }}
            </v-col>
          </v-row>
        </v-container>
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
    created() {
      if (!this.$store.state.auth.userProfile) {
        this.$store.dispatch("getUserProfile")
      }
    }
  }
</script>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  justify-content: center;
}
</style>