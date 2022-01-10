<template>
  <div class="flex">
    <div class="text-white">
      <h2 class="text-xl text-center">Angriff</h2>
      <hr class="opacity-20 pb-3" />
      <table class="mx-3">
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
  padding: 0rem 0.5rem;
  padding-bottom: 1rem;
}
td:first-child {
  width: 150px;
}
</style>
