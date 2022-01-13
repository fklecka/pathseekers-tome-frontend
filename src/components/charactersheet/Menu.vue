<template>
  <div class="p-4 bg-dark menu m-1 sm:m-3 sm:flex justify-between">
    <div class="flex items-center justify-center">
      <div class="w-20 h-20 opacity-80">
        <img
          v-if="
            charactersheetData.character.classAttributes.classname === 'Barbar'
          "
          src="../../assets/classicons/barbarian.svg"
          class="w-full"
        />
        <img
          v-if="
            charactersheetData.character.classAttributes.classname === 'Barde'
          "
          src="../../assets/classicons/bard.svg"
          class="w-full"
        />
        <img
          v-if="
            charactersheetData.character.classAttributes.classname === 'Druide'
          "
          src="../../assets/classicons/druid.svg"
          class="w-full"
        />
        <img
          v-if="
            charactersheetData.character.classAttributes.classname ===
            'Hexenmeister'
          "
          src="../../assets/classicons/warlock.svg"
          class="w-full"
        />
        <img
          v-if="
            charactersheetData.character.classAttributes.classname === 'Kämpfer'
          "
          src="../../assets/classicons/fighter.svg"
          class="w-full"
        />
        <img
          v-if="
            charactersheetData.character.classAttributes.classname ===
            'Kleriker'
          "
          src="../../assets/classicons/cleric.svg"
          class="w-full"
        />
        <img
          v-if="
            charactersheetData.character.classAttributes.classname ===
            'Zauberer'
          "
          src="../../assets/classicons/wizard.svg"
          class="w-full"
        />
        <img
          v-if="
            charactersheetData.character.classAttributes.classname === 'Mönch'
          "
          src="../../assets/classicons/monk.svg"
          class="w-full"
        />
        <img
          v-if="
            charactersheetData.character.classAttributes.classname === 'Paladin'
          "
          src="../../assets/classicons/paladin.svg"
          class="w-full"
        />
        <img
          v-if="
            charactersheetData.character.classAttributes.classname === 'Schurke'
          "
          src="../../assets/classicons/rogue.svg"
          class="w-full"
        />
        <img
          v-if="
            charactersheetData.character.classAttributes.classname ===
            'Waldläufer'
          "
          src="../../assets/classicons/ranger.svg"
          class="w-full"
        />
      </div>
      <div class="pl-3 text-font">
        <p class="text-xl font-semibol pb-2">
          {{ charactersheetData.character.name }}
        </p>
        <div class="flex opacity-60">
          <p class="border-r border-orange pr-3">Level 1</p>
          <p class="border-r border-orange px-3">
            {{ charactersheetData.character.classAttributes.classname }}
          </p>
          <p class="pl-3">
            {{ charactersheetData.character.race }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row sm:flex-col justify-center items-center pt-3 sm:pt-0"
    >
      <custom-button
        @click="this.$emit('save')"
        class="sm:mb-3 w-44 text-xs text-center"
        >Charakter speichern</custom-button
      >
      <custom-button
        @click="this.$emit('delete')"
        class="bg-orange w-44 ml-3 sm:ml-0 text-xs text-center"
        >Charakter löschen</custom-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CustomButton from "../CustomButton.vue";
export default {
  components: { CustomButton },
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
.menu {
  border: 3px outset #2c3540;
}
</style>
