<template>
  <div class="flex ruestungsklasse2 m-1 sm:m-3 px-1 sm:px-3">
    <div class="text-white w-full">
      <h2 class="text-xl text-center">Rüstungsklasse 2</h2>
      <hr class="opacity-20 mb-3" />
      <table class="hidden xl:block">
        <tr class="text-xs">
          <th></th>
          <th>Gesamt</th>
          <th>Grundwert</th>
          <th>Rüstung</th>
          <th>Schild</th>
          <th>GE</th>
          <th>Größen Mod.</th>
          <th>Natürl. RK</th>
          <th>Ablenkungsb.</th>
          <th>Sonstige</th>
          <th>Modifikator</th>
        </tr>
        <tr class="text-md">
          <td><strong>RK</strong></td>
          <td>
            <value-field
              :value="
                10 +
                charactersheetData.character.rkMod.armor +
                charactersheetData.character.rkMod.shield +
                calcGeMod +
                charactersheetData.character.sizeMod +
                charactersheetData.character.rkMod.natural +
                charactersheetData.character.rkMod.evade +
                charactersheetData.character.rkMod.sons +
                charactersheetData.character.rkMod.mod
              "
              :main="true"
            />
          </td>
          <td><value-field :value="10" :main="false" /></td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.rkMod.armor = parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.rkMod.armor"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.rkMod.shield = parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.rkMod.shield"
            />
          </td>
          <td><value-field :value="calcGeMod" :main="false" /></td>
          <td>
            <value-field
              :value="charactersheetData.character.sizeMod"
              :main="false"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.rkMod.natural = parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.rkMod.natural"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.rkMod.evade = parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.rkMod.evade"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.rkMod.sons = parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.rkMod.sons"
            />
          </td>
          <td>
            <input-field
              @passValue="
                charactersheetData.character.rkMod.mod = parseInt($event);
                setCharacterSheetDataState(this.charactersheetData);
              "
              :main="false"
              :dataValue="charactersheetData.character.rkMod.mod"
            />
          </td>
        </tr>
      </table>
      <div class="xl:hidden">
        <table class="mx-1">
          <tr class="text-sheetHeader">
            <th></th>
            <th>Gesamt</th>
            <th>Grundwert</th>
            <th>Rüstung</th>
            <th>Schild</th>
            <th>GE</th>
          </tr>
          <tr class="text-md">
            <td><strong>RK</strong></td>
            <td>
              <value-field
                :value="
                  10 +
                  charactersheetData.character.rkMod.armor +
                  charactersheetData.character.rkMod.shield +
                  calcGeMod +
                  charactersheetData.character.sizeMod +
                  charactersheetData.character.rkMod.natural +
                  charactersheetData.character.rkMod.evade +
                  charactersheetData.character.rkMod.sons +
                  charactersheetData.character.rkMod.mod
                "
                :main="true"
              />
            </td>
            <td><value-field :value="10" :main="false" /></td>
            <td>
              <input-field
                @passValue="
                  charactersheetData.character.rkMod.armor = parseInt($event);
                  setCharacterSheetDataState(this.charactersheetData);
                "
                :main="false"
                :dataValue="charactersheetData.character.rkMod.armor"
              />
            </td>
            <td>
              <input-field
                @passValue="
                  charactersheetData.character.rkMod.shield = parseInt($event);
                  setCharacterSheetDataState(this.charactersheetData);
                "
                :main="false"
                :dataValue="charactersheetData.character.rkMod.shield"
              />
            </td>
            <td><value-field :value="calcGeMod" :main="false" /></td>
          </tr>
        </table>
        <table class="mx-1">
          <tr class="text-sheetHeader">
            <th></th>
            <th>Größen Mod.</th>
            <th>Natürl. RK</th>
            <th>Ablenkungsb.</th>
            <th>Sonstige</th>
            <th>Modifikator</th>
          </tr>
          <tr>
            <td></td>
            <td>
              <value-field
                :value="charactersheetData.character.sizeMod"
                :main="false"
              />
            </td>
            <td>
              <input-field
                @passValue="
                  charactersheetData.character.rkMod.natural = parseInt($event);
                  setCharacterSheetDataState(this.charactersheetData);
                "
                :main="false"
                :dataValue="charactersheetData.character.rkMod.natural"
              />
            </td>
            <td>
              <input-field
                @passValue="
                  charactersheetData.character.rkMod.evade = parseInt($event);
                  setCharacterSheetDataState(this.charactersheetData);
                "
                :main="false"
                :dataValue="charactersheetData.character.rkMod.evade"
              />
            </td>
            <td>
              <input-field
                @passValue="
                  charactersheetData.character.rkMod.sons = parseInt($event);
                  setCharacterSheetDataState(this.charactersheetData);
                "
                :main="false"
                :dataValue="charactersheetData.character.rkMod.sons"
              />
            </td>
            <td>
              <input-field
                @passValue="
                  charactersheetData.character.rkMod.mod = parseInt($event);
                  setCharacterSheetDataState(this.charactersheetData);
                "
                :main="false"
                :dataValue="charactersheetData.character.rkMod.mod"
              />
            </td>
          </tr>
        </table>
      </div>
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
  min-width: 50px;
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
.ruestungsklasse2 {
  border: 3px inset #565d66;
  background-color: #232a33;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
