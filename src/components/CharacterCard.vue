<template>
  <div
    class="
      w-full
      sm:w-96
      h-28
      bg-card
      flex
      items-center
      p-2
      cursor-pointer
      card
    "
    @click="linkToCharactersheet()"
  >
    <div class="w-20 h-20 opacity-80">
      <img
        v-if="this.character.character.classAttributes.classname === 'Barbar'"
        src="../assets/classicons/barbarian.svg"
        class="w-full"
      />
      <img
        v-if="this.character.character.classAttributes.classname === 'Barde'"
        src="../assets/classicons/bard.svg"
        class="w-full"
      />
      <img
        v-if="this.character.character.classAttributes.classname === 'Druide'"
        src="../assets/classicons/druid.svg"
        class="w-full"
      />
      <img
        v-if="
          this.character.character.classAttributes.classname === 'Hexenmeister'
        "
        src="../assets/classicons/warlock.svg"
        class="w-full"
      />
      <img
        v-if="this.character.character.classAttributes.classname === 'Kämpfer'"
        src="../assets/classicons/fighter.svg"
        class="w-full"
      />
      <img
        v-if="this.character.character.classAttributes.classname === 'Kleriker'"
        src="../assets/classicons/cleric.svg"
        class="w-full"
      />
      <img
        v-if="this.character.character.classAttributes.classname === 'Zauberer'"
        src="../assets/classicons/wizard.svg"
        class="w-full"
      />
      <img
        v-if="this.character.character.classAttributes.classname === 'Mönch'"
        src="../assets/classicons/monk.svg"
        class="w-full"
      />
      <img
        v-if="this.character.character.classAttributes.classname === 'Paladin'"
        src="../assets/classicons/paladin.svg"
        class="w-full"
      />
      <img
        v-if="this.character.character.classAttributes.classname === 'Schurke'"
        src="../assets/classicons/rogue.svg"
        class="w-full"
      />
      <img
        v-if="
          this.character.character.classAttributes.classname === 'Waldläufer'
        "
        src="../assets/classicons/ranger.svg"
        class="w-full"
      />
    </div>
    <div class="pl-3 text-font">
      <p class="text-xl font-semibol pb-2">
        {{ this.character.character.name }}
      </p>
      <div class="flex opacity-60">
        <p class="border-r border-orange pr-3">Level 1</p>
        <p class="border-r border-orange px-3">
          {{ this.character.character.classAttributes.classname }}
        </p>
        <p class="pl-3">{{ this.character.character.race }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => {
    return {
      icon: "",
    };
  },
  props: ["character"],
  name: "CharacterCard",
  methods: {
    ...mapActions(["setCharacterSheetDataState"]),
    linkToCharactersheet() {
      this.setCharacterSheetDataState(this.character);
      this.$router.push({ name: "Charakterbogen" });
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  box-shadow: 5px 10px 5px #00000020;
}
.card:hover {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #00000020;
}
</style>
