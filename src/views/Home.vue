<template>
  <v-app>
    <v-main>
      <v-app-bar
        id="appbar"
        dense
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-bar-title>Arthur Ayres Dev</v-bar-title>
      </v-app-bar>
      
      <v-navigation-drawer
      v-model="drawer"
      absolute
      fixed
      temporary
      id="drawer"
    >

    <v-list>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                <v-list-item-avatar>
                  <v-img src="../assets/me.jpg"></v-img>
                </v-list-item-avatar>
                Arthur Ayres
              </v-list-item-title>
              <v-list-item-subtitle>arthurmbayres@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-divider></v-divider>
        <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="link">Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
      <div id="up">
        <v-btn
        class="mx-2"
        fab
        dark
        color="indigo"
        @click="$vuetify.goTo(target, options)"
        ><v-icon dark>
        mdi-arrow-up-circle
        </v-icon>
        </v-btn>
      </div>
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
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import * as easings from 'vuetify/es5/services/goto/easing-patterns'

export default {
  name: 'Home',
  data(){
    return{
      drawer: false,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),
    }
  },
  computed:{
    target () {
        return 0
      },
      options () {
        return {
          duration: 1000,
          offset: 0,
          easing: 'easeInOutCubic',
        }
      },
  },
  methods: {
    link(){
      window.location.href = 'https://api.whatsapp.com/send?phone=5582996872879';
    },
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = 'white';
      } else {
        this.bg = 'transparent';
      }
    },
  },
}
</script>

<style>
#app {
  background-image: linear-gradient(to bottom right, #bdc3c7, #2c3e50)
}

#up {
  margin-top: 5px;
  margin-left: 30px;
  z-index: 10;
  right: 2rem;
  bottom: 2rem;
  position: fixed;
}

#appbar{
  z-index: 11;
}
#drawer{
  z-index: 12;
}

</style>
