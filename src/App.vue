<template>
  <div>
    <loading
      :active="loading"
      :color="'#F28241'"
      :background-color="'#000000'"
      :lock-scroll="true"
    />
    <div class="fixed bottom-0 w-full">
      <vue-cookie-comply
        :target="'#app'"
        :preferences="preferences"
        :preferencesLabel="'Cookies'"
        :headerDescription="'Diese Seite nutzt sogenannte Cookies, kleine Dateien, die im Browser lokal gespeichert werden und die Funktion der Seite unterstützen. Wir verwenden nur Cookies welche für die Funktionalität der Website erforderlich sind.'"
        :headerTitle="''"
        :acceptAllLabel="'Akzeptieren'"
      />
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Goudy Bookletter 1911";
  src: local("Goudy Bookletter 1911"),
    url(./fonts/GoudyBookletter1911-Regular.ttf), format(truetype);
}
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Raleway";
  background-color: #2c3540;
  background-image: url("./assets/dark-brick-wall2.png");
  background-repeat: repeat;
}
</style>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import AuthService from "../services/AuthService";
import { mapActions, mapGetters } from "vuex";
import config from "../config/index";
export default {
  components: { Loading },
  data: () => {
    return {
      preferences: [
        {
          title: "Autorisierung",
          description:
            "Diese Cookies sind notwendig um die Funktionalität ihres Accounts zu gewährleisten.",
          items: [
            { label: "Active", value: "Authorization", isRequired: true },
          ],
        },
      ],
    };
  },

  computed: {
    loading() {
      return this.$store.state.isLoading;
    },
    ...mapGetters({
      authenticated: "auth/authenticated",
    }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      logout: "auth/logout",
    }),
  },
  async mounted() {
    if (AuthService.getRememberToken()) {
      this.$store.state.isLoading = true;
      const params = {
        remember_token: null,
      };
      params.remember_token = AuthService.getRememberToken();
      try {
        const token = await AuthService.rememberLogin(config.apiUrl, params);
        if (token) {
          AuthService.setCookie(token);
          const config = {
            apiUrl: this.$config.apiUrl,
            headers: {
              headers: {
                Authorization: AuthService.getFullToken(),
              },
            },
          };
          await this.getUser(config);
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.$store.state.isLoading = false;
      }
    } else {
      AuthService.logout();
      this.logout();
    }
  },
};
</script>
