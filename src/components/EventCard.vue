<template>
    <v-card class="card" dark color="#1e1e1e87">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle>
        {{ hockeyEvent.startDate }}
      </v-card-subtitle>
      <v-card-text>
        {{ description }}
      </v-card-text>
      <v-card-actions>
        <v-btn :href="hockeyEvent.url" target="_blank" color="#247BA0">
          Register
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>

  export default {
    name: 'hockeyCard',
    props: ['hockeyEvent'],
    computed: {
      description() {
        return this.hockeyEvent.description ? this.hockeyEvent.description : "Open hockey. Full gear required. All ages welcome. Two Goalies are allowed per session max. Any goalie wishing to skate as a player must pay for the session. If more than two goalies are on the roster it will be on a first registered basis for priority. The other skaters may be asked to pay."
      },
      title() {
        return this.hockeyEvent.name ? this.hockeyEvent.name : "Friday 5v5 Shinny"
      },
    },
  }
</script>

<style lang="scss" scoped>
.card {
  width: 500px;
}
</style>