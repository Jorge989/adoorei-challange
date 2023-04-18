<template>
  <div class="register-container">
    <img
      class="locaweb-logo"
      :src="require('@/assets/img/logo.png')"
      alt="locaweb"
    />
    <h1 class="register-container-h1">
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
            type="text"
            id="username"
            v-model="username"
            placeholder="informe seu nome completo"
            required
            @keydown.enter.prevent="$refs.passwordInput.focus()"
          />
          <!-- Input para o celular -->
          <label for="email">Celular:</label>
          <input
            class="input"
            type="text"
            id="phone"
            v-model="phone"
            placeholder="(99) 99999-0000"
            required
            v-on:input="formatPhone"
            v-mask="'(##) #####-####'"
            @keydown.enter.prevent="$refs.passwordInput.focus()"
          />
          <!-- Input para o email -->
          <label for="email">E-mail:</label>
          <input
            class="input"
            type="email"
            id="email"
            v-model="email"
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
            class="register-btn-spinner"
            @keydown.enter.prevent="submitForm"
            :disabled="!isFormValid"
          ></AuthButton>
        </form>
      </div>
      <!-- Link para cadastro -->
      <div class="register-plan">
        <strong class="register-container-strong">plano escolhido</strong>

        <PlanView
          class="plans-view"
          :planTitle="selectedPlan.planTitle"
          :planPrice="selectedPlan.planPrice"
          :planTipTitle="selectedPlan.planTipTitle"
          :planTipSubtitle="selectedPlan.planTipSubtitle"
          :planSubtitle="selectedPlan.planSubtitle"
          :planHost="selectedPlan.planHost"
          :planServer="selectedPlan.planServer"
          :planFtp="selectedPlan.planFtp"
          :planEmail="selectedPlan.planEmail"
          :planSubDomainQuantity="selectedPlan.planSubDomainQuantity"
          :planMigrationTitle="selectedPlan.planMigrationTitle"
          :planMigrationSubTitle="selectedPlan.planMigrationSubTitle"
          :isRegisterPlan="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../utils/api";
import "@fortawesome/fontawesome-free/css/all.css";

import AuthButton from "../../components/Button/AuthButton.vue";
import PlanView from "../../components/Plan/PlanView.vue";
import { mapState } from "vuex";
import store from "../../utils/store";
export default {
  name: "RegisterView",
  computed: {
    ...mapState(["selectedPlan"]),
    authButtonLoading() {
      return this.isLoading;
    },
  },
  components: {
    PlanView,
    AuthButton, // eslint-disable-next-line vue/no-unused-components
  },
  data() {
    return {
      username: "",
      phone: "",
      email: "",
      password: "",
      passwordConfirm: "",
      site: "",
      isChecked: false,
      showPassword: false, // Indica se a senha deve ser visível
      passwordFieldTypeOne: "password", // Initial type is "password"
      passwordFieldTypeConfirm: "password",
      isLoading: false, // Indica se a requisição está em progresso
      selectedPlan: {
        planTitle: "Hospedagem 3",
        planPrice: "R$ 999/",
        planTipTitle: "cobrado mensalemente",
        planTipSubtitle: "sem taxa de setup",
        planSubtitle: "Ideal para site com mais de 60k de visitas.",
        planHost: "no Brasil.",
        planServer: "Servidores em nossos data centers de São Paulo;",
        planFtp: "limitados usuário de FTP para upload ou download;",
        planEmail: "limitadas contas de e-mails profissionais;",
        planSubDomainQuantity: "50 subdomínio",
        planMigrationTitle: "Migração Gratuita;",
        planMigrationSubTitle:
          "Migramos todos seus sites para nossos servidores;",
      },
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
    formatPhone() {
      let phoneInput = document.getElementById("phone");
      let phone = phoneInput.value.replace(/\D/g, "");
      phone =
        phone.length > 10
          ? phone.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3")
          : phone.replace(/^(\d{2})(\d{4})(\d{4}).*/, "($1) $2-$3");
      phoneInput.value = phone;
    },
    greet() {
      console.log(this.message);
    },
    isFormValid() {
      return !this.username;
    },
    async submitForm(event) {
      // Função chamada ao submeter o formulário
      event.preventDefault(); // Previne o comportamento padrão do formulário
      this.isLoading = true; // Indica que a requisição está em progresso
      if (this.password.length < 8 || this.passwordConfirm.length < 8) {
        // Verifica se a senha tem menos de 8 caracteres
        alert("A senha deve ter no mínimo 8 caracteres"); // Exibe uma mensagem de alerta
        this.isLoading = false;
        return;
      }
      if (this.password !== this.passwordConfirm) {
        alert("As senhas não conferem");
        this.isLoading = false;
        return;
      }
      try {
        const response = await api.post("/users", {
          email: this.email,
          username: this.username,
          password: this.password,
          name: {
            firstname: "John",
            lastname: "Doe",
          },
          address: {
            city: "kilcoole",
            street: "7835 new road",
            number: 3,
            zipcode: "12926-3874",
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
          },
          phone: this.phone,
          site: this.site,
        });

        const responseData = JSON.parse(response.config.data);
        const username = responseData.username;
        store.commit("setSelectedUser", {
          id: 1,
          email: username,
        }); // Imprime o token de autenticação retornado pela API
      } catch (error) {
        console.log(error); // Imprime o erro no console, caso ocorra algum
      } finally {
        this.isLoading = false;
        this.$router.push("/");
      }
    },
  },
};
</script>
<style scoped>
@import "register.scss";
</style>
