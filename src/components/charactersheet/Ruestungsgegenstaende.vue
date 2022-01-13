<template>
  <div class="text-white ruestungsgegenstaende m-1 sm:m-3 px-1 sm:px-3 pb-3">
    <h2 class="text-xl text-center">Rüstungsgegenstände</h2>
    <hr class="opacity-20 mb-3" />
    <ul>
      <li
        v-for="armor in charactersheetData.character.items.armor"
        v-bind:key="armor.id"
      >
        <ruestung :item="armor" />
      </li>
    </ul>
  </div>
</template>

<script>
import Ruestung from "./Ruestung.vue";
import { mapGetters } from "vuex";
export default {
  components: { Ruestung },
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
li:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}
.ruestungsgegenstaende {
  border: 3px inset #565d66;
  background-color: #232a33;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
