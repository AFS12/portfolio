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
      <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
        <p v-html="$ml.with('VueJS').get(`contactText`)"></p>
        <v-btn icon dark @click="github">
          <v-icon x-large dark> mdi-github </v-icon>
        </v-btn>

        <v-btn icon dark @click="linkedin" class="centerSocialNet">
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
      <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12" class="formMargin">
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
            <button type="submit" class="glowing-button-hover">
              <span v-text="$ml.with('VueJS').get(`sendBtn`)"></span>
              <i></i>
            </button>
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
          <v-btn text color="#ffd700" @click.native="snackbarPt = false" light>
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
          <v-btn text color="#ffd700" @click.native="snackbarPt = false" light>
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
      window.open("https://github.com/AFS12", "_blank");
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

.centerSocialNet {
  margin-right: 10px;
  margin-left: 10px;
}
</style>

<style lang="scss">
/* Glowing Button Hover */
$colorTheme: #f3e9b3;
.glowing-button-hover {
  position: relative;
  background: #444;
  color: #fff !important;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
}

.glowing-button-hover:hover {
  letter-spacing: 0.25em;
  background: $colorTheme;
  color: $colorTheme !important;
  box-shadow: 0 0 35px $colorTheme;
}
.glowing-button-hover::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #27282c;
}
.glowing-button-hover span {
  position: relative;
  z-index: 1;
}
.glowing-button-hover i {
  position: absolute;
  inset: 0;
  display: block;
}
.glowing-button-hover i::before {
  content: "";
  position: absolute;
  border: 2px solid $colorTheme;
  top: -3.5px;
  left: 80%;
  width: 10px;
  height: 8px;
  background: #27282c;
  transform: translateX(-50%);
  transition: top 0.5s, width 0.5s, left 0.7s 0.37s;
}
.glowing-button-hover:hover i::before {
  background: $colorTheme;
  width: 20px;
  left: 3.8%;
  top: 90%;

  transition: left 0.5s, width 0.5s, top 0.7s 0.37s;
}

.glowing-button-hover i::after {
  content: "";
  position: absolute;
  border: 2px solid $colorTheme;
  bottom: -3.5px;
  left: 20%;
  width: 10px;
  height: 8px;
  background: #27282c;
  transform: translateX(-50%);
  transition: bottom 0.5s, width 0.5s, left 0.7s 0.37s;
}
.glowing-button-hover:hover i::after {
  background: $colorTheme;
  width: 20px;
  left: 96.2%;
  bottom: 90%;

  transition: left 0.5s, width 0.5s, bottom 0.7s 0.37s;
}
</style>