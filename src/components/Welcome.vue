<template>
  <section class="component-section welcome">
    <span class="logo-name">
      <img
        src="/logo.ico"
        class="logo-img"
        :class="logoClicked ? 'logo-img-clicked' : ''"
        alt="Logo"
        width="100"
        height="100"
        @click="logoClick()"
      />
      <h1>
        <span class="letter-animation logo-name-r">r</span>
        <span class="letter-animation logo-name-t">t</span>
        <span class="letter-animation logo-name-h">h</span>
        <span class="letter-animation logo-name-u">u</span>
        <span class="letter-animation logo-name-r-2">r </span>
        <span class="letter-animation logo-name-a">A</span>
        <span class="letter-animation logo-name-y">y</span>
        <span class="letter-animation logo-name-r-3">r</span>
        <span class="letter-animation logo-name-e">e</span>
        <span class="letter-animation logo-name-s">s</span>
      </h1>
    </span>
    <div class="background-ball"></div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      logoClicked: false,
    };
  },
  methods: {
    logoClick() {
      this.logoClicked = true;
      setTimeout(
        () =>
          window.open("https://www.linkedin.com/in/arthurayresdev/", "_blank"),
        1500
      );

      setTimeout(() => (this.logoClicked = false), 3000);
    },
  },
};
</script>