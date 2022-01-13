<template>
  <div class="kampfmanoever m-1 sm:m-3 px-1 sm:px-3">
    <div class="text-white">
      <h2 class="text-xl text-center">Kampfmanöver</h2>
      <hr class="opacity-20 mb-3" />
      <table>
        <tr class="text-sheetHeader sm:text-xs">
          <th></th>
          <th>Gesamt</th>
          <th>GAB</th>
          <th>Stärke</th>
          <th>Größen Mod.</th>
        </tr>
        <tr class="text-md">
          <td><strong>KMB</strong></td>
          <td>
            <value-field
              :value="
                charactersheetData.character.classAttributes.gab +
                calcStMod +
                charactersheetData.character.sizeMod
              "
              :main="true"
            />
          </td>
          <td>
            <value-field
              :value="charactersheetData.character.classAttributes.gab"
              :main="false"
            />
          </td>
          <td>
            <value-field :value="calcStMod" :main="false" />
          </td>
          <td>
            <value-field
              :value="charactersheetData.character.sizeMod"
              :main="false"
            />
          </td>
        </tr>
        <tr class="text-sheetHeader sm:text-xs">
          <th></th>
          <th>Gesamt</th>
          <th>GAB</th>
          <th>Stärke</th>
          <th>GE</th>
        </tr>
        <tr class="text-md">
          <td><strong>KMV</strong></td>
          <td>
            <value-field
              :value="
                10 +
                charactersheetData.character.classAttributes.gab +
                calcGeMod +
                charactersheetData.character.sizeMod
              "
              :main="true"
            />
          </td>
          <td>
            <value-field
              :value="charactersheetData.character.classAttributes.gab"
              :main="false"
            />
          </td>
          <td><value-field :value="calcStMod" :main="false" /></td>
          <td><value-field :value="calcGeMod" :main="false" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ValueField from "./ValueField.vue";
import { mapGetters } from "vuex";

export default {
  components: { ValueField },
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
    calcStMod() {
      return Math.floor(
        (this.charactersheetData.character.attributes.st +
          this.charactersheetData.character.attributes.raceBonusAttributes.st -
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
  width: 100px;
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
.kampfmanoever {
  border: 3px inset #565d66;
  background-color: #232a33;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
