<template>
  <div class="container" v-if="$store.state.chapEvents.length > 0">
    <div v-for="event in $store.state.chapEvents" :key="event.id">
      <event-card 
      :hockeyEvent="event"
      >
      </event-card>
    </div>

    <v-divider></v-divider>
    
    <div v-for="(event, index) in $store.state.pondEvents" :key="index">
      <event-card 
      :hockeyEvent="event"
      >
      </event-card>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
  export default {
    components: {
      EventCard,
    },
  }
</script>

<style lang="scss" scoped>

</style>
