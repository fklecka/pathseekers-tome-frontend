<template>
  <div>
    <top-nav class="px-2 md:px-6" />
    <div class="flex">
      <!-- <side-nav class="hidden md:flex" /> -->
      <router-view />
    </div>
    <mobile-nav class="md:hidden" />
  </div>
</template>

<style lang="scss"></style>

<script>
import TopNav from "../components/nav/TopNav.vue";
// import SideNav from "../components/nav/SideNav.vue";
import MobileNav from "../components/nav/MobileNav.vue";
export default {
  name: "App",
  components: {
    TopNav,
    // SideNav,
    MobileNav,
  },
};
</script>
