<template>
  <div class="flex justify-center ruestungsklasse1 m-1 sm:m-3 px-1 sm:px-3">
    <div class="text-white w-full">
      <h2 class="text-xl text-center">Rüstungsklasse 1</h2>
      <hr class="opacity-20 mb-3" />
      <table>
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
  padding-right: 0.3rem;
  padding-bottom: 0.5rem;
}
td:first-child {
  min-width: 150px;
  font-size: 0.7rem;
}

@media (min-width: 640px) {
  td {
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  td:first-child {
    width: 150px;
    font-size: 1rem;
  }
}
.ruestungsklasse1 {
  border: 3px inset #565d66;
  background-color: #232a33;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
