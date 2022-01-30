<template>
  <v-container class="box">
    <v-row>
      <v-col>
        <v-col>
          <!-- <h1 v-html=""></h1> -->
          <v-btn text x-large dark class="btnText" color="#f3e9b3">
            <h1 v-html="$ml.with('VueJS').get(`aboutDescriptionTitle`)">
            </h1>
            
          </v-btn>
        </v-col>
        <v-col class="techMainText">
          <h2
            class="start"
            v-html="$ml.with('VueJS').get(`aboutDescriptionStart`)"
          ></h2>
          <p class="start" v-html="$ml.with('VueJS').get(`aboutDescription`)"></p>
        </v-col>
      </v-col>
      <v-col>
        <v-row>
          <v-spacer></v-spacer>
          <v-col> 
            <v-img src="https://github.com/AFS12.png"></v-img>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",

  data: () => ({}),
};
</script>

<style>
.box {
  margin-top: 40px;
}
</style>