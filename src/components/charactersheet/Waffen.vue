<template>
  <div class="waffen m-1 sm:m-3 px-1 sm:px-3 pb-3">
    <div class="text-white">
      <h2 class="text-xl text-center">Waffen</h2>
      <hr class="opacity-20 mb-3" />
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
.waffen {
  border: 3px inset #565d66;
  background-color: #232a33;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
