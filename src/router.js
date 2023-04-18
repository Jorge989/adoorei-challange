import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home/HomeView.vue";
import Login from "./views/Login/LoginView.vue";
import Register from "./views/Register/RegisterView.vue";
import Plans from "./views/Plans/PlansView.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/plans",
    name: "Plans",
    component: Plans,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
