<template>
  <v-container fluid>
      <v-parallax
        dark
        height="900"
        src="../assets/background.jpg"
      >
  <br>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-3 font-weight-thin mb-4">
          Web And Game Developer 
        </h1>
        <h4 class=" display-1 mb-4">
          Arthur Ayres
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
      <br>
      <br>
      <v-row>
        <v-col
          class="text-center"
          cols="12"
          md="3"
        >
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            elevation="7"
            outlined
            shaped
          >
            <v-card-title><h3>Projects</h3></v-card-title>
            <h1>FIASHJUIOPDFAHJS</h1>
            <h1>FIASHJUIOPDFAHJS</h1>
            <h1>FIASHJUIOPDFAHJS</h1>
            <h1>FIASHJUIOPDFAHJS</h1>
            <h1>FIASHJUIOPDFAHJS</h1>
          </v-card>
            <br><br>
          <v-card
            elevation="7"
            outlined
            shaped
            
          >
            <v-card-title><h3>About</h3></v-card-title>
            <v-layout justify-center>
              <v-img src="../assets/me.jpg" max-width="400" max-height="400" ></v-img>
            </v-layout>

            <br>
            <br>
            <h1>Tecnologies</h1>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>

            <h2>Front-End</h2>
            <h3>Vue.js</h3>
            <h3>Java Script</h3>
            <h4>Html (Learning)</h4>
            <h4>CSS (Learning)</h4>
            <br>
            <h2>Back-End</h2>
            <h3>Laravel</h3>
            <h4>PHP (Learning)</h4>
            <br>
            <h2>Game Develop</h2>
            <h4>Unreal (Learning)</h4>
            <h4>Unity (Learning)</h4>
            <br><br>
          </v-card>
          </v-col>
        <v-col
          class="text-center"
          cols="12"
          md="3"
        >
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
.v-application h4 {
  font-family: 'serif';
}
#img{
  align-content: center;
}
</style>