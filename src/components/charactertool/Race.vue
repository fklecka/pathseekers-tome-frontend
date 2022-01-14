<template>
  <div class="w-full bg-bg overflow-y-scroll text-font">
    <h2 class="font-headline text-4xl text-center">Wähle das Volk</h2>
    <p class="py-6">
      Bestimme nun das Volk deines Charakter. Beachte dass die Wahl des Volkes
      einen entscheidenden Einfluss auf die Fähigkeiten deines Charakters hat.
      Wähle ein Volk aus um Informationen über deren Volksmerkmale zu erhalten.
      Genauere Informationen erhältst du im Kompendium.
    </p>
    <div class="bg-white bg-opacity-5 py-6 md:px-24 my-6 inputhighlight">
      <p class="pb-6 text-center text-xl">Wähle ein Volk</p>
      <div class="flex flex-wrap space gap-6 px-3 justify-center">
        <custom-button
          class="
            bg-card
            border border-card
            hover:bg-bg
            w-full
            md:w-36
            text-center
          "
          @click="setAndPassRace('Mensch')"
          v-bind:class="{ active: race.name === 'Mensch' }"
          >Mensch</custom-button
        >
        <custom-button
          class="
            bg-card
            border border-card
            hover:bg-bg
            w-full
            md:w-36
            text-center
          "
          @click="setAndPassRace('Elf')"
          v-bind:class="{ active: race.name === 'Elf' }"
          >Elf</custom-button
        >
        <custom-button
          class="
            bg-card
            border border-card
            hover:bg-bg
            w-full
            md:w-36
            text-center
          "
          @click="setAndPassRace('Halb-Elf')"
          v-bind:class="{ active: race.name === 'Halb-Elf' }"
          >Halb-Elf</custom-button
        >
        <custom-button
          class="
            bg-card
            border border-card
            hover:bg-bg
            w-full
            md:w-36
            text-center
          "
          @click="setAndPassRace('Zwerg')"
          v-bind:class="{ active: race.name === 'Zwerg' }"
          >Zwerg</custom-button
        >
        <custom-button
          class="
            bg-card
            border border-card
            hover:bg-bg
            w-full
            md:w-36
            text-center
          "
          @click="setAndPassRace('Gnom')"
          v-bind:class="{ active: race.name === 'Gnom' }"
          >Gnom</custom-button
        >
        <custom-button
          class="
            bg-card
            border border-card
            hover:bg-bg
            w-full
            md:w-36
            text-center
          "
          @click="setAndPassRace('Halb-Ork')"
          v-bind:class="{ active: race.name === 'Halb-Ork' }"
          >Halb-Ork</custom-button
        >
        <custom-button
          class="
            bg-card
            border border-card
            hover:bg-bg
            w-full
            md:w-36
            text-center
          "
          @click="setAndPassRace('Halbling')"
          v-bind:class="{ active: race.name === 'Halbling' }"
          >Halbling</custom-button
        >
      </div>
    </div>
    <div>
      <mensch
        v-if="race.name === 'Mensch'"
        @passBonusAttributes="getBonusAttributes($event)"
      />
      <elf v-if="race.name === 'Elf'" />
      <halb-elf
        v-if="race.name === 'Halb-Elf'"
        @passBonusAttributes="getBonusAttributes($event)"
      />
      <zwerg v-if="race.name === 'Zwerg'" />
      <halbling v-if="race.name === 'Halbling'" />
      <gnom v-if="race.name === 'Gnom'" />
      <halb-ork
        v-if="race.name === 'Halb-Ork'"
        @passBonusAttributes="getBonusAttributes($event)"
      />
    </div>
  </div>
</template>

<script>
import CustomButton from "../CustomButton.vue";
import { mapGetters } from "vuex";

import Mensch from "./raceinfo/Mensch.vue";
import Elf from "./raceinfo/Elf.vue";
import HalbElf from "./raceinfo/HalbElf.vue";
import Zwerg from "./raceinfo/Zwerg.vue";
import Halbling from "./raceinfo/Halbling.vue";
import Gnom from "./raceinfo/Gnom.vue";
import HalbOrk from "./raceinfo/HalbOrk.vue";

export default {
  data: () => {
    return {
      race: {
        name: "",
        sizeMod: 0,
        speed: 0,
        bonusAttributes: {
          st: 0,
          ge: 0,
          kon: 0,
          int: 0,
          wei: 0,
          ch: 0,
        },
      },
    };
  },
  components: {
    CustomButton,
    Mensch,
    Elf,
    HalbElf,
    Zwerg,
    Halbling,
    Gnom,
    HalbOrk,
  },
  methods: {
    setAndPassRace(value) {
      console.log(value);
      this.clearAttributes();
      if (this.race.name === value) {
        this.race.name = "";
      } else {
        this.race.name = value;
      }
      if (this.race.name === "Elf") {
        this.race.bonusAttributes.ge = 2;
        this.race.bonusAttributes.int = 2;
        this.race.bonusAttributes.kon = -2;
      } else if (this.race.name === "Zwerg") {
        this.race.bonusAttributes.kon = 2;
        this.race.bonusAttributes.wei = 2;
        this.race.bonusAttributes.ch = -2;
      } else if (this.race.name === "Gnom") {
        this.race.bonusAttributes.kon = 2;
        this.race.bonusAttributes.ch = 2;
        this.race.bonusAttributes.st = -2;
      } else if (this.race.name === "Halbling") {
        this.race.bonusAttributes.ge = 2;
        this.race.bonusAttributes.ch = 2;
        this.race.bonusAttributes.st = -2;
      }
      if ((this.race.name === "Halbling") | (this.race.name === "Gnom")) {
        this.race.sizeMod = 1;
      }
      if (
        (this.race.name === "Halbling") |
        (this.race.name === "Gnom") |
        (this.race.name === "Zwerg")
      ) {
        this.race.speed = 6;
      } else {
        this.race.speed = 9;
      }
      this.passRace();
    },
    getBonusAttributes(attributes) {
      this.clearAttributes();
      this.race.bonusAttributes = attributes;
      this.passRace();
    },
    clearAttributes() {
      this.race.bonusAttributes = {
        attribute: "",
        st: 0,
        ge: 0,
        kon: 0,
        int: 0,
        wei: 0,
        ch: 0,
      };
    },
    passRace() {
      this.$emit("passRace", this.race);
    },
  },
  computed: {
    ...mapGetters({
      charactertoolData: "charactertoolData",
    }),
  },
  mounted() {
    if (this.charactertoolData.race) {
      if (
        this.charactertoolData.race === "Mensch" ||
        this.charactertoolData.race === "Halb-Elf" ||
        this.charactertoolData.race === "Halb-Ork"
      ) {
        this.race.name = this.charactertoolData.race;
        if (this.charactertoolData.attributes.raceBonusAttributes) {
          this.race.bonusAttributes =
            this.charactertoolData.attributes.raceBonusAttributes;
        }
      } else {
        this.setAndPassRace(this.charactertoolData.race);
      }
    }
  },
};
</script>

<style scoped>
.active {
  background: #2c3540;
  border: 5px inset #00000033;
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #00000020;
}
</style>
