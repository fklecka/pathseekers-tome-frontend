<template>
  <div class="block rettungswuerfe m-1 sm:m-3 px-1 sm:px-3">
    <div class="text-white overflow-x-scroll">
      <h2 class="text-xl text-center">Rettungswürfe</h2>
      <hr class="opacity-20 mb-3" />
      <table>
        <tr class="text-sheetHeader sm:text-xs text-center">
          <th></th>
          <th>Gesamt</th>
          <th>Grundbonus</th>
          <th>Attr. Bonus</th>
          <th>Magie Mod.</th>
          <th>Sonstige</th>
          <th>Temp.</th>
        </tr>
        <tr class="text-md">
          <td><strong>Reflex</strong></td>
          <td>
            <value-field
              :value="
                charactersheetData.character.classAttributes.ref +
                calcGeMod +
                charactersheetData.character.evadingMod.ref.magic +
                charactersheetData.character.evadingMod.ref.sons +
                charactersheetData.character.evadingMod.ref.temp
              "
              :main="true"
            />
          </td>
          <td>
            <value-field
              :value="charactersheetData.character.classAttributes.ref"
              :main="false"
            />
          </td>
          <td><value-field :value="calcGeMod" :main="false" /></td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.evadingMod.ref.magic =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.evadingMod.ref.magic"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.evadingMod.ref.sons =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.evadingMod.ref.sons"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.evadingMod.ref.temp =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.evadingMod.ref.temp"
            />
          </td>
        </tr>
        <tr class="text-md">
          <td><strong>Willen</strong></td>
          <td>
            <value-field
              :value="
                charactersheetData.character.classAttributes.wil +
                calcWeiMod +
                charactersheetData.character.evadingMod.wil.magic +
                charactersheetData.character.evadingMod.wil.sons +
                charactersheetData.character.evadingMod.wil.temp
              "
              :main="true"
            />
          </td>
          <td>
            <value-field
              :value="charactersheetData.character.classAttributes.wil"
              :main="false"
            />
          </td>
          <td><value-field :value="calcWeiMod" :main="false" /></td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.evadingMod.wil.magic =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.evadingMod.wil.magic"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.evadingMod.wil.sons =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.evadingMod.wil.sons"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.evadingMod.wil.temp =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.evadingMod.wil.temp"
            />
          </td>
        </tr>
        <tr class="text-md">
          <td><strong>Zähigkeit</strong></td>
          <td>
            <value-field
              :value="
                charactersheetData.character.classAttributes.zah +
                calcKonMod +
                charactersheetData.character.evadingMod.zah.magic +
                charactersheetData.character.evadingMod.zah.sons +
                charactersheetData.character.evadingMod.zah.temp
              "
              :main="true"
            />
          </td>
          <td>
            <value-field
              :value="charactersheetData.character.classAttributes.zah"
              :main="false"
            />
          </td>
          <td><value-field :value="calcKonMod" :main="false" /></td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.evadingMod.zah.magic =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.evadingMod.zah.magic"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.evadingMod.zah.sons =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.evadingMod.zah.sons"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.evadingMod.zah.temp =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.evadingMod.zah.temp"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ValueField from "./ValueField.vue";
import InputField from "./InputField.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { ValueField, InputField },
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
    calcWeiMod() {
      return Math.floor(
        (this.charactersheetData.character.attributes.wei +
          this.charactersheetData.character.attributes.raceBonusAttributes.wei -
          10) /
          2
      );
    },
    calcKonMod() {
      return Math.floor(
        (this.charactersheetData.character.attributes.kon +
          this.charactersheetData.character.attributes.raceBonusAttributes.kon -
          10) /
          2
      );
    },
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
  min-width: 100px;
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
.rettungswuerfe {
  border: 3px inset #565d66;
  background-color: #232a33;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
