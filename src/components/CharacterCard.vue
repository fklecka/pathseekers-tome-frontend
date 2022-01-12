<template>
  <div
    class="
      w-full
      sm:w-96
      h-28
      bg-card
      flex
      items-center
      p-5
      cursor-pointer
      shadow-card
    "
    @click="linkToCharactersheet()"
  >
    <div class="w-20 h-20 bg-bg rounded-md border border-orange"></div>
    <div class="pl-5 text-font">
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

<style></style>
