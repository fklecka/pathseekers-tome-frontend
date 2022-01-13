<template>
  <div class="flex angriff m-1 sm:m-3 px-1 sm:px-3">
    <div class="text-white w-full">
      <h2 class="text-xl text-center">Angriff</h2>
      <hr class="opacity-20 mb-3" />
      <table>
        <tr class="text-md w-full">
          <td><strong>GAB</strong></td>
          <td colspan="2">
            <value-field-long
              :value="charactersheetData.character.classAttributes.gab"
              :main="true"
            />
          </td>
        </tr>
        <tr class="text-md w-full">
          <td><strong>ZR</strong></td>
          <td colspan="2">
            <input-field-long
              @passValue="
                charactersheetData.character.classAttributes.zr =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="true"
              :dataValue="charactersheetData.character.classAttributes.zr"
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
.angriff {
  border: 3px inset #565d66;
  background-color: #232a33;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
