<template>
  <input
    type="text"
    name="searchBar"
    id="searchBar"
    class="w-full bg-bg shadow-bottom p-4 text-2xl"
    placeholder="Suche"
    v-model="keyword"
    @input="passKeyword"
    autofocus
  />
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    passKeyword() {
      this.$emit("passKeyword", this.keyword);
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
