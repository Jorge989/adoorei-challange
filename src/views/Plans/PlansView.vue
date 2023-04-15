<template>
  <div class="container">
    <h1>Welcome to Plans!</h1>
  </div>
</template>

<script>
export default {
  name: "PlansView",
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
