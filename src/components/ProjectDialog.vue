<template>
  <div>
    <v-toolbar color="#E6D267" light class="card-header">
      <h2>{{ title }}</h2>
      <v-spacer></v-spacer>
      <v-chip
        color="#131212"
        v-show="workType"
        dark
        v-text="$ml.with('VueJS').get(`workProfessional`)"
      ></v-chip>
      <v-chip
        color="#E6E6E6"
        v-show="!workType"
        light
        v-text="$ml.with('VueJS').get(`workPersonal`)"
      ></v-chip>
    </v-toolbar>
    <v-card-text>
      <v-carousel cycle height="400">
        <v-carousel-item
          v-for="(item, i) in images"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      <br />
      <v-row>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
          <h1 v-text="$ml.with('VueJS').get(`descriptionTitle`)"></h1>
          <br />
          <p v-text="$ml.with('VueJS').get(`${work}.description`)"></p>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
          <h1 v-text="$ml.with('VueJS').get(`technologiesTitle`)"></h1>
          <br />
          <p v-text="$ml.with('VueJS').get(`${work}.technologiesUsed`)"></p>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: "ProjectDialog",

  props: {
    title: String,
    work: String,
    images: Array,
    workType: Boolean,
  },
};
</script>

<style lang="scss">
.card-header {
  @media (max-width: 800px) {
    font-size: 10px;
  }
}
</style>