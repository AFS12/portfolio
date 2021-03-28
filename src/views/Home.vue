<template>
  <v-app>
    <v-parallax
        dark
        :height= parallaxImg
        src="../assets/background2.jpg"
      >
  <br>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="auto"
      >
          <v-img src="../assets/logo.png" max-width="300" max-height="300"></v-img>
      </v-col>
      <v-col
        class="text-center"
        cols="auto"
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
    <v-main id="main">
      <v-card
        elevation="7"
        tile
        min-height="500"
        max-height="6000"
      >
            <v-tabs
              v-model="tab"
              background-color="black"
              centered
              dark
              icons-and-text
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#tab-1">
                Projects
                <v-icon>mdi-sitemap</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Tecnologies
                <v-icon>mdi-code-not-equal-variant</v-icon>
              </v-tab>

              <v-tab href="#tab-3">
                About
                <v-icon>mdi-account-box</v-icon>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="i in 3"
                :key="i"
                :value="'tab-' + i"
              >
                <v-card flat  v-if="i == 1">
                  <v-card-title id="proj"><h1>Projects</h1></v-card-title>
                  <v-card-text>
                    <v-container class="pa-4 text-center">
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
                        <template v-for="(item, i) in items">
                          <v-col
                            :key="i"
                            cols="12"
                            md="3"
                          >
                            <v-hover v-slot="{ hover }">
                              <v-card
                                id="projects"
                                :elevation="hover ? 12 : 2"
                                :class="{ 'on-hover': hover }"
                              >
                                <v-img
                                  :src="getImgUrl(item.img)"
                                  height="225px"
                                >
                                  <v-card-title :class="item.color">
                                    <v-row
                                      class="fill-height flex-column"
                                      justify="space-between"
                                    >
                                      <p class="mt-4 subheading text-left">
                                        {{ item.title }}
                                      </p>

                                      <div>
                                        <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                                          {{ item.text }}
                                        </p>
                                        <p class="caption font-weight-medium font-italic text-left" v-show="hover">
                                          {{ item.tecnologies }}
                                        </p>
                                      </div>

                                      <div class="align-self-center">
                                        <v-btn
                                          v-for="(icon, index) in icons"
                                          v-show="hover"
                                          :href="item.src"
                                          :key="index"
                                          :class="{ 'show-btns': hover }"
                                          color="black"
                                        >
                                          {{ btnText }}
                                          <v-icon
                                            :class="{ 'show-btns': hover }"
                                            color="white"
                                          >
                                            {{ icon }}
                                          </v-icon>
                                        </v-btn>
                                      </div>
                                    </v-row>
                                  </v-card-title>
                                </v-img>
                              </v-card>
                            </v-hover>
                          </v-col>
                        </template>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>

                <v-card flat v-if="i == 2">
                  <v-card-title id="tec"><h1>Tecnologies</h1></v-card-title>
                  <v-card-text>
                    <h2>Front-End</h2>
                    <br>
                    <h3><v-icon>mdi-vuejs</v-icon> - Vue.js</h3>
                    <h3><v-icon>mdi-language-javascript</v-icon> - Java Script</h3>
                    <h4><v-icon>mdi-language-html5</v-icon> - Html (Learning)</h4>
                    <h4><v-icon>mdi-language-css3</v-icon> - CSS (Learning)</h4>
                    <br>
                    <h2>Back-End</h2>
                    <br>
                    <h3><v-icon>mdi-laravel</v-icon> - Laravel</h3>
                    <h4><v-icon>mdi-language-php</v-icon> - PHP (Learning)</h4>
                    <br>
                    <h2>Game Develop</h2>
                    <br>
                    <h4><v-icon>mdi-unreal</v-icon> - Unreal (Learning)</h4>
                    <h4><v-icon>mdi-unity</v-icon> - Unity (Learning)</h4>
                    <br><br>
                  </v-card-text>
                </v-card>

                <v-card flat v-if="i == 3">
                  <v-card-title id="about"><h1>About</h1></v-card-title>
                  <v-card-text>
                    <v-layout justify-center>
                      <v-img src="../assets/me.jpg" max-width="300" max-height="300" ></v-img>
                    </v-layout>
                    <br>
                    <h3>Hey everyone,<br>
                        I'm Arthur Ayres, Web and games developer. <br> <br>

                        I have always loved computing, games and programming and I decided to turn that love into my best skills. <br>

                        Currently studying Systems Analysis and Development at Faculdade Centro Universitário Mario Pontes Jucá - UMJ. <br>

                        My first development stage was at Hospital Unimed Maceió for 4 months where I developed skills with Vue.js and Laravel. <br>
                        
                        I am currently interning at Agill Produtos e Serviços.
                        </h3>
                    <br>

                    <v-btn
                      fab
                      dark
                      @click="github"
                    >
                      <v-icon x-large dark>
                        mdi-github
                      </v-icon>
                    </v-btn>
                   &emsp;
                  <v-btn
                      fab
                      dark
                      @click="linkedin"
                    >
                      <v-icon x-large dark>
                        mdi-linkedin
                      </v-icon>
                    </v-btn>
                   &emsp;
                  <v-btn
                      fab
                      dark
                      @click="instagram"
                    >
                      <v-icon x-large dark>
                        mdi-instagram
                      </v-icon>
                    </v-btn>
                    <br>
                    <br>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
      

      <v-footer
        dark
        padless
      >
        <v-card
          class="flex"
          flat
          tile
        >
          <v-card-title class="py-2 white--text text-center">
            <h5>@ Arthur Ayres (2021 - {{ new Date().getFullYear() }})</h5>
            <v-spacer></v-spacer>
            
            <v-spacer></v-spacer>
            <v-btn
              icon
              dark
              @click="github"
            >
              <v-icon x-large dark>
                mdi-github
              </v-icon>
            </v-btn>

            <v-btn
                icon
                dark
                @click="linkedin"
            >
              <v-icon x-large dark>
                mdi-linkedin
              </v-icon>
            </v-btn>
            
            <v-btn
                icon
                dark
                @click="instagram"
            >
              <v-icon x-large dark>
                mdi-instagram
              </v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-footer>
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
      icons: ['mdi-arrow-right-thick'],
      btnText: 'Acesse',
      tab: null,
      parallaxImg: 1000,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),
      items: [
        {
          title: 'Portal Do Contribuinte',
          text: `Website for Some Northeastern City Halls`,
          tecnologies: 'Based on AdminLTE 2 | HTML, CSS, JS, VUE, LARAVEL',
          src: 'http://servicos-vicosa.prefeitura.info/',
          img: 'portalContribuinte',
          color: 'title black--text'
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
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
        var myElement = document.getElementById('about');
        var posicoes = myElement.getBoundingClientRect();
        // console.log(posicoes.y);
        return posicoes.y
      },
    target2 () {
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
    getImgUrl(pet) {
      var images = require.context('../assets/', false, /\.jpg$/)
      return images('./' + pet + ".jpg")
    },
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
    instagram(){
      window.open('https://www.instagram.com/arthurmbayres/');
    },
    github(){
      window.open('https://github.com/AFS12');
    },
  },
}
</script>

<style scoped>

</style>


<style>
#projects {
  transition: opacity .4s ease-in-out;
}

#projects:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

#main {
  /* background-image: linear-gradient(to bottom right, rgba(255,0,0,0), rgb(77, 75, 75)); */
}

#img{
  -webkit-transition: all 7.7s ease;
  transition: all 7.7s ease;
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
