<template>
  <div class="flex">
    <div class="text-white">
      <h2 class="text-xl text-center">Bewegungsraten</h2>
      <hr class="opacity-20 pb-3" />
      <table class="mx-3">
        <tr class="text-xs">
          <th></th>
          <th colspan="2">Grundbewegung</th>
          <th colspan="2">Modifikatoren</th>
        </tr>
        <tr class="text-md">
          <td><strong>Land</strong></td>
          <td colspan="2">
            <value-field-long
              :value="charactersheetData.character.speedRates.speed"
              :main="true"
            />
          </td>
          <td colspan="2">
            <input-field-long
              @passValue="
                charactersheetData.character.speedRates.speedMod =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.speedRates.speedMod"
            />
          </td>
        </tr>
        <tr class="text-xs">
          <th></th>
          <th>Fliegen</th>
          <th>Schwimmen</th>
          <th>Klettern</th>
          <th>Graben</th>
        </tr>
        <tr class="text-md">
          <td><strong>Andere</strong></td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.speedRates.flying =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="true"
              :dataValue="charactersheetData.character.speedRates.flying"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.speedRates.swimming =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.speedRates.swimming"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.speedRates.climbing =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.speedRates.climbing"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.speedRates.digging =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.speedRates.digging"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ValueFieldLong from "./ValueFieldLong.vue";
import InputFieldLong from "./InputFieldLong.vue";
import InputField from "./InputField.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { ValueFieldLong, InputFieldLong, InputField },
  props: ["attribute"],
  computed: {
    ...mapGetters({
      charactersheetData: "charactersheetData",
    }),
  },
  methods: {
    ...mapActions({
      setCharacterSheetDataState: "setCharacterSheetDataState",
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
