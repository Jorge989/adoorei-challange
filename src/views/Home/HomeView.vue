<template>
  <div class="container">
    <h1>Welcome to Home!</h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      message: "Hello World!",
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
@import "@/styles.scss";
</style>
