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
      <router-view></router-view>
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
