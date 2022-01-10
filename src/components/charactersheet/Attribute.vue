<template>
  <div class="flex">
    <div class="text-white">
      <h2 class="text-xl text-center">Attribute</h2>
      <hr class="opacity-20 pb-3" />
      <table class="mx-3">
        <tr class="text-xs">
          <th></th>
          <th>Wert</th>
          <th>Modifikator</th>
          <th>Wert Temp.</th>
          <th>Mod. Temp</th>
        </tr>
        <tr class="text-md">
          <td><strong>Stärke</strong></td>
          <td>
            <value-field
              :value="charactersheetData.character.attributes.st"
              :main="true"
            />
          </td>
          <td><value-field :value="calcStMod" :main="false" /></td>
          <td>
            <value-field :value="calcTempSt" :main="false" />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.attributes.tempMod.st =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.attributes.tempMod.st"
            />
          </td>
        </tr>
        <tr class="text-md">
          <td><strong>Geschicklichkeit</strong></td>
          <td>
            <value-field
              :value="charactersheetData.character.attributes.ge"
              :main="true"
            />
          </td>
          <td><value-field :value="calcGeMod" :main="false" /></td>
          <td>
            <value-field :value="calcTempGe" :main="false" />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.attributes.tempMod.ge =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.attributes.tempMod.ge"
            />
          </td>
        </tr>
        <tr class="text-md">
          <td><strong>Konstitution</strong></td>
          <td>
            <value-field
              :value="charactersheetData.character.attributes.kon"
              :main="true"
            />
          </td>
          <td><value-field :value="calcKonMod" :main="false" /></td>
          <td>
            <value-field :value="calcTempKon" :main="false" />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.attributes.tempMod.kon =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.attributes.tempMod.kon"
            />
          </td>
        </tr>
        <tr class="text-md">
          <td><strong>Intelligenz</strong></td>
          <td>
            <value-field
              :value="charactersheetData.character.attributes.int"
              :main="true"
            />
          </td>
          <td><value-field :value="calcIntMod" :main="false" /></td>
          <td>
            <value-field :value="calcTempInt" :main="false" />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.attributes.tempMod.int =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.attributes.tempMod.int"
            />
          </td>
        </tr>
        <tr class="text-md">
          <td><strong>Weisheit</strong></td>
          <td>
            <value-field
              :value="charactersheetData.character.attributes.wei"
              :main="true"
            />
          </td>
          <td><value-field :value="calcWeiMod" :main="false" /></td>
          <td>
            <value-field :value="calcTempWei" :main="false" />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.attributes.tempMod.wei =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.attributes.tempMod.wei"
            />
          </td>
        </tr>
        <tr class="text-md">
          <td><strong>Charisma</strong></td>
          <td>
            <value-field
              :value="charactersheetData.character.attributes.ch"
              :main="true"
            />
          </td>
          <td><value-field :value="calcChMod" :main="false" /></td>
          <td>
            <value-field :value="calcTempCh" :main="false" />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.attributes.tempMod.ch =
                  parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.attributes.tempMod.ch"
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
  methods: {
    ...mapActions({
      setCharacterSheetDataState: "setCharacterSheetDataState",
    }),
  },
  computed: {
    ...mapGetters({
      charactersheetData: "charactersheetData",
    }),
    calcStMod() {
      return Math.floor(
        (this.charactersheetData.character.attributes.st +
          this.charactersheetData.character.attributes.raceBonusAttributes.st -
          10) /
          2
      );
    },
    calcGeMod() {
      return Math.floor(
        (this.charactersheetData.character.attributes.ge +
          this.charactersheetData.character.attributes.raceBonusAttributes.ge -
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
    calcIntMod() {
      return Math.floor(
        (this.charactersheetData.character.attributes.int +
          this.charactersheetData.character.attributes.raceBonusAttributes.int -
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
    calcChMod() {
      return Math.floor(
        (this.charactersheetData.character.attributes.ch +
          this.charactersheetData.character.attributes.raceBonusAttributes.ch -
          10) /
          2
      );
    },
    calcTempSt() {
      if (this.charactersheetData.character.attributes.tempMod.st > 0) {
        return (
          this.charactersheetData.character.attributes.tempMod.st +
          this.charactersheetData.character.attributes.st
        );
      } else {
        return 0;
      }
    },
    calcTempGe() {
      if (this.charactersheetData.character.attributes.tempMod.ge > 0) {
        return (
          this.charactersheetData.character.attributes.tempMod.ge +
          this.charactersheetData.character.attributes.ge
        );
      } else {
        return 0;
      }
    },
    calcTempKon() {
      if (this.charactersheetData.character.attributes.tempMod.kon > 0) {
        return (
          this.charactersheetData.character.attributes.tempMod.kon +
          this.charactersheetData.character.attributes.kon
        );
      } else {
        return 0;
      }
    },
    calcTempInt() {
      if (this.charactersheetData.character.attributes.tempMod.int > 0) {
        return (
          this.charactersheetData.character.attributes.tempMod.int +
          this.charactersheetData.character.attributes.int
        );
      } else {
        return 0;
      }
    },
    calcTempWei() {
      if (this.charactersheetData.character.attributes.tempMod.wei > 0) {
        return (
          this.charactersheetData.character.attributes.tempMod.wei +
          this.charactersheetData.character.attributes.wei
        );
      } else {
        return 0;
      }
    },
    calcTempCh() {
      if (this.charactersheetData.character.attributes.tempMod.ch > 0) {
        return (
          this.charactersheetData.character.attributes.tempMod.ch +
          this.charactersheetData.character.attributes.ch
        );
      } else {
        return 0;
      }
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
