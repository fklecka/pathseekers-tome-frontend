<template>
  <div class="flex w-80">
    <div class="text-white w-full">
      <h2 class="text-xl text-center">Sprachen</h2>
      <hr class="opacity-20 pb-3" />
      <ul>
        <li
          v-for="language in charactersheetData.character.language"
          v-bind:key="language.id"
        >
          {{ language }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  computed: {
    ...mapGetters({
      charactersheetData: "charactersheetData",
    }),
  },
};
</script>

<style scoped>
td {
  padding: 0rem 0.5rem;
  padding-bottom: 1rem;
}
td:first-child {
  width: 150px;
}
</style>
