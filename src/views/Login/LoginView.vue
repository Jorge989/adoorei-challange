<template>
  <div class="container">
    <img
      class="locaweb-logo"
      :src="require('@/assets/img/1.png')"
      alt="locaweb"
    />
    <form class="FormLogin" @submit.prevent="submitForm">
      <h1>Entre na sua conta</h1>
      <p>Para acessar sua conta informa seu e-mail e senha</p>

      <label for="email">E-mail:</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Seu e-mail"
        required
      />
      <label for="password">Senha:</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Sua senha"
        required
      />
      <router-link class="forgot-password-btn" to="#"
        >Esqueci minha senha</router-link
      >
      <AuthButton text="fazer login"></AuthButton>
    </form>
    <span
      >Ainda não tem conta?
      <router-link class="register-btn" to="/register"
        >Cadastre-se</router-link
      ></span
    >
  </div>
</template>

<script>
import AuthButton from "../../components/Button/AuthButton.vue";
export default {
  name: "LoginView",
  components: {
    AuthButton,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {},
  },
};
</script>

<style>
@import "styles.scss";
</style>
