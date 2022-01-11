<template>
  <div class="w-full h-full bg-bg flex justify-center items-center">
    <div class="m-auto w-screen px-4 sm:w-400 pt-50">
      <img src="../../assets/tome_logo_white.svg" alt="" />
      <h2 class="text-4xl font-semibold text-font pt-50">Passwort ändern</h2>
      <div class="pt-3 text-font">
        <form action="" @submit.prevent="submit">
          <div class="flex flex-col">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail"
              class="
                w-full
                h-10
                px-5
                mt-8
                text-xl
                border
                email
                bg-bg
                border-orange
                rounded-2xl
                text-font
              "
              v-model="form.email"
            />
          </div>
          <div class="relative">
            <input
              :type="pwType"
              name="password"
              id="password"
              placeholder="Passwort"
              class="
                w-full
                h-10
                px-5
                mt-8
                text-xl
                border
                password
                bg-bg
                border-orange
                rounded-2xl
                text-font
              "
              v-model="form.password"
            />
            <span
              class="
                absolute
                text-xl
                border-0
                text-font
                opacity-60
                top-38
                right-5
              "
              @click="showPassword"
            >
              {{ showButton }}
            </span>
          </div>
          <div class="relative">
            <input
              :type="pwTypeConfirm"
              placeholder="Passwort bestätigen"
              class="
                w-full
                h-10
                px-5
                mt-8
                text-xl
                border
                password
                bg-bg
                border-orange
                rounded-2xl
                text-font
              "
              name="password_confirmation"
              id="password_confirmation"
              v-model="form.password_confirmation"
            />
            <span
              class="
                absolute
                text-xl
                border-0
                text-font
                opacity-60
                top-38
                right-5
              "
              @click="showPasswordConfirm"
            >
              {{ showButtonConfirm }}
            </span>
          </div>
          <div>
            <button
              type="submit"
              class="
                w-full
                h-12
                text-xl
                font-bold
                text-white
                border-0
                rounded-2xl
                bg-orange
                mt-7
              "
            >
              <p v-if="this.$store.state.isLoading === false">
                Passwort speichern
              </p>
              <p v-if="this.$store.state.isLoading === true">Bitte warten</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import AccountService from "../../../services/AccountService";
import AuthService from "../../../services/AuthService";
export default {
  data() {
    return {
      pwType: "password",
      pwTypeConfirm: "password",
      showButton: "Anzeigen",
      showButtonConfirm: "Anzeigen",
      form: {
        email: "",
        password: "",
        password_confirmation: "",
        token: "",
      },
      errors: {},
    };
  },
  props: ["token"],
  methods: {
    async submit() {
      const request = this.form;
      request.token = this.token;
      const toast = useToast();
      this.$store.state.isLoading = true;
      const config = {
        headers: {
          headers: {
            Authorization: AuthService.getFullToken(),
          },
        },
      };
      try {
        const response = await AccountService.resetPassword(
          this.$config.apiUrl,
          request,
          config
        );
        toast.success(response.message);
        this.$router.push("/login");
      } catch (e) {
        if (e.errors.email) {
          toast.error(e.errors.email[0]);
        }
        if (e.errors.password) {
          toast.error(e.errors.password[0]);
        }
      } finally {
        this.$store.state.isLoading = false;
      }
    },
    showPassword(e) {
      e.preventDefault();
      if (this.pwType === "password") {
        this.pwType = "text";
        this.showButton = "Verstecken";
      } else {
        this.pwType = "password";
        this.showButton = "Anzeigen";
      }
    },
    showPasswordConfirm(e) {
      e.preventDefault();
      if (this.pwTypeConfirm === "password") {
        this.pwTypeConfirm = "text";
        this.showButtonConfirm = "Verstecken";
      } else {
        this.pwTypeConfirm = "password";
        this.showButtonConfirm = "Anzeigen";
      }
    },
  },
};
</script>

<style scoped></style>
