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
    <div class="border-b border-opacity-25 pl-3 md:pl-0 mb-6">
      <router-link to="/kompendium" class="text-xl">Kompendium</router-link>
      <span> > </span>
      <router-link to="/kompendium/armor" class="text-lg">Rüstung</router-link>
    </div>
    <searchBar
      @passKeyword="getKeyword($event)"
      class="sticky -top-6 md:-top-12"
    />

    <armor-list
      :lightArmor="lightArmor"
      :middleArmor="middleArmor"
      :heavyArmor="heavyArmor"
      :armorExtra="armorExtra"
      :shields="shields"
      :searchKey="searchKeyword"
    />
  </div>
</template>

<script>
import searchBar from "../../components/kompendium/SearchBar.vue";
import ArmorList from "../../components/kompendium/ArmorList.vue";
import axios from "axios";
export default {
  components: { searchBar, ArmorList },
  data() {
    return {
      searchKeyword: "",
      lightArmor: [],
      middleArmor: [],
      heavyArmor: [],
      armorExtra: [],
      shields: [],
      errors: [],
    };
  },
  methods: {
    getKeyword(keyword) {
      this.searchKeyword = keyword;
    },
  },
  async created() {
    this.$store.state.isLoading = true;
    try {
      const response = await axios.get(
        this.$config.apiUrl + "/leichteruestung"
      );
      this.lightArmor = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(
        this.$config.apiUrl + "/mittelschwereruestung"
      );
      this.middleArmor = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(
        this.$config.apiUrl + "/schwereruestung"
      );
      this.heavyArmor = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(this.$config.apiUrl + "/ruestungextra");
      this.armorExtra = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(this.$config.apiUrl + "/schilde");
      this.shields = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    this.$store.state.isLoading = false;
  },
};
</script>

<style scoped>
a:hover {
  color: #f28241;
}
</style>
