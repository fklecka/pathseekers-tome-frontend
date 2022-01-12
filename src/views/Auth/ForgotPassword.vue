<template>
  <div class="w-full h-full pb-32 bg-bg flex justify-center items-center">
    <div class="m-auto w-screen px-4 sm:w-400 pt-50">
      <img src="../../assets/tome_logo_white.svg" alt="" />
      <h2 class="text-4xl font-semibold text-font pt-50">Passwort vergessen</h2>
      <div class="pt-12 text-font">
        <form action="" @submit.prevent="resetPassword">
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
                Passwort zurücksetzen
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
import AccountService from "../../../services/AccountService";
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      form: {
        email: "",
      },
      errors: {},
    };
  },
  methods: {
    async resetPassword() {
      const toast = useToast();
      try {
        const response = await AccountService.sendPasswordResetMail(
          this.$config.apiUrl,
          this.form.email
        );
        if (response.message) {
          toast.success("E-Mail zum ändern des Passworts wurde versendet.");
        }
      } catch (e) {
        toast.error("Etwas ist schiefgelaufen.");
      } finally {
        this.$store.state.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
