<template>
  <v-container>
    <v-row dense>
      <template v-for="(item, i) in items">
        <v-col cols="12" md="4" :key="i">
          <ProjectComponent
            :img="item.img"
            :title="item.title"
            :work="item.project"
            :images="item.images"
            :workType="item.workType"
          />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import ProjectComponent from "./ProjectComponent";

export default {
  name: "Projects",
  components: {
    ProjectComponent,
  },
  data: () => ({
    items: [
      {
        project: "portalContribuinte",
        workType: true,
        title: "Portal Do Contribuinte",
        src: "http://servicos-vicosa.prefeitura.info/",
        img: "portalContribuinte",
        images: [
          {
            src: require("../assets/portalContribuinteImages/home.png"),
          },
          {
            src: require("../assets/portalContribuinteImages/menuCertidao.png"),
          },
          {
            src: require("../assets/portalContribuinteImages/menuIptu.png"),
          },
          {
            src: require("../assets/portalContribuinteImages/menuReq.png"),
          },
        ],
        color: "title black--text",
      },
      {
        project: "gespag",
        workType: true,
        title: "Gespag",
        src: "http://new.gespag.com.br/login",
        img: "gespag-brasil",
        images: [
          {
            src: require("../assets/gespagImages/home.png"),
          },
          {
            src: require("../assets/gespagImages/login.png"),
          },
          {
            src: require("../assets/gespagImages/clients.png"),
          },
          {
            src: require("../assets/gespagImages/singin.png"),
          },
        ],
        color: "title black--text",
      },
      {
        project: "social_network",
        workType: false,
        title: "Social Network",
        src: "https://github.com/AFS12/social_network",
        img: "socialNetwork",
        images: [
          {
            src: require("../assets/socialNetwork/image1.png"),
          },
          {
            src: require("../assets/socialNetwork/image2.png"),
          },
          {
            src: require("../assets/socialNetwork/image3.png"),
          },
          {
            src: require("../assets/socialNetwork/image4.png"),
          },
        ],
        color: "title black--text",
      },
      // {
      //   project: "emediar",
      //   title: "E-mediar",
      //   src: "http://new.gespag.com.br/login",
      //   img: "gespag-brasil",
      //   images: [
      //     {
      //       src: "https://github.com/AFS12.png",
      //     },
      //     {
      //       src: "https://github.com/antonioizaias.png",
      //     },
      //     {
      //       src: "https://github.com/kallyous.png",
      //     },
      //   ],
      //   color: "title black--text",
      // },
    ],
  }),
};
</script>
