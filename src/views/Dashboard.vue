<template>
  <div>
    <top-nav class="px-2 md:px-6 sticky top-0" />
    <div class="flex">
      <router-view />
    </div>
    <mobile-nav class="md:hidden" />
  </div>
</template>

<style lang="scss"></style>

<script>
import TopNav from "../components/nav/TopNav.vue";
import MobileNav from "../components/nav/MobileNav.vue";
export default {
  name: "App",
  components: {
    TopNav,
    MobileNav,
  },
};
</script>
