<template>
  <div>
    <div class="heading">
      <h1>Pick Up Hockey Events</h1>
      <h2>Select Rink</h2>
    </div>

    <v-item-group>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-item v-slot="{ toggle }">
              <v-card
                :color="location === 'chap' ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="200"
                @click="toggle, handleClick('chap')"
              >
                <v-scroll-y-transition>
                  <div class="text-h2 flex-grow-1 text-center">
                    Chaparelle Ice
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="6">
            <v-item v-slot="{ toggle }">
              <v-card
                :color="location === 'pond' ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="200"
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
    this.$store.dispatch("getChapSkates");
    this.$store.dispatch("getPondSkates");
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
  padding: 4rem;
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
