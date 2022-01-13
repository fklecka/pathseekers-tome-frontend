<template>
  <div class="sprachen m-1 sm:m-3 px-1 sm:px-3 pb-3">
    <div class="text-white w-full">
      <h2 class="text-xl text-center">Sprachen</h2>
      <hr class="opacity-20 mb-3" />
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
.sprachen {
  border: 3px inset #565d66;
  background-color: #232a33;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
