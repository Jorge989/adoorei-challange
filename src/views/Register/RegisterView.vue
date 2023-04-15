<template>
  <div>
    <h1>Welcome to Register!</h1>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      message: "Hellow World!",
    };
  },
  methods: {
    greet() {
      console.log(this.message);
    },
  },
};
</script>
<style></style>
