<template>
  <div class="plan-container">
    <h1 class="plan-container-h1">{{ planTitle }}</h1>
    <h2 v-if="planPrice === 'Grátis'">{{ planPrice }}</h2>
    <h2 v-else><span>R$ </span>{{ planPrice }}<span>mês</span></h2>
    <p>{{ planTipTitle }}<br />{{ planTipSubtitle }}</p>
    <hr />
    <h2 class="plan-container-subtitle">{{ planSubtitle }}</h2>
    <hr />
    <div class="plan-informations">
      <AuthButton
        text="escolher esse plano"
        :is-loading="isLoading"
        :class="{ loading: isLoading }"
        @plan-selected="selectPlan"
      ></AuthButton>

      <h3 class="plan-container-h3">
        Seu site em servidores <span>{{ planHost }}</span>
      </h3>
      <ul class="plan-container-ul">
        <li>&check; {{ planServer }}</li>
        <li>
          &check; ASP, ASP.NET 2.0/3.0/3.5/e/4.0/4.5/4.5.1/4.5.2 (medium trust)
          ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0
        </li>
        <li v-if="planFtp.includes('limitados')">
          &check;
          <span class="plan-container-highlight">{{
            planFtp.split(" ")[0]
          }}</span>
          {{ planFtp.split(" ").slice(1).join(" ") }}
        </li>
        <li v-else>&check; {{ planFtp }}</li>
        <li v-if="planEmail.includes('limitadas')">
          &check;
          <span class="plan-container-highlight">
            {{ planEmail.split(" ")[0] }}</span
          >
          {{ planEmail.split(" ").slice(1).join(" ") }}
        </li>
        <li v-else>&check; {{ planEmail }}</li>
        <li>
          &check;
          <span class="plan-container-span-subdomain">{{
            planSubDomainQuantity
          }}</span>
          gratuito;
        </li>
      </ul>
      <h3>Suporte 24 horas, 7 dias por semana grátis;</h3>
      <h3 class="plan-container-h3">Aplicativos disponíveis;</h3>
      <ul class="plan-container-ul">
        <li>&check; Wordpress;</li>
        <li>&check; Drupal;</li>
        <li>&check; entre outros...</li>
      </ul>
      <h3 class="plan-container-h3">{{ planMigrationTitle }}</h3>
      <ul class="plan-container-ul">
        <li class="plan-container-reduce" v-if="planMigrationSubTitle !== ''">
          &check; {{ planMigrationSubTitle }}
        </li>
        <li v-else>
          {{ planMigrationSubTitle }}
        </li>
      </ul>
      <h3 class="plan-container-h3" id="h3-basic">Você ainda tem</h3>
      <ul class="plan-container-ul">
        <li>&check; Webmail RoundCube;</li>
        <li>&check; AntiSpam;</li>
        <li>
          &check; Painel de gerenciamento <br />
          &nbsp;&nbsp;&nbsp;&nbsp;de DNS
        </li>
        <li>&check; Painel de controle web;</li>
        <li>
          &check; Configurações de PHP &nbsp;&nbsp;&nbsp;&nbsp;personalizáveis;
        </li>
        <li>&check; Certificado SSL Grátis;</li>
        <li>&check; Transferência ilimitada;</li>
      </ul>
    </div>
  </div>
</template>

<script>
import AuthButton from "../Button/AuthButton.vue";
export default {
  name: "PlanView",
  components: {
    AuthButton,
  },
  props: {
    planTitle: String,
    planSubtitle: String,
    planPrice: String,
    planTipTitle: String,
    planTipSubtitle: String,
    description: String,
    planHost: String,
    planServer: String,
    planFtp: String,
    planEmail: String,
    planSubDomain: String,
    planSubDomainQuantity: String,
    planMigrationTitle: String,
    planMigrationSubTitle: String,
  },
  methods: {
    selectPlan() {
      // lógica para selecionar o plano
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
@import "plan.scss";
.plan-container-highlight {
  text-decoration: underline;
}
</style>
