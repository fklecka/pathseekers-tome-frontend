<template>
  <div class="flex">
    <div class="text-white">
      <h2 class="text-xl text-center">Rüstungsklasse 1</h2>
      <hr class="opacity-20 pb-3" />
      <table class="mx-3">
        <tr class="text-md w-full">
          <td><strong>Berührung</strong></td>
          <td colspan="2">
            <value-field-long
              :value="10 + calcGeMod + charactersheetData.character.sizeMod"
              :main="true"
            />
          </td>
        </tr>
        <tr class="text-md w-full">
          <td><strong>Auf dem falschen Fuß</strong></td>
          <td colspan="2">
            <value-field-long
              :value="10 + charactersheetData.character.sizeMod"
              :main="true"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ValueFieldLong from "./ValueFieldLong.vue";
import { mapGetters } from "vuex";

export default {
  components: { ValueFieldLong },
  computed: {
    ...mapGetters({
      charactersheetData: "charactersheetData",
    }),
    calcGeMod() {
      return Math.floor(
        (this.charactersheetData.character.attributes.ge +
          this.charactersheetData.character.attributes.raceBonusAttributes.ge -
          10) /
          2
      );
    },
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
