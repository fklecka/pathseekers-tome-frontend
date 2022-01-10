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
    <div class="border-b border-opacity-25">
      <router-link to="/kompendium" class="text-xl">Kompendium</router-link>
      <span> > </span>
      <router-link to="/kompendium/talents" class="text-lg"
        >Talente</router-link
      >
    </div>
    <searchBar
      @passKeyword="getKeyword($event)"
      class="sticky -top-6 md:-top-12"
    />

    <talentList :listData="talents" :searchKey="searchKeyword" />
  </div>
</template>

<script>
import searchBar from "../../components/kompendium/SearchBar.vue";
import axios from "axios";
import talentList from "../../components/kompendium/TalentList.vue";
export default {
  components: { searchBar, talentList },
  data() {
    return {
      searchKeyword: "",
      talents: [],
      errors: [],
    };
  },
  methods: {
    getKeyword(keyword) {
      this.searchKeyword = keyword;
    },
  },
  async mounted() {
    try {
      this.$store.state.isLoading = true;
      const response = await axios.get("http://localhost/api/talente");
      this.talents = response.data;
    } catch (e) {
      this.errors.push(e);
    } finally {
      this.$store.state.isLoading = false;
    }
  },
};
</script>

<style scoped>
a:hover {
  color: #f28241;
}
</style>
