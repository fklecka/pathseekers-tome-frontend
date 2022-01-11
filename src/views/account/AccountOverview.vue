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
    "
  >
    <confirm-modal
      v-if="confirmVisiblePassword"
      class="absolute left-0 top-0 z-50"
      @confirm="
        resetPassword();
        confirmVisiblePassword = false;
      "
      @close="confirmVisiblePassword = false"
    >
      <template v-slot:text>Willst du dein Passwort ändern?</template>
      <template v-slot:confirm>Password ändern</template>
    </confirm-modal>
    <confirm-modal
      v-if="confirmVisibleAccount"
      class="absolute left-0 top-0 z-50"
      @confirm="
        deleteAccount();
        confirmVisibleAccount = false;
      "
      @close="confirmVisibleAccount = false"
    >
      <template v-slot:text
        ><p>Willst du deinen Account wirklich löschen?</p>
        <p>Alle deine Charaktere werden unwiderruflich gelöscht!</p></template
      >
      <template v-slot:confirm>Account löschen</template>
    </confirm-modal>
    <div class="w-full xl:w-758 px-2 md:px-0">
      <h3 class="text-white text-xl pb-6 font-semibold">Profil</h3>
      <div class="pt-6">
        <table class="w-full">
          <tr class="border-b border-opacity-25">
            <td class="font-semibold text-white opacity-25 w-2/4 py-3">
              Benutzername
            </td>
            <td class="text-white w-2/4">{{ this.user.username }}</td>
          </tr>
          <tr class="border-b border-opacity-25">
            <td class="font-semibold text-white opacity-25 w-2/4 py-3">
              E-Mail
            </td>
            <td class="text-white w-2/4">{{ this.user.email }}</td>
          </tr>
        </table>
        <custom-button class="bg-card mt-6"
          ><router-link to="edit">Profil bearbeiten</router-link></custom-button
        >
        <custom-button
          class="bg-card mt-6 ml-2 md:ml-6"
          @click="confirmVisiblePassword = true"
        >
          Passwort ändern
        </custom-button>
      </div>
      <h3 class="text-white text-xl pt-12 pb-6 font-semibold">
        Dein Abonnement
      </h3>
      <abo-card
        v-if="this.user.abo === 'free'"
        title="Free"
        text="Nutze Pathseeker's Tome gratis mit beschränkter Anzahl an Charakter-Slots"
      />
      <abo-card
        v-if="this.user.abo === 'premium'"
        class="my-6"
        title="Premium"
        text="Nutze Pathseeker’s Tome mit unbegrenzter
      Anzahl an Charakter-Slots."
        price="3,99€ / Monat"
      />
      <custom-button class="bg-card mt-6"
        ><router-link to="subscriptions"
          >Abonnement ändern</router-link
        ></custom-button
      >
    </div>
    <div>
      <h3 class="text-white text-xl pb-6 pt-12 font-semibold">
        Account löschen
      </h3>
      <custom-button class="bg-red-600" @click="confirmVisibleAccount = true"
        >Account löschen</custom-button
      >
    </div>
  </div>
</template>

<script>
import CustomButton from "../../components/CustomButton.vue";
import AboCard from "../../components/AboCard.vue";
import { mapGetters, mapActions } from "vuex";
import ConfirmModal from "../../components/ConfirmModal.vue";
import { useToast } from "vue-toastification";
import AccountService from "../../../services/AccountService";
import AuthService from "../../../services/AuthService";
export default {
  name: "AccountOverview",
  components: { CustomButton, AboCard, ConfirmModal },
  data: () => {
    return {
      confirmVisiblePassword: false,
      confirmVisibleAccount: false,
      errors: {},
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
      getUser: "auth/getUser",
    }),
    async resetPassword() {
      const toast = useToast();
      try {
        const response = await AccountService.sendPasswordResetMail(
          this.$config.apiUrl,
          this.user.email
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
    async deleteAccount() {
      const toast = useToast();
      const config = {
        headers: {
          headers: {
            Authorization: AuthService.getFullToken(),
          },
        },
      };
      try {
        const response = await AccountService.deleteAccount(
          this.$config.apiUrl,
          config
        );
        if (response.success) {
          toast.success(response.success);
          this.logout();
          AuthService.logout();
          this.$router.push("/");
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped></style>
