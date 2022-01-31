<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" dark>
      <v-list-item class="sideMenu" light>
        <v-list-item-content>
          <v-img
            src="./assets/logo.png"
            max-width="80"
            max-height="80"
            class="center"
          ></v-img>
          <v-list-item-title class="text-h6"> Arthur Ayres </v-list-item-title>
          <v-list-item-subtitle> Developer </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="goldDivider"></v-divider>
      <v-divider class="goldDivider"></v-divider>
      <v-divider class="goldDivider"></v-divider>
      <v-divider class="goldDivider"></v-divider>

      <v-list dense nav>
        <v-list-item-group active-class="selected">
          <v-list-item link @click="menuIndex(0)">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="$ml.with('VueJS').get(`menuProjects`)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="menuIndex(1)">
            <v-list-item-icon>
              <v-icon>mdi-code-not-equal-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="$ml.with('VueJS').get(`menuTec`)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="menuIndex(2)">
            <v-list-item-icon>
              <v-icon>mdi-help-box</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="$ml.with('VueJS').get(`menuAbout`)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="menuIndex(3)">
            <v-list-item-icon>
              <v-icon>mdi-contacts</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="$ml.with('VueJS').get(`menuContact`)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div :style="menuBarStyle"></div>
        </v-list-item-group>
      </v-list>
      
      <template v-slot:append>
        <div class="pa-2">
        <v-btn icon dark @click="github">
          <v-icon x-large dark> mdi-github </v-icon>
        </v-btn>

        <v-btn icon dark @click="linkedin" class="centerSocialNet">
          <v-icon x-large dark> mdi-linkedin </v-icon>
        </v-btn>

        <v-btn icon dark @click="instagram">
          <v-icon x-large dark> mdi-instagram </v-icon>
        </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main class="mainContent">
      <br />
      <v-row class="d-flex flex-row-reverse switchLang">
        <label class="switchLabel">English</label
        ><v-switch
          v-model="switchLang"
          @click="[switchLang ? $ml.change('EN') : $ml.change('PT-BR')]"
          dark
          inset
        ></v-switch
        ><label class="switchLabel">Português</label>
        <v-spacer></v-spacer>
        <v-btn fab color="#2b2a2a" class="menuButton">
          <v-icon color="#ffd700" @click="drawer = !drawer">mdi-menu</v-icon>
        </v-btn>
      </v-row>
      <v-expand-x-transition>
        <v-container v-show="projectMenu">
          <Projects />
        </v-container>
      </v-expand-x-transition>
      <v-expand-transition>
        <v-container v-show="tecMenu">
          <Tecnologies />
        </v-container>
      </v-expand-transition>
      <v-expand-transition>
        <v-container v-show="aboutMenu">
          <About />
        </v-container>
      </v-expand-transition>
      <v-expand-transition>
        <v-container v-show="contactMenu">
          <Contact :language="switchLang"/>
        </v-container>
      </v-expand-transition>
    </v-main>
  </v-app>
</template>

<script>
import Projects from "./components/Projects";
import Tecnologies from "./components/Tecnologies";
import About from "./components/About";
import Contact from "./components/Contact";

export default {
  name: "App",

  components: {
    Projects,
    Tecnologies,
    About,
    Contact,
  },

  data: () => ({
    drawer: true,
    sleepTime: 300,
    menu: 1,
    switchLang: false,
    projectMenu: true,
    tecMenu: false,
    aboutMenu: false,
    contactMenu: false,
    items: [
      { title: "Projects", icon: "mdi-view-dashboard", index: 0 },
      { title: "Tecnologies", icon: "mdi-code-not-equal-variant", index: 1 },
      { title: "About", icon: "mdi-help-box", index: 2 },
    ],
    menuBarStyle: {
      width: "4px",
      height: "38px",
      backgroundColor: "#FFD700",
      position: "relative",
      left: "-2px",
      top: "-174px",
      display: "flex",
    },
  }),
  methods: {
    async menuIndex(index) {
      const moveValue = 44;
      const baseValue = -174;
      let finalValue = moveValue * index + baseValue;
      this.menuBarStyle.top = `${finalValue}` + "px";
      this.menu = index;
      switch (index) {
        case 0:
          this.tecMenu = false;
          this.aboutMenu = false;
          this.contactMenu = false;
          await this.sleep(this.sleepTime);
          this.projectMenu = true;
          break;
        case 1:
          this.projectMenu = false;
          this.aboutMenu = false;
          this.contactMenu = false;
          await this.sleep(this.sleepTime);
          this.tecMenu = true;
          break;
        case 2:
          this.projectMenu = false;
          this.tecMenu = false;
          this.contactMenu = false;
          await this.sleep(this.sleepTime);
          this.aboutMenu = true;
          break;
        case 3:
          this.projectMenu = false;
          this.aboutMenu = false;
          this.tecMenu = false;
          await this.sleep(this.sleepTime);
          this.contactMenu = true;
      }
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    linkedin() {
      window.open("https://www.linkedin.com/in/arthurayresdev/", "_blank");
    },
    instagram() {
      window.open("https://www.instagram.com/arthurmbayres/", "_blank");
    },
    github() {
      window.open("https://github.com/AFS12", "_blank");
    },
  },
};
</script>

<style>
.v-main__wrap {
  background-color: #2b2a2a;
  color: white;
}

.sideMenu {
  text-align: center;
  background-color: #e6e6e6;
}

.center {
  display: block;
  margin: 0 auto;
}

.goldDivider {
  background-color: #ffd700;
}

.mainContent {
  text-align: center;
  justify-content: center;
}

.selected {
  color: #f3e9b3 !important;
}

.switchLang {
  margin-right: 35px !important;
}

.switchLabel {
  margin-top: 20px;
  margin-right: 15px;
}

.menuButton {
  margin-left: 20px;
}

.pa-2{
  text-align: center;
}

.centerSocialNet{
  margin-right: 10px;
  margin-left: 10px;
}
</style>