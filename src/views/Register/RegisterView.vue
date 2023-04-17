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
          <!-- Input para o nome -->
          <label for="email">Nome completo:</label>
          <input
            class="input"
            type="email"
            id="email"
            v-model="username"
            placeholder="Seu e-mail"
            required
            @keydown.enter.prevent="$refs.passwordInput.focus()"
          />
          <!-- Input para o celular -->
          <label for="email">Celular:</label>
          <input
            class="input"
            type="tel"
            id="phone"
            v-model="phone"
            placeholder="(99) 99999-0000"
            required
            @keydown.enter.prevent="$refs.passwordInput.focus()"
          />
          <!-- Input para o email -->
          <label for="email">E-mail:</label>
          <input
            class="input"
            type="email"
            id="email"
            v-model="username"
            placeholder="Seu e-mail"
            required
            @keydown.enter.prevent="$refs.passwordInput.focus()"
          />

          <!-- Input para a senha -->
          <label for="password">Senha:</label>
          <div class="password-container">
            <input
              class="input"
              :type="passwordFieldTypeOne"
              id="password"
              v-model="password"
              placeholder="Sua senha"
              required
              ref="passwordInput"
            />
            <button
              class="toggle-password-btn"
              @click.prevent="togglePasswordVisibility"
            >
              <i
                :class="showPasswordOne ? 'fas fa-eye-slash' : 'fas fa-eye'"
              ></i>
            </button>
          </div>
          <p>No mínimo 8 caracteres</p>
          <label for="password">Confirme sua senha:</label>
          <div class="password-container">
            <input
              class="input"
              :type="passwordFieldTypeConfirm"
              id="password"
              v-model="passwordConfirm"
              placeholder="Confirme sua senha"
              required
              ref="passwordInput"
            />

            <button
              class="toggle-password-btn"
              @click.prevent="togglePasswordVisibilityConfirm"
            >
              <i
                :class="showPasswordConfirm ? 'fas fa-eye-slash' : 'fas fa-eye'"
              ></i>
            </button>
          </div>

          <hr />
          <h1 id="register-subtitle">Dados do seu site</h1>
          <label for="password">Nome do seu site:</label>
          <input
            class="input"
            type="text"
            id="site"
            v-model="site"
            placeholder="Meu site"
            required
          />
          <p>exatamente igual o título do sue site</p>
          <hr />
          <div class="register-checkbox">
            <input
              type="checkbox"
              id="myCheckbox"
              v-model="isChecked"
              class="custom-checkbox"
              style="background-color: pink !important; color: pink !important"
            />
            <label for="myCheckbox">
              Ao concluir com seu cadastro você concorda com nossos
              <br />
              <span>termos de uso</span> e
              <span>políticas de privacidade.</span>
            </label>
          </div>
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
        <h2 class="teste">Plano escolhido: {{ selectedPlan }}</h2>
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
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import AuthButton from "../../components/Button/AuthButton.vue";
import PlanView from "../../components/Plan/PlanView.vue";
import { mapState } from "vuex";
export default {
  name: "RegisterView",
  computed: {
    ...mapState(["selectedPlan"]),
  },
  components: {
    PlanView,
    AuthButton, // eslint-disable-next-line vue/no-unused-components
  },
  data() {
    return {
      message: "Hellow World!",
      showPassword: false, // Indica se a senha deve ser visível
      passwordFieldTypeOne: "password", // Initial type is "password"
      passwordFieldTypeConfirm: "password",
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPasswordOne = !this.showPasswordOne;
      this.passwordFieldTypeOne = this.showPasswordOne ? "text" : "password";
    },
    togglePasswordVisibilityConfirm() {
      this.showPasswordConfirm = !this.showPasswordConfirm;
      this.passwordFieldTypeConfirm = this.showPasswordConfirm
        ? "text"
        : "password";
    },
    greet() {
      console.log(this.message);
    },
  },
};
</script>
<style scoped>
@import "register.scss";
</style>
