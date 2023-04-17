<template>
  <div class="register-container">
    <img
      class="locaweb-logo"
      :src="require('@/assets/img/1.png')"
      alt="locaweb"
    />
    <h1 class="plans-container-h1">
      Você está muito próximo de mudar a forma de <br />
      <span>hospedar seu site</span>
    </h1>
    <div class="register-form-and-plan">
      <div class="register-form-group">
        <form class="form-register" @submit="submitForm">
          <h1 id="login-title">Dados pessoais</h1>
          <p>Informe seus dados pessoais para acesso à sua conta</p>

          <!-- Input para o email -->
          <label for="email">E-mail:</label>
          <input
            type="email"
            id="email"
            v-model="username"
            placeholder="Seu e-mail"
            required
            @keydown.enter.prevent="$refs.passwordInput.focus()"
          />

          <!-- Input para a senha -->
          <label for="password">Senha:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Sua senha"
            required
            ref="passwordInput"
          />
          <label for="password">Senha:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Sua senha"
            required
            ref="passwordInput"
          />
          <label for="password">Senha:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Sua senha"
            required
            ref="passwordInput"
          />
          <label for="password">Senha:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Sua senha"
            required
            ref="passwordInput"
          />
          <label for="password">Senha:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Sua senha"
            required
            ref="passwordInput"
          />

          <!-- Botão de autenticação -->
          <AuthButton
            text="criar conta"
            :is-loading="isLoading"
            :class="{ loading: isLoading }"
            :disabled="!isFormValid"
            @keydown.enter.prevent="submitForm"
          ></AuthButton>
        </form>
      </div>
      <!-- Link para cadastro -->
      <div class="register-plan">
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
      </div>
    </div>
  </div>
</template>

<script>
import AuthButton from "../../components/Button/AuthButton.vue";
import PlanView from "../../components/Plan/PlanView.vue";
export default {
  name: "RegisterView",
  components: {
    PlanView,
    AuthButton,
  },
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
<style scoped>
@import "register.scss";
</style>
