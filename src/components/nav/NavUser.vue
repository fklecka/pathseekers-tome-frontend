<template>
  <div
    class="
      nav_user
      text-font
      flex flex-col
      items-center
      z-50
      px-2
      py-2
      select-none
    "
  >
    <div class="flex items-center cursor-pointer" v-on:click="open">
      <p class="mx-2">{{ user.username }}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.159"
        height="9.239"
        viewBox="0 0 16.159 9.239"
      >
        <path
          id="Icon_ionic-ios-arrow-down"
          data-name="Icon ionic-ios-arrow-down"
          d="M14.27,17.7l6.11-6.115a1.15,1.15,0,0,1,1.631,0,1.164,1.164,0,0,1,0,1.636l-6.923,6.928a1.153,1.153,0,0,1-1.592.034L6.524,13.226A1.155,1.155,0,0,1,8.155,11.59Z"
          transform="translate(-6.188 -11.246)"
          fill="#fff"
          opacity="0.87"
        />
      </svg>
    </div>

    <ul
      class="
        flex-col
        justify-center
        text-center
        pt-2
        flex
        shadow-bottom
        bg-bg
        absolute
        top-14
      "
      v-if="openMenu"
    >
      <router-link
        v-on:click="open"
        to="/account"
        class="hover:bg-card py-2 px-3"
        >Account</router-link
      >
      <a
        v-on:click="open"
        @click.prevent="menuLogout"
        class="hover:bg-card py-2 px-3 text-orange"
        >Abmelden</a
      >
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AuthService from "../../../services/AuthService";
export default {
  name: "NavUser",
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    open() {
      if (this.openMenu) {
        this.openMenu = false;
      } else {
        this.openMenu = true;
      }
    },

    ...mapActions({
      logout: "auth/logout",
    }),

    menuLogout() {
      AuthService.logout();
      this.logout();
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>

<style lang="scss" scoped>
.nav_user:hover {
  background-color: "#FFFFFF";
}
</style>
