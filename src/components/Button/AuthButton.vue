<template>
  <button
    class="auth-button"
    :class="{ loading: isLoading }"
    @click="$emit('click')"
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
};
</script>
<style>
@import "styles.scss";
</style>
