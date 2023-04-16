<template>
  <div class="plans-container">
    <img
      class="locaweb-logo"
      :src="require('@/assets/img/1.png')"
      alt="locaweb"
    />
    <h1>
      Você está muito próximo de mudar a forma de <br />
      <span>hospedar seu site</span>
    </h1>
    <p>Escolha seu plano</p>
    <section class="plans-section">
      <PlanView
        title="Hospedagem 1"
        price="Grátis"
        subtitle="Ideal para quem está começando."
      />
      <PlanView
        title="Hospedagem 2"
        price="R$499/mês"
        subtitle="Ideal para site com mais de 30k de visitas."
      />
      <PlanView
        title="Hospedagem 3"
        price="R$999/mês"
        subtitle="Ideal para site com mais de 60k de visitas."
      />
    </section>
  </div>
</template>

<script>
import PlanView from "../../components/Plan/PlanView.vue";
export default {
  name: "PlansView",
  components: {
    PlanView,
  },
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

<style scoped>
@import "plans.scss";
</style>
