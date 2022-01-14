<template>
  <tr class="text-sm">
    <td>
      <strong
        >{{ this.skill.name }} <span v-if="!this.skill.trained">*</span></strong
      >
    </td>
    <td><value-field :value="calcSum" :main="true" /></td>
    <td><value-field :value="returnMod()" :main="false" /></td>
    <td>
      <input-field
        @passValue="
          this.charactersheetData.character.skills[this.skill.name] =
            parseInt($event);
          setCharacterSheetDataState(this.charactersheetData);
        "
        :dataValue="returnRank"
        :main="false"
      />
    </td>
    <td>
      <input-field
        @passValue="
          this.charactersheetData.character.skillsMod[this.skill.name] =
            parseInt($event);
          setCharacterSheetDataState(this.charactersheetData);
        "
        :dataValue="returnModValue"
        :main="false"
      />
    </td>
  </tr>
</template>

<script>
import ValueField from "./ValueField.vue";
import InputField from "./InputField.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { ValueField, InputField },
  props: ["skill"],
  methods: {
    ...mapActions({
      setCharacterSheetDataState: "setCharacterSheetDataState",
    }),
    returnMod() {
      if (this.skill.attribute === "ST") {
        return this.calcStMod;
      } else if (this.skill.attribute === "GE") {
        return this.calcGeMod;
      } else if (this.skill.attribute === "KO") {
        return this.calcKonMod;
      } else if (this.skill.attribute === "IN") {
        return this.calcIntMod;
      } else if (this.skill.attribute === "WE") {
        return this.calcWeiMod;
      } else if (this.skill.attribute === "CH") {
        return this.calcChMod;
      }
    },
  },
  computed: {
    ...mapGetters({
      charactersheetData: "charactersheetData",
    }),
    calcSum() {
      if (
        this.skill.kf.includes(
          this.charactersheetData.character.classAttributes.classname
        ) &&
        this.charactersheetData.character.skills[this.skill.name] > 0
      ) {
        return 3 + this.returnRank + this.returnModValue + this.returnMod();
      } else {
        return this.returnRank + this.returnModValue + this.returnMod();
      }
    },
    returnRank() {
      if (this.charactersheetData.character.skills[this.skill.name]) {
        return this.charactersheetData.character.skills[this.skill.name];
      } else {
        return 0;
      }
    },
    returnModValue() {
      if (this.charactersheetData.character.skillsMod[this.skill.name]) {
        return this.charactersheetData.character.skillsMod[this.skill.name];
      } else {
        return 0;
      }
    },
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
  padding: 0.3rem 0.2rem;
}
td:first-child {
  min-width: 50px;
  font-size: 0.7rem;
}

@media (min-width: 640px) {
  td {
    padding: 0.3rem 0.3rem;
    padding-bottom: 0rem;
  }
  td:first-child {
    width: 150px;
    font-size: 1rem;
  }
}
</style>
