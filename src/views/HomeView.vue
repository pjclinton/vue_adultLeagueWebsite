<template>
  <div class="container">
    <div class="text">
      <div class="team-name">Electric Lettuce</div>
      <p>Our hockey team is cooler than yours!</p>
      <v-btn to="/roster">Check out our Roster</v-btn>
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
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kolker+Brush&display=swap');
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .image {
  }

  .text {

  }
  .team-name {
      font-family: 'Kolker Brush', cursive;
      font-size: 5rem;
  }
}

</style>