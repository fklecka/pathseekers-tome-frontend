<template>
  <div
    class="w-full h-app bg-bg pt-3 pb-36 md:px-12 md:pt-16 overflow-y-scroll"
  >
    <div
      class="flex flex-wrap gap-3 justify-center md:justify-start"
      v-if="this.user"
    >
      <character-card
        v-for="character in this.$store.state.characters"
        :key="character"
        :character="character"
      />
      <router-link to="/characters/new">
        <div
          class="
            w-96
            h-28
            bg-card
            rounded-md
            flex
            items-center
            p-5
            justify-center
          "
        >
          <p class="text-center text-font text-xl">Neuen Charakter erstellen</p>
        </div>
      </router-link>
    </div>
    <div
      class="
        flex flex-col
        justify-center
        items-center
        text-white text-3xl
        h-full
      "
      v-if="!this.user"
    >
      <p>Um einen Charakter zu erstellen benötigen Sie einen Account</p>
      <p class="pt-6">
        Bitte loggen Sie sich ein oder registrieren einen neuen Account
      </p>
    </div>
  </div>
</template>

<script>
import CharacterCard from "../components/CharacterCard.vue";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "CharacterOverview",
  components: { CharacterCard },
  data: () => {
    return {
      characters: [],
      errors: [],
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions(["setCharacterState"]),
  },
  async mounted() {
    if (this.user) {
      this.$store.state.isLoading = true;
      const apiUrl = "http://localhost/api/characters/" + this.user.id;
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        this.setCharacterState(response.data);
      } catch (e) {
        this.errors.push(e);
      } finally {
        this.$store.state.isLoading = false;
      }
    }
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: rgba(256, 256, 256, 0.2);
}
</style>
