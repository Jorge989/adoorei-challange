<template>
  <div class="login-container">
    <img
      class="locaweb-logo"
      :src="require('@/assets/img/logo.png')"
      alt="locaweb"
    />

    <form class="form-login" @submit="submitForm">
      <h1 id="login-title">Entre na sua conta</h1>
      <p>Para acessar sua conta informa seu e-mail e senha</p>

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
      <div class="password-container">
        <input
          :type="passwordFieldType"
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
          <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
        </button>
      </div>
      <!-- Link para redefinição de senha -->
      <router-link class="forgot-password-btn" to="#"
        >Esqueci minha senha</router-link
      >

      <!-- Botão de autenticação -->
      <AuthButton
        text="fazer login"
        :is-loading="isLoading"
        :class="{ loading: isLoading }"
        :disabled="!isFormValid"
        @keydown.enter.prevent="submitForm"
      ></AuthButton>
    </form>

    <!-- Link para cadastro -->
    <span
      >Ainda não tem conta?
      <router-link class="register-btn" to="/plans">Cadastre-se</router-link>
    </span>
  </div>
</template>

<script>
import store from "../../utils/store";
import AuthButton from "../../components/Button/AuthButton.vue";
import api from "../../utils/api";
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  name: "LoginView",
  components: {
    AuthButton,
  },

  data() {
    return {
      isLoading: false, // Indica se a requisição está em progresso
      username: "", // Armazena o email informado pelo usuário
      password: "", // Armazena a senha informada pelo usuário
      showPassword: false, // Indica se a senha deve ser visível
      passwordFieldType: "password", // Initial type is "password"
    };
  },
  computed: {
    authButtonLoading() {
      return this.isLoading;
    },
    selectedUser() {
      return store.state.selectedUser;
    },
    isFormValid() {
      return !!this.username && !!this.password;
    },
  },

  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.passwordFieldType = this.showPassword ? "text" : "password";
    },

    async submitForm(event) {
      event.preventDefault(); // Impede o comportamento padrão do formulário
      this.isLoading = true; // Indica que uma solicitação está em andamento
      try {
        // Recupere o endereço de e-mail do usuário da API usando seu ID

        // Faça uma solicitação POST para autenticar o usuário usando seu e-mail e senha
        const authResponse = await api.post("/auth/login", {
          password: "m38rmF$",
          username: "johnd",
        });

        localStorage.setItem("token", authResponse.data.token);

        this.$router.push("/home"); // Registra o token de autenticação retornado pela API
      } catch (error) {
        console.log(error); // Registra todos os erros que ocorrem
        alert("Ocorreu um erro ao realizar a autenticação.");
      } finally {
        this.isLoading = false; // Indica que a solicitação foi concluída
      }
    },
  },
};
</script>

<style>
@import "login.scss";
</style>
