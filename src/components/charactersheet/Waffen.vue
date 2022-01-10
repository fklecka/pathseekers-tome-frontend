<template>
  <div>
    <div class="text-white">
      <h2 class="text-xl text-center">Waffen</h2>
      <hr class="opacity-20 pb-3" />
      <ul>
        <li
          v-for="waffe in charactersheetData.character.items.weapons"
          v-bind:key="waffe.id"
        >
          <waffe :item="waffe" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Waffe from "./Waffe.vue";
import { mapGetters } from "vuex";
export default {
  components: { Waffe },
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
</style>
