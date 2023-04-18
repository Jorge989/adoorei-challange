<template>
  <div class="home-container">
    <div class="home-logo-container">
      <img
        class="locaweb-logo"
        :src="require('@/assets/img/logo.png')"
        alt="locaweb"
      />
    </div>

    <div class="video-container">
      <h1>Olá João,</h1>
      <h2>Seja bem vindo a sua conta de hospedagem.</h2>
      <iframe
        width="860"
        height="515"
        :src="videoUrl"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <p>
        Caso tenha alguma dúvida, <span>visite nossa central de ajuda.</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      videoUrl: "https://www.youtube.com/embed/fpa2W3YNg0Q",
    };
  },
  methods: {
    greet() {
      console.log(this.message);
    },
  },
};
</script>

<style>
@import "home.scss";
</style>
