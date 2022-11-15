<template>
  <div>
    <div class="heading">
      <div class="xblack">Pick Up Hockey Events</div>
      <div class="thin">Select Rink</div>
    </div>

    <v-item-group>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-item v-slot="{ toggle }">
              <v-card
                :color="location === 'chap' ? 'primary' : 'secondary'"
                class="d-flex align-center"
                :dark="location === 'chap'"
                height="150"
                @click="toggle, handleClick('chap')"
              >
                <v-scroll-y-transition>
                  <div class="text-h2 flex-grow-1 text-center">
                    Chaparral Ice
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="6">
            <v-item v-slot="{ toggle }">
              <v-card
                :color="location === 'pond' ? 'primary' : 'secondary'"
                class="d-flex align-center"
                :dark="location === 'pond'"
                height="150"
                @click="toggle, handleClick('pond')"
              >
                <v-scroll-y-transition>
                  <div class="text-h2 flex-grow-1 text-center">The Pond</div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>

    <div
      class="container"
      v-if="$store.state.chapEvents.length > 0 && location === 'chap'"
    >
      <div
        class="events"
        v-for="event in $store.state.chapEvents"
        :key="event.id"
      >
        <event-card :hockeyEvent="event"> </event-card>
      </div>
    </div>
    <div class="container" v-if="location === 'pond'">
      <div v-for="(event, index) in $store.state.pondEvents" :key="index">
        <event-card :hockeyEvent="event"> </event-card>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
export default {
  components: {
    EventCard,
  },
  data() {
    return {
      location: "chap",
    };
  },
  created() {
    if (!this.$store.state.chapEvents) {
      this.$store.dispatch("getChapSkates");
    }
    if (!this.$store.state.pondEvents) {
      this.$store.dispatch("getPondSkates");
    }
  },
  methods: {
    handleClick(location) {
      this.location = location;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 4rem 4rem 0rem 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.heading {
  padding: 2rem 4rem 0rem 4rem;
}
</style>
