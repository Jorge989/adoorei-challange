<template>
  <div class="plans-container">
    <img
      class="locaweb-logo"
      :src="require('@/assets/img/1.png')"
      alt="locaweb"
    />
    <h1 class="plans-container-h1">
      Você está muito próximo de mudar a forma de <br />
      <span>hospedar seu site</span>
    </h1>
    <p class="plans-container-p">Escolha o seu plano</p>

    <section class="plans-section">
      <PlanView
        class="plans-view"
        planTitle="Hospedagem 1"
        planPrice="Grátis"
        planTipTitle="você não paga nada para usar"
        planTipSubtitle="sem taxa de setup"
        planSubtitle="Ideal para quem está começando."
        planHost="no Estados Unidos."
        planServer="Servidores em nossos data centers americanos;"
        planFtp="1 usuário de FTP para upload ou download;"
        planEmail="1 contas de e-mails profissionais;"
        planSubDomainQuantity="1 subdomínio"
        planMigrationSubTitle=""
      />
      <div class="plans-conatiner-standard">
        <strong class="plans-container-strong">mais usado</strong>
        <PlanView
          class="plans-view"
          planTitle="Hospedagem 2"
          planPrice="499/"
          planTipTitle="cobrado mensalemente"
          planTipSubtitle="sem taxa de setup"
          planSubtitle="Ideal para site com mais de 30k de visitas."
          planHost="no Brasil."
          planServer="Servidores em nossos data centers de São Paulo;"
          planFtp="10 usuário de FTP para upload ou download;"
          planEmail="30 contas de e-mails profissionais;"
          planSubDomainQuantity="10 subdomínio"
          planMigrationTitle="Migração Gratuita;"
          planMigrationSubTitle="Migramos todos seus sites para nossos servidores;"
        />
      </div>
      <PlanView
        class="plans-view"
        planTitle="Hospedagem 3"
        planPrice="999/"
        planTipTitle="cobrado mensalemente"
        planTipSubtitle="sem taxa de setup"
        planSubtitle="Ideal para site com mais de 60k de visitas."
        planHost="no Brasil."
        planServer="Servidores em nossos data centers de São Paulo;"
        planFtp="limitados usuário de FTP para upload ou download;"
        planEmail="limitadas contas de e-mails profissionais;"
        planSubDomainQuantity="50 subdomínio"
        planMigrationTitle="Migração Gratuita;"
        planMigrationSubTitle="Migramos todos seus sites para nossos servidores;"
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
