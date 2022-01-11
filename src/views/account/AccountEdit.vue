<template>
  <div
    class="
      w-full
      h-app
      bg-bg
      pt-6
      md:pt-12
      pb-36
      md:pb-16 md:px-12
      overflow-y-scroll
      text-font
    "
  >
    <div class="w-full xl:w-758 px-2 md:px-0">
      <h3 class="text-white text-xl pb-6 font-semibold">Profil bearbeiten</h3>
      <div class="py-12">
        <form action="">
          <div class="flex flex-col">
            <label for="username" class="text-xl"> Benutzername </label>
            <input
              type="text"
              class="
                w-full
                h-10
                px-5
                text-xl
                border
                mb-6
                email
                bg-bg
                rounded-2xl
              "
              name="username"
              id="username"
              v-model="this.form.username"
            />
          </div>
          <div class="flex flex-col">
            <label for="email" class="text-xl"> E-Mail </label>
            <input
              type="text"
              class="
                w-full
                mb-6
                h-10
                px-5
                text-xl
                border
                email
                bg-bg
                rounded-2xl
              "
              name="email"
              id="email"
              v-model="this.form.email"
            />
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-xl"> E-Mail bestätigen </label>
            <input
              type="text"
              class="
                w-full
                mb-6
                h-10
                px-5
                text-xl
                border
                email
                bg-bg
                rounded-2xl
              "
              name="email_confirm"
              id="email_confirm"
              v-model="this.form.email_confirmation"
            />
          </div>
          <custom-button class="bg-green" @click="submit()"
            >Profil speichern</custom-button
          >
          <router-link to="overview" class="ml-6">abbrechen</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../../components/CustomButton.vue";
import { mapGetters, mapActions } from "vuex";
import AccountService from "../../../services/AccountService";
import AuthService from "../../../services/AuthService";
import { useToast } from "vue-toastification";
export default {
  name: "AccountEdit",
  components: { CustomButton },
  data: () => {
    return {
      form: {
        username: "",
        email: "",
        email_confirmation: "",
      },
      errors: [],
    };
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
    }),
    async submit() {
      this.$store.state.isLoading = true;
      const toast = useToast();
      const config = {
        apiUrl: this.$config.apiUrl,
        headers: {
          headers: {
            Authorization: AuthService.getFullToken(),
          },
        },
      };
      try {
        const response = await AccountService.editAccount(
          this.$config.apiUrl,
          this.form,
          config
        );
        if (response.success) {
          toast.success(response.success);
          this.$router.push("/account/overview");
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.getUser(config);
        this.$store.state.isLoading = false;
      }
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>

<style></style>
