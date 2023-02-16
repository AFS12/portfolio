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
            :src="item.src"
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
        project: "byPrice",
        workType: true,
        title: "ByPrice",
        src: "https://byprice.com.br/",
        img: "byPrice",
        images: [
          {
            src: require("../assets/byPrice/home.png"),
          },
          {
            src: require("../assets/byPrice/campaign.png"),
          },
          {
            src: require("../assets/byPrice/impressionRow.png"),
          },
          {
            src: require("../assets/byPrice/sideModal.png"),
          },
          {
            src: require("../assets/byPrice/editor.png"),
          },
        ],
      },
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
      },
      {
        project: "alagoasMaior",
        workType: true,
        title: "Alagoas Maior",
        src: "https://alagoasmaior.com.br/home",
        img: "alagoasMaior",
        images: [
          {
            src: require("../assets/alagoasMaiorImages/home1.png"),
          },
          {
            src: require("../assets/alagoasMaiorImages/home2.png"),
          },
          {
            src: require("../assets/alagoasMaiorImages/products.png"),
          },
          {
            src: require("../assets/alagoasMaiorImages/productInfo.png"),
          },
          {
            src: require("../assets/alagoasMaiorImages/producerInfo.png"),
          },
        ],
      },
    ],
  }),
};
</script>
