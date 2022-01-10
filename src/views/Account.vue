<template>
  <div class="flex w-full">
    <account-nav class="hidden md:flex flex-shrink-0" />
    <router-view />
  </div>
</template>

<script>
import AccountNav from "../components/nav/AccountNav.vue";
export default {
  name: "Account",
  components: { AccountNav },
};
</script>

<style scoped></style>
