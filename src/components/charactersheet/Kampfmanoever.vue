<template>
  <div class="flex">
    <div class="text-white">
      <h2 class="text-xl text-center">Kampfmanöver</h2>
      <hr class="opacity-20 pb-3" />
      <table class="mx-3">
        <tr class="text-xs">
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
        <tr class="text-xs">
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
  padding: 0rem 0.5rem;
  padding-bottom: 1rem;
}
td:first-child {
  width: 150px;
}
</style>
