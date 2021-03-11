<template>
  <v-app>
    <v-app-bar
        id="appbar"
        dense
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title name="bar">Arthur Ayres Dev</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      fixed
      temporary
      id="drawer"
    >

    <v-list>

          <v-list-item >
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

        <br>
        <v-divider></v-divider>
        <v-divider></v-divider>
        <v-divider></v-divider>
        <br>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="$vuetify.goTo(target2, options)">
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo(target3, options)">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="link">Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <br>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <br>

      <v-row>
        <v-col cols="12" md="4">
        </v-col>
        
        <v-col cols="12" md="4">
          <v-btn
            elevation="8"
            fab
            outlined
            @click="linkedin"
          >
            <v-icon x-large dark>
              mdi-linkedin
            </v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" md="4">
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-parallax
        dark
        height="1000"
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
    <v-main>
      
      <v-row
      justify="center"
  
      style="min-height: 160px;"
    >
      <v-col class="shrink">
        <v-expand-transition>
          <v-card
           id="up"
            v-show="expand"
            @click="$vuetify.goTo(target, options)"
            color="indigo"
            rounded
            height="40"
            width="40"
          >
            <v-icon x-large dark>
              mdi-arrow-up-circle
            </v-icon>
          </v-card>
        </v-expand-transition>
      </v-col>
    </v-row>

      <v-container fluid>
      
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
            <v-card-title id="proj"><h3>Projects</h3></v-card-title>
            <h1>Projetos aqui</h1>
            <h1>Projetos aqui</h1>
            <h1>Projetos aqui</h1>
            <h1>Projetos aqui</h1>
            <h1>Projetos aqui</h1>
          </v-card>
            <br><br>
          <v-card
            elevation="7"
            outlined
            shaped
            
          >
            <v-card-title id="about"><h3>About</h3></v-card-title>
            <v-layout justify-center>
              <v-img src="../assets/me.jpg" max-width="300" max-height="300" ></v-img>
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
      expand: false,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed:{
    target3 () {
        this.closeDrawer();
        var myElement = document.getElementById('about');
        var posicoes = myElement.getBoundingClientRect();
        // console.log(posicoes.y);
        return posicoes.y
      },
    target2 () {
        this.closeDrawer();
        var myElement = document.getElementById('proj');
        var posicoes = myElement.getBoundingClientRect();
        // console.log(posicoes.y);
        return posicoes.y
      },
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
    handleScroll () {
      // Any code to be executed when the window is scrolled
      console.log();
      if (window.scrollY > 200) {
        this.expand = true;
      }else{
        this.expand = false;
      }
    },
    link(){
      window.open('https://api.whatsapp.com/send?phone=5582996872879');
    },
    linkedin(){
      window.open('https://www.linkedin.com/in/arthur-mendon%C3%A7a-1a7511169/');
    },
    closeDrawer() {
      this.drawer = !this.drawer;
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
  right: 3rem;
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
