<template>
  <div class="plan-container">
    <h1>{{ title }}</h1>
    <strong>{{ price }}</strong>
    <p>você não paga nada para usar<br />sem taxa de setup</p>
    <hr />
    <h2>{{ subtitle }}</h2>
    <hr />
    <button v-on:click="selectPlan">escolher esse plano</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    price: String,
    description: String,
  },
  methods: {
    selectPlan() {
      // lógica para selecionar o plano
    },
  },
};
</script>

<style scoped>
@import "plan.scss";
</style>
