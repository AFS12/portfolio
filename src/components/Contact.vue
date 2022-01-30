<template>
  <v-container class="box">
    <v-row>
      <v-spacer></v-spacer>
      <v-btn text x-large dark class="btnText" color="#f3e9b3">
        <h1 v-html="$ml.with('VueJS').get(`contactDescriptionTitle`)"></h1>
      </v-btn>
      <v-spacer></v-spacer>
    </v-row>
    <br /><br />
    <v-row>
      <v-spacer></v-spacer>
      <v-col lg="6" md="12">
        <p v-html="$ml.with('VueJS').get(`contactText`)"></p>
        <v-btn icon dark @click="github">
          <v-icon x-large dark> mdi-github </v-icon>
        </v-btn>

        <v-btn icon dark @click="linkedin">
          <v-icon x-large dark> mdi-linkedin </v-icon>
        </v-btn>

        <v-btn icon dark @click="instagram">
          <v-icon x-large dark> mdi-instagram </v-icon>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col lg="6" md="12" class="formMargin">
        <form ref="form" @submit.prevent="sendEmail">
          <v-row>
            <v-text-field
              label="Name"
              dark
              filled
              color="#ffd700"
              v-model="from_name"
              name="from_name"
              outlined
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              label="Email"
              dark
              filled
              color="#ffd700"
              v-model="from_email"
              name="from_email"
              type="email"
              outlined
            ></v-text-field>
          </v-row>
          <v-row>
            <v-textarea
              name="message"
              dark
              filled
              v-model="message"
              color="#ffd700"
              outlined
              label="Message"
              auto-grow
            ></v-textarea>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="#f3e9b3" width="200px" v-text="$ml.with('VueJS').get(`sendBtn`)">Send</v-btn>
            <v-spacer></v-spacer>
          </v-row>
        </form>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-snackbar v-model="snackbarEn">
      <v-row>
        <v-col cols="8">
          <h3
            v-html="$ml.with('VueJS').get(`emailSuccessText`)"
            v-show="success"
          ></h3>
          <h3
            v-html="$ml.with('VueJS').get(`emailFailText`)"
            v-show="!success"
          ></h3>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="4">
          <v-btn flat color="#ffd700" @click.native="snackbarPt = false" light>
            Close
          </v-btn>
        </v-col>
      </v-row>
    </v-snackbar>
    <v-snackbar v-model="snackbarPt">
      <v-row>
        <v-col cols="8">
          <h3
            v-html="$ml.with('VueJS').get(`emailSuccessText`)"
            v-show="success"
          ></h3>
          <h3
            v-html="$ml.with('VueJS').get(`emailFailText`)"
            v-show="!success"
          ></h3>
        </v-col>
        <v-col cols="4">
          <v-btn flat color="#ffd700" @click.native="snackbarPt = false" light>
            Fechar
          </v-btn>
        </v-col>
      </v-row>
    </v-snackbar>
  </v-container>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",

  props: {
    language: Boolean,
  },

  data: () => ({
    snackbarPt: false,
    snackbarEn: false,
    success: false,
    from_name: "",
    from_email: "",
    message: "",
  }),

  methods: {
    sendEmail(e) {
      console.log("aqui");
      try {
        emailjs
          .sendForm(
            "service_51lrfe9",
            "template_54hrefo",
            e.target,
            "user_nYARYoeBi3MCFLEbpy5ey",
            {
              from_name: this.from_name,
              from_email: this.from_email,
              message: this.message,
            }
          )
          .then((result) => {
            if (result.status == 200) {
              this.success = true;
              if (this.language) {
                this.snackbarEn = true;
              } else {
                this.snackbarPt = true;
              }
            } else {
              this.success = false;
              if (this.language) {
                this.snackbarEn = true;
              } else {
                this.snackbarPt = true;
              }
            }
          });
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.from_name = "";
      this.from_email = "";
      this.message = "";
    },
    linkedin() {
      window.open("https://www.linkedin.com/in/arthurayresdev/", "_blank");
    },
    instagram() {
      window.open("https://www.instagram.com/arthurmbayres/", "_blank");
    },
    github() {
      window.open("https://github.com/AFS12");
    },
  },
};
</script>

<style>
.box {
  margin-top: 40px;
}

.formMargin {
  margin-top: 50px;
}
</style>