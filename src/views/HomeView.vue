<template>
  <div class="container">
    <div class="text">
      <div class="team-name">Beer League Heroes</div>
      <p>Stat collections for Austin Area Ice Hockey Leagues!</p>
      

      <v-menu
      transition="slide-y-transition"
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="purple"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
        Select a rink!
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
    <div>
      <v-img class="image"
        src="../assets/hockeyGuy.png"
        max-width="400px">
      </v-img>
    </div>
  </div>
</template>

<script>

export default {
    name: 'HomeView',
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight&family=VT323&display=swap');
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 4rem;

  .image {
  }

  .text {

  }
  .team-name {
    font-family: 'VT323', monospace;
    font-size: 5rem;
    line-height: 60px;
  }
}

</style>