<template>
  <button
    class="auth-button"
    :class="{
      loading: isLoading,
      'left-align': text === 'escolher esse plano',
      'auth-button-register': isRegister,
    }"
    @click="handleClick"
  >
    {{ text }}
    <span v-if="isLoading">
      <font-awesome-icon icon="spinner" spin></font-awesome-icon>
    </span>
  </button>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSpinner);

export default {
  name: "AuthButton",
  components: {
    FontAwesomeIcon,
  },
  props: {
    text: {
      type: String,
      required: true,
      isRegister: {
        type: Boolean,
        default: false,
      },
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    isLoading(newVal) {
      console.log("isLoading changed to", newVal);
    },
  },
  methods: {
    handleClick() {
      if (this.text === "escolher esse plano") {
        this.$emit("plan-selected");
      } else {
        this.$emit("click");
      }
    },
  },
};
</script>
<style>
@import "styles.scss";
</style>
