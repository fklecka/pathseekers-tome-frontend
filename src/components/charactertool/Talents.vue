<template>
  <div class="w-full bg-bg overflow-y-scroll text-font">
    <h2 class="font-headline text-4xl text-center">Talente erwerben</h2>
    <p class="pt-6">
      Nachdem wir nun die Fertigkeiten des Charakters erworben haben, musst du
      dem Charakter ein Talent zuweisen. Um Talente einsetzen zu können benötigt
      dein Charakter eine bestimmte Voraussetzung.
    </p>
    <p class="py-3">
      Du kannst anfangs nur ein Talent wählen. Menschen und Kämpfer erhalten ein
      zusätzliches Talent.
    </p>
    <p>Klicke auf den Namen des Talents um Details anzuzeigen</p>
    <p class="pt-3">
      <strong
        >Beachte dass du hier jedes Talent wählen kannst auch wenn dein
        Charakter die Voraussetzungen nicht erfüllt!</strong
      >
    </p>
    <div class="bg-white bg-opacity-5 pt-6 my-6 inputhighlight">
      <p class="pb-6 text-center text-xl">Wähle deine Talente</p>
      <searchBar
        @passKeyword="getKeyword($event)"
        class="sticky -top-6 md:-top-12"
      />

      <talent-list
        :listData="talents"
        :searchKey="searchKeyword"
        class="overflow-y-scroll h-96"
        @passTalents="getAndPassTalents($event)"
      />
    </div>
  </div>
</template>

<script>
import searchBar from "../kompendium/SearchBar.vue";
import axios from "axios";
import TalentList from "./TalentList.vue";
export default {
  components: { searchBar, TalentList },
  data() {
    return {
      searchKeyword: "",
      talents: [],
      errors: [],
      selectedTalents: [],
    };
  },
  methods: {
    getKeyword(keyword) {
      this.searchKeyword = keyword;
    },
    getAndPassTalents(talents) {
      this.selectedTalents = talents;
      this.$emit("passTalents", this.selectedTalents);
    },
  },
  async created() {
    try {
      this.$store.state.isLoading = true;
      const response = await axios.get(this.$config.apiUrl + "/talente");
      this.talents = response.data;
    } catch (e) {
      this.errors.push(e);
    } finally {
      this.$store.state.isLoading = false;
    }
  },
};
</script>

<style></style>
