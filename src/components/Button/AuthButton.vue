<template>
  <button class="auth-button" @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
  name: "AuthButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
@import "styles.scss";
</style>
