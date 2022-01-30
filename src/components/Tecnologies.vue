<template>
  <v-container class="box">
    <v-row>
      <v-col>
        <v-col>
          <!-- <h1 v-html=""></h1> -->
          <v-btn text x-large dark class="btnText" color="#f3e9b3">
            <h1
              v-html="$ml.with('VueJS').get(`technologiesDescriptionTitle`)"
            ></h1>
          </v-btn>
        </v-col>
        <v-col class="techMainText">
          <h2
            class="start"
            v-html="$ml.with('VueJS').get(`technologiesDescriptionStart`)"
          ></h2>
          <p class="start" v-html="$ml.get('myMessage')"></p>
        </v-col>
      </v-col>
      <v-col>
        <v-col class="tecBar">
          <h3>Vue.js <v-icon dark color="#00E676">mdi-vuejs</v-icon></h3>
          <v-progress-linear
            color="#00E676"
            buffer-value="0"
            value="95"
            stream
          ></v-progress-linear>
          <br />
          <h3>
            JavaScript
            <v-icon dark color="#FFEE58">mdi-language-javascript</v-icon>
          </h3>
          <v-progress-linear
            color="#FFEE58"
            buffer-value="0"
            value="85"
            stream
          ></v-progress-linear>
          <br />
          <h3>Vuetify <v-icon dark color="#00B0FF">mdi-vuetify</v-icon></h3>
          <v-progress-linear
            color="#00B0FF"
            buffer-value="0"
            value="80"
            stream
          ></v-progress-linear>
          <br />
          <h3>CSS <v-icon dark color="#01579B">mdi-language-css3</v-icon></h3>
          <v-progress-linear
            color="#01579B"
            buffer-value="0"
            value="60"
            stream
          ></v-progress-linear>
          <br />
          <h3>HTML <v-icon dark color="#EF6C00">mdi-language-html5</v-icon></h3>
          <v-progress-linear
            color="#EF6C00"
            buffer-value="0"
            value="65"
            stream
          ></v-progress-linear>
          <br />
          <h3>PHP <v-icon dark color="#5C6BC0">mdi-language-php</v-icon></h3>
          <v-progress-linear
            color="#5C6BC0"
            buffer-value="0"
            value="55"
            stream
          ></v-progress-linear>
          <br />
          <h3>Laravel <v-icon dark color="#D50000">mdi-laravel</v-icon></h3>
          <v-progress-linear
            color="#D50000"
            buffer-value="0"
            value="72"
            stream
          ></v-progress-linear>
        </v-col>
        <v-col>
          <v-row>
            <v-col lg="6" md="12" sm="12">
              <v-card color="#1F1E1E" dark class="work">
                <v-card-title primary-title class="workTitle">
                  Full-Stack developer
                </v-card-title>
                <v-card-subtitle>
                  Unimed<br />
                  2020-2021
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col lg="6" md="12" sm="12">
              <v-card color="#1F1E1E" dark class="work">
                <v-card-title primary-title class="workTitle">
                  Full-Stack developer
                </v-card-title>
                <v-card-subtitle>
                  Agill Serviços<br />
                  2021-2021
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="6" md="12" sm="12">
              <v-card color="#1F1E1E" dark class="work">
                <v-card-title primary-title class="workTitle">
                  Frontend developer
                </v-card-title>
                <v-card-subtitle>
                  Gespag<br />
                  2021-2022
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col lg="6" md="12" sm="12">
              <v-card color="#1F1E1E" dark class="work">
                <v-card-title primary-title class="workTitle">
                  Frontend developer
                </v-card-title>
                <v-card-subtitle>
                  Helioprint<br />
                  2022-{{ new Date().getFullYear() }}
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { MLBuilder } from "vue-multilanguage";
export default {
  name: "Tecnologies",

  data: () => ({}),

  computed: {
    mlmyMessage() {
      return new MLBuilder("technologiesDescription").with(
        "years",
        new Date().getFullYear() - 2020
      );
    },
  },
};
</script>

<style>
.box {
  margin-top: 40px;
}

.tecBar {
  text-align: start;
}

.techMainText {
  text-align: left;
}

.start {
  display: inline;
}

.workTitle {
  color: #ffd700;
}

.work {
  text-align: left;
}
</style>