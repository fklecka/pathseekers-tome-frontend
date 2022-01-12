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
      <router-link to="/kompendium/talents" class="text-lg">Waffen</router-link>
    </div>
    <searchBar
      @passKeyword="getKeyword($event)"
      class="sticky -top-6 md:-top-12"
    />

    <weapon-list
      :lightWeapons="lightWeapons"
      :warWeapons="warWeapons"
      :exoticWeapons="exoticWeapons"
      :searchKey="searchKeyword"
    />
  </div>
</template>

<script>
import searchBar from "../../components/kompendium/SearchBar.vue";
import weaponList from "../../components/kompendium/WeaponList.vue";
import axios from "axios";
export default {
  components: { searchBar, weaponList },
  data() {
    return {
      searchKeyword: "",
      lightWeapons: [],
      warWeapons: [],
      exoticWeapons: [],
      errors: [],
    };
  },
  methods: {
    getKeyword(keyword) {
      this.searchKeyword = keyword;
    },
  },
  async created() {
    try {
      this.$store.state.isLoading = true;
      const response = await axios.get(this.$config.apiUrl + "/einfachewaffen");
      this.lightWeapons = response.data;
    } catch (e) {
      this.errors.push(e);
    } finally {
      this.$store.state.isLoading = false;
    }
    try {
      this.$store.state.isLoading = true;
      const response = await axios.get(this.$config.apiUrl + "/kriegswaffen");
      this.warWeapons = response.data;
    } catch (e) {
      this.errors.push(e);
    } finally {
      this.$store.state.isLoading = false;
    }
    try {
      this.$store.state.isLoading = true;
      const response = await axios.get(
        this.$config.apiUrl + "/exotischewaffen"
      );
      this.exoticWeapons = response.data;
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
