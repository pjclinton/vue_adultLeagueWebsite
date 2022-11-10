<template>
  <div>
    <v-card dark color="#1e1e1e87">
      <v-card-title>
        {{ hockeyEvent.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ hockeyEvent.startDate }}
      </v-card-subtitle>
      <v-card-text>
        {{ description }}
      </v-card-text>
      <v-card-action>
        <v-btn :href="hockeyEvent.url" target="_blank" color="#247BA0">
          Register
        </v-btn>
      </v-card-action>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'hockeyCard',
    props: ['hockeyEvent'],
    computed: {
      description() {
        return this.hockeyEvent.description ? this.hockeyEvent.description : "Open hockey. Full gear required. All ages welcome. Two Goalies are allowed per session max. Any goalie wishing to skate as a player must pay for the session. If more than two goalies are on the roster it will be on a first registered basis for priority. The other skaters may be asked to pay."
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>