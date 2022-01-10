<template>
  <div class="flex w-80">
    <div class="text-white w-full">
      <h2 class="text-xl text-center">Talente</h2>
      <hr class="opacity-20 pb-3" />
      <ul>
        <li
          v-for="talent in charactersheetData.character.talents"
          v-bind:key="talent.id"
        >
          {{ talent }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
