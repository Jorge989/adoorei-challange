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
        v-if="!isRegisterPlan"
        text="escolher esse plano"
        :is-loading="isLoading"
        :class="{ loading: isLoading }"
        @plan-selected="selectPlan"
        @click="selectPlan"
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
      <h3
        class="plan-container-h3"
        v-bind:class="{ 'fade-in-down-h3': isRegisterPlan }"
      >
        {{ planMigrationTitle }}
      </h3>
      <ul
        class="plan-container-ul"
        v-bind:class="{ 'fade-in-down': isRegisterPlan }"
      >
        <li class="plan-container-reduce" v-if="planMigrationSubTitle !== ''">
          &check; {{ planMigrationSubTitle }}
        </li>
        <li v-else>
          {{ planMigrationSubTitle }}
        </li>
      </ul>
      <div v-if="!isRegisterPlan">
        <h3 class="plan-container-h3" id="h3-basic">Você ainda tem</h3>
        <ul class="plan-container-ul">
          <li>&check; Webmail RoundCube;</li>
          <li>&check; AntiSpam;</li>
          <div v-if="!isRegisterPlan">
            <li>
              &check; Painel de gerenciamento <br />
              &nbsp;&nbsp;&nbsp;&nbsp;de DNS
            </li>
            <li>&check; Painel de controle web;</li>
            <li>
              &check; Configurações de PHP
              &nbsp;&nbsp;&nbsp;&nbsp;personalizáveis;
            </li>
            <li>&check; Certificado SSL Grátis;</li>
            <li>&check; Transferência ilimitada;</li>
          </div>
        </ul>
      </div>
    </div>
    <AuthButton
      v-if="isRegisterPlan"
      text="Trocar plano"
      :is-loading="isLoading"
      :class="{ loading: isLoading, 'auth-button-register': isRegisterPlan }"
      @plan-selected="selectPlan"
      @click="selectPlan"
    ></AuthButton>
  </div>
</template>

<script>
import store from "../../utils/store";
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
    isRegisterPlan: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectPlan() {
      if (this.isRegisterPlan) {
        this.$router.push("/plans");
      } else {
        store.commit("setSelectedPlan", {
          planTitle: this.planTitle,
          planPrice: this.planPrice,
          planTipTitle: this.planTipTitle,
          planTipSubtitle: this.planTipSubtitle,
          planSubtitle: this.planSubtitle,
          planHost: this.planHost,
          planServer: this.planServer,
          planFtp: this.planFtp,
          planEmail: this.planEmail,
          planSubDomainQuantity: this.planSubDomainQuantity,
          planMigrationTitle: this.planMigrationTitle,
          planMigrationSubTitle: this.planMigrationSubTitle,
        });
        this.$router.push("/register");
      }
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
