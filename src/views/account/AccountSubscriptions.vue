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
    <div class="w-full xl:w-758 px-2 md:px-0">
      <confirm-modal
        v-if="confirmVisible"
        class="absolute left-0 top-0 z-50"
        @confirm="
          changeAbo(this.selectedAbo);
          confirmVisible = false;
        "
        @close="confirmVisible = false"
      >
        <template v-slot:text>Willst du das Abonnement wechseln?</template>
        <template v-slot:confirm>Abonnoment wechseln</template>
      </confirm-modal>
      <h3 class="text-white text-xl my-6 font-semibold">Dein Abonnement</h3>
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

      <h3 class="text-white text-xl font-semibold mt-12">
        Verfügbare Abonnements
      </h3>
      <abo-card
        class="my-6"
        v-if="this.user.abo !== 'free'"
        title="Free"
        text="Nutze Pathseeker's Tome gratis mit beschränkter Anzahl an Charakter-Slots"
        :button="true"
        @confirm="
          confirmVisible = true;
          selectedAbo.abo = 'free';
        "
      />
      <abo-card
        class="my-6"
        title="Premium"
        v-if="this.user.abo !== 'premium'"
        text="Nutze Pathseeker’s Tome mit unbegrenzter
      Anzahl an Charakter-Slots."
        price="3,99€ / Monat"
        :button="true"
        @confirm="
          confirmVisible = true;
          selectedAbo.abo = 'premium';
        "
      />
    </div>
  </div>
</template>

<script>
import AboCard from "../../components/AboCard.vue";
import ConfirmModal from "../../components/ConfirmModal.vue";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import { useToast } from "vue-toastification";

export default {
  components: { AboCard, ConfirmModal },
  name: "AccountSubscriptions",
  data: () => {
    return {
      confirmVisible: false,
      selectedAbo: {
        abo: "",
      },
    };
  },
  methods: {
    async changeAbo() {
      this.$store.state.isLoading = true;
      const toast = useToast();
      await axios
        .put("/api/account/abo/" + this.user.id, this.selectedAbo)
        .then((response) => {
          if (response.data.errors) {
            for (let error of Object.keys(response.data.errors)) {
              toast.error(response.data.errors[error][0]);
            }
          } else if (response.data.success) {
            toast.success(response.data.success);
            this.$router.push("/account/overview");
          }
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          this.$store.state.isLoading = false;
        });
    },
    ...mapActions({
      getUser: "auth/getUser",
    }),
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>

<style></style>
