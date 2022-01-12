<template>
  <div class="w-full bg-bg overflow-y-scroll text-font">
    <h2 class="font-headline text-4xl text-center">Wähle eine Klasse</h2>
    <p class="py-6">
      Wähle als nächstes die Klasse deines Charakters. Die Klasse stellt einen
      Beruf dar (zB. Kämpfer oder Magier) und bestimmt die Fähigkeiten deines
      Charakters. Wähle eine Klasse aus um weitere Informationen zu erhalten.
    </p>
    <div class="bg-white bg-opacity-5 py-6 my-6">
      <p class="pb-6 text-center text-xl">Wähle eine Klasse</p>
      <div class="flex gap-6 justify-evenly flex-wrap p-3">
        <class-card
          :title="'Kämpfer'"
          :url="require('../../assets/classicons/fighter.svg')"
          @click="setAndPassClass('Kämpfer')"
          v-bind:class="{ active: classAttributes.classname === 'Kämpfer' }"
          >Kämpfer</class-card
        >
        <class-card
          :title="'Schurke'"
          :url="require('../../assets/classicons/rogue.svg')"
          @click="setAndPassClass('Schurke')"
          v-bind:class="{ active: classAttributes.classname === 'Schurke' }"
          >Schurke</class-card
        >
        <class-card
          :title="'Paladin'"
          :url="require('../../assets/classicons/paladin.svg')"
          @click="setAndPassClass('Paladin')"
          v-bind:class="{ active: classAttributes.classname === 'Paladin' }"
          >Paladin</class-card
        >
        <class-card
          :title="'Mönch'"
          :url="require('../../assets/classicons/monk.svg')"
          @click="setAndPassClass('Mönch')"
          v-bind:class="{ active: classAttributes.classname === 'Mönch' }"
          >Mönch</class-card
        >
      </div>
    </div>
    <kaempfer
      id="Kämpfer"
      v-if="classAttributes.classname === 'Kämpfer'"
      @passFavoredBonus="getFavoredBonus($event)"
    />
    <schurke
      id="Schurke"
      v-if="classAttributes.classname === 'Schurke'"
      @passFavoredBonus="getFavoredBonus($event)"
    />
    <paladin
      id="Paladin"
      v-if="classAttributes.classname === 'Paladin'"
      @passFavoredBonus="getFavoredBonus($event)"
    />
    <moench
      id="Mönch"
      v-if="classAttributes.classname === 'Mönch'"
      @passFavoredBonus="getFavoredBonus($event)"
    />
  </div>
</template>

<script>
import ClassCard from "./ClassCard.vue";
import Kaempfer from "./classinfo/Kaempfer.vue";
import Paladin from "./classinfo/Paladin.vue";
import Schurke from "./classinfo/Schurke.vue";
import Moench from "./classinfo/Moench.vue";
export default {
  data: () => {
    return {
      classAttributes: {
        classname: "",
        favoredBonus: "",
        hp: 0,
        bonusHp: 0,
        bonusSkill: 0,
        skillPoints: 0,
        ref: 0,
        wil: 0,
        zah: 0,
        gab: 0,
        money: 0,
      },
    };
  },
  components: { Kaempfer, Schurke, Paladin, Moench, ClassCard },
  methods: {
    setAndPassClass(value) {
      this.classAttributes.classname = value;
      this.setClassHp(value);
      this.setSkillpoints(value);
      this.setDefense(value);
      this.setMoney(value);
      this.passClass();
    },
    getFavoredBonus(value) {
      this.classAttributes.favoredBonus = value;
      if (value === "hp") {
        this.classAttributes.bonusHp = 1;
      } else {
        this.classAttributes.bonusHp = 0;
      }
      if (value === "skill") {
        this.classAttributes.bonusSkill = 1;
      } else {
        this.classAttributes.bonusSkill = 0;
      }
      console.log(this.classAttributes.hp);
      this.passClass();
    },
    passClass() {
      this.$emit("passClass", this.classAttributes);
    },
    setClassHp(classname) {
      if ((classname === "Kämpfer") | (classname === "Paladin")) {
        this.classAttributes.hp = 10;
      } else if (
        (classname === "Schurke") |
        (classname === "Kleriker") |
        (classname === "Mönch")
      ) {
        this.classAttributes.hp = 8;
      }
    },
    setSkillpoints(classname) {
      if (
        (classname === "Hexenmeister") |
        (classname === "Kämpfer") |
        (classname === "Kleriker") |
        (classname === "Magier") |
        (classname === "Paladin")
      ) {
        this.classAttributes.skillPoints = 2;
      } else if (
        (classname === "Barbar") |
        (classname === "Druide") |
        (classname === "Mönch")
      ) {
        this.classAttributes.skillPoints = 4;
      } else if ((classname === "Barde") | (classname === "Waldläufer")) {
        this.classAttributes.skillPoints = 6;
      } else if (classname === "Schurke") {
        this.classAttributes.skillPoints = 8;
      }
    },
    setDefense(classname) {
      this.clearDefense();
      if (classname === "Kämpfer") {
        this.classAttributes.gab = 1;
        this.classAttributes.zah = 2;
      } else if (classname === "Schurke") {
        this.classAttributes.ref = 2;
      } else if (classname === "Paladin") {
        this.classAttributes.gab = 2;
        this.classAttributes.zah = 2;
      } else if (classname === "Mönch") {
        this.classAttributes.ref = 2;
        this.classAttributes.wil = 2;
        this.classAttributes.zah = 2;
      }
    },
    setMoney(classname) {
      if (classname === "Kämpfer") {
        this.classAttributes.money = 175;
      } else if (classname === "Schurke") {
        this.classAttributes.money = 140;
      } else if (classname === "Paladin") {
        this.classAttributes.money = 175;
      } else if (classname === "Mönch") {
        this.classAttributes.money = 35;
      }
    },
    clearDefense() {
      this.classAttributes.gab = 0;
      this.classAttributes.ref = 0;
      this.classAttributes.wil = 0;
      this.classAttributes.zah = 0;
    },
  },
};
</script>

<style scoped>
.active {
  background: #2c3540;
}
</style>
