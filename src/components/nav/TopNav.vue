<template>
  <div
    class="
      flex
      justify-between
      bg-bg
      h-16
      items-center
      shadow-bottom
      z-40
      relative
    "
  >
    <div class="flex items-center h-full">
      <img
        class="w-32 md:w-150 cursor-pointer"
        src="../../assets/tome_logo_white.svg"
        alt="Tome Logo"
        @click="this.$router.push('/')"
      />
      <ul class="h-full ml-4 text-font hidden md:flex">
        <router-link
          class="h-full flex items-center px-4 hover:bg-cardlight"
          :to="{ name: 'CharacterOverview' }"
        >
          Charaktere
        </router-link>
        <router-link
          class="h-full flex items-center px-4 hover:bg-cardlight"
          :to="{ name: 'Kompendium' }"
          >Kompendium
        </router-link>
        <router-link
          class="h-full flex items-center px-4 hover:bg-cardlight text-orange"
          to="/characters/new"
          v-if="authenticated"
        >
          Neuen Charakter erstellen
        </router-link>
      </ul>
    </div>
    <div>
      <nav-user v-if="authenticated" />
      <nav-buttons v-else />
    </div>
  </div>
</template>

<script>
import NavUser from "./NavUser.vue";
import NavButtons from "./NavButtons.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  name: "TopNav",
  components: { NavUser, NavButtons },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: rgba(256, 256, 256, 0.15);
}
</style>
