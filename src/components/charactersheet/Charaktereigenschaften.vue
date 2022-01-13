<template>
  <div
    class="flex justify-center charaktereigenschaften m-1 sm:m-3 px-1 sm:px-3"
  >
    <div class="text-white w-full">
      <h2 class="text-xl text-center">Charaktereigenschaften</h2>
      <hr class="opacity-20 mb-3" />
      <table>
        <tr class="text-sheetHeader sm:text-xs text-center">
          <th></th>
          <th colspan="2">Aktuell</th>
          <th colspan="2">Nächste Stufe</th>
        </tr>
        <tr class="text-md w-full">
          <td><strong>Erfahrung</strong></td>
          <td colspan="2">
            <input-field-long
              @passValue="
                charactersheetData.character.level.exp = parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="true"
              :dataValue="charactersheetData.character.level.exp"
            />
          </td>
          <td colspan="2">
            <input-field-long
              @passValue="
                charactersheetData.character.level.next = parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.level.next"
            />
          </td>
        </tr>
        <tr class="text-sheetHeader sm:text-xs w-full">
          <th></th>
          <th colspan="2" class="md:w-40">Gesamt</th>
          <th colspan="2">Aktuell</th>
        </tr>
        <tr class="text-md w-full">
          <td><strong>Trefferpunkte</strong></td>
          <td colspan="2">
            <value-field-long
              :value="
                charactersheetData.character.classAttributes.hp +
                charactersheetData.character.classAttributes.bonusHp
              "
              :main="true"
            />
          </td>
          <td colspan="2">
            <input-field-long
              @passValue="
                charactersheetData.character.hpCurrent = parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.hpCurrent"
            />
          </td>
        </tr>
        <tr class="text-sheetHeader sm:text-xs w-full">
          <th></th>
          <th colspan="2" class="md:w-40">Gesamt</th>
          <th colspan="2">Aktuell</th>
        </tr>
        <tr class="text-md w-full">
          <td><strong>Initiative</strong></td>
          <td colspan="2">
            <value-field-long
              :value="charactersheetData.character.initaitive.current"
              :main="true"
            />
          </td>
          <td colspan="2">
            <input-field-long
              @passValue="
                charactersheetData.character.initaitive.temp = parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.initaitive.temp"
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
import { mapGetters, mapActions } from "vuex";

export default {
  components: { ValueFieldLong, InputFieldLong },
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
.charaktereigenschaften {
  border: 3px inset #565d66;
  background-color: #232a33;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
