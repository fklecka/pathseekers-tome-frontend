<template>
  <div>
    <router-link to="/login">
      <button class="text-white font-medium text-sm">Login</button>
    </router-link>
    <router-link to="/register">
      <custom-button class="bg-orange ml-6">Registrieren</custom-button>
    </router-link>
  </div>
</template>

<script>
import CustomButton from "../CustomButton.vue";
export default {
  name: "NavButtons",
  components: { CustomButton },
};
</script>

<style></style>
