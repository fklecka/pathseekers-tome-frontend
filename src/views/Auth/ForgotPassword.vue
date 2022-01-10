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
import axios from "axios";
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
      await axios
        .post("/api/password/email", this.form)
        .then(() => {
          toast.success("Email wurde versendet");
          this.$router.push("/login");
        })
        .catch((e) => {
          for (const error of Object.keys(e.response.data.errors)) {
            toast.error(e.response.data.errors[error][0]);
          }
        });
    },
  },
};
</script>

<style></style>
