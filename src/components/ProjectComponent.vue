<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
      @mouseover="mouseOver"
      @mouseleave="leave"
      @click="dialog = !dialog"
    >
      <v-img :src="getImgUrl(img)" height="500" dark>
        <div>
          <v-card height="500" :color="opacity">
            <v-expand-x-transition>
              <v-card-text style="color: black" v-show="hover">
                <v-btn text x-large light class="btnText"><h3>{{ title }}</h3></v-btn>
                <p
                  v-show="hover"
                  v-text="$ml.with('VueJS').get(`${work}.summary`)"
                />
                <p
                  v-show="hover"
                  v-text="$ml.with('VueJS').get(`${work}.technologies`)"
                />
                <v-btn
                  text
                  color="#897509"
                  v-text="$ml.get('moreBtn')"
                  class="btnText"
                >
                </v-btn>
              </v-card-text>
            </v-expand-x-transition>
          </v-card>
        </div>
      </v-img>
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="800"
        v-model="dialog"
      >
        <v-card color="#2B2A2A" dark>
          <ProjectDialog :title="title" :work="work" :images="images" :workType="workType" />
          <v-card-actions class="justify-end">
            <v-btn text v-text="$ml.get(`accessBtn`)" @click="workLink(src)"> </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="dialog = false"
              v-text="$ml.get(`closeBtn`)"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-hover>
</template>

<script>
import { MLBuilder } from "vue-multilanguage";
import ProjectDialog from "./ProjectDialog";
export default {
  name: "ProjectComponent",

  components: {
    ProjectDialog,
  },

  data: () => ({
    opacity: "rgb(255, 255, 255, 0)",
    dialog: false,
  }),

  props: {
    src: String,
    img: String,
    title: String,
    work: String,
    workType: Boolean,
    images: Array,
  },

  methods: {
    getImgUrl(path) {
      var images = require.context("../assets/", false, /\.jpg$/);
      return images("./" + path + ".jpg");
    },
    workLink(link) {
      window.open(link, "_blank");
    },
    mouseOver: function () {
      this.opacity = "rgb(255, 255, 255, 0.8)";
    },
    leave: function () {
      this.opacity = "rgb(255, 255, 255, 0)";
    },
  },
  computed: {
    summary(work) {
      // return new MLBuilder("msg").with("f", this.friends).with("l", 406);
      console.log(work);
      return new MLBuilder("portalContribuinte.summary");
    },
  },
};
</script>

<style>
.btnText {
  pointer-events: none;
}
</style>