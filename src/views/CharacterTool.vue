<template>
  <div class="w-full h-app bg-bg pb-36 overflow-y-scroll">
    <new-character-modal
      v-if="newCharacterModal"
      @confirm="
        this.loadCharacter();
        this.newCharacterModal = false;
      "
      @close="
        this.newCharacter();
        this.newCharacterModal = false;
      "
    />
    <div>
      <steps-progress-bar
        :options="progressOptions"
        ref="progress"
        class="mb-12"
      />
    </div>
    <div class="flex justify-center">
      <info-box
        :character="character"
        class="sticky top-0"
        v-if="this.step !== 8"
      />
      <div class="w-758 px-6">
        <intro v-if="this.step === 0" />
        <name
          v-if="this.step === 1"
          @passName="getName($event)"
          @setAndPassGender="getGender($event)"
        />
        <attributes
          v-if="this.step === 2"
          @passAttributes="getAttributes($event)"
        />
        <race v-if="this.step === 3" @passRace="getRace($event)" />
        <class v-if="this.step === 4" @passClass="getClass($event)" />
        <skills
          v-if="this.step === 5"
          :class="this.character.classAttributes.classname"
          :character="this.character"
          @passSkills="getSkills($event)"
        />
        <talents v-if="this.step === 6" @passTalents="getTalents($event)" />
        <equipment
          v-if="this.step === 7"
          @passItems="getItems($event)"
          :money="this.character.money"
        />
        <sum v-if="this.step === 8" :character="this.character" />
        <div class="relative pt-6">
          <custom-button
            v-if="step > 0"
            class="bg-card border border-card hover:bg-bg absolute left-0"
            @click="stepDown()"
            >Zurück</custom-button
          >
          <custom-button
            v-if="step < 8"
            class="bg-card border border-card hover:bg-bg absolute right-0"
            @click="stepUp()"
            >Weiter</custom-button
          >
          <custom-button
            v-if="step === 8"
            class="bg-card border border-card hover:bg-bg absolute right-0"
            @click="saveCharacter()"
            >Charakter Speichern</custom-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
import InfoBox from "../components/charactertool/InfoBox.vue";
import Intro from "../components/charactertool/Intro.vue";
import Name from "../components/charactertool/Name.vue";
import Attributes from "../components/charactertool/Attributes.vue";
import Race from "../components/charactertool/Race.vue";
import Class from "../components/charactertool/Class.vue";
import Skills from "../components/charactertool/Skills.vue";
import Talents from "../components/charactertool/Talents.vue";
import Equipment from "../components/charactertool/Equipment.vue";
import Sum from "../components/charactertool/Summary.vue";
import { mapGetters, mapActions } from "vuex";
import { useToast } from "vue-toastification";
import StepsProgressBar from "vue-steps-progress-bar";
import "../css/progressbar.css";
import NewCharacterModal from "../components/charactertool/NewCharacterModal.vue";
import CharacterService from "../../services/CharacterService";
import AuthService from "../../services/AuthService";
export default {
  data: () => {
    return {
      step: 0,
      newCharacterModal: false,
      progressOptions: {
        maxWidth: "75%",
        nodeWidth: 40,
        nodeHeight: 40,
        barHeight: 3,
        showTooltip: false,
        showContent: false,
        barType: "solid",
        nodes: [
          {
            content: "Intro",
          },
          {
            content: "Namen",
          },
          {
            content: "Attribute",
          },
          {
            content: "Volk",
          },
          {
            content: "Klasse",
          },
          {
            content: "Fertigkeiten",
          },
          {
            content: "Talente",
          },
          {
            content: "Ausrüstung",
          },
          {
            content: "Zusammenfassung",
          },
        ],
      },
      character: {
        name: "",
        gender: "",
        race: "",
        sizeMod: 0,
        speed: 0,
        money: 0,
        hpCurrent: 0,
        initaitive: {
          current: 0,
          temp: 0,
        },
        level: {
          level: 1,
          exp: 0,
          next: 0,
        },
        attributes: {
          st: 10,
          ge: 10,
          kon: 10,
          int: 10,
          wei: 10,
          ch: 10,
          raceBonusAttributes: {
            st: 0,
            ge: 0,
            kon: 0,
            int: 0,
            wei: 0,
            ch: 0,
          },
          tempMod: {
            st: 0,
            ge: 0,
            kon: 0,
            int: 0,
            wei: 0,
            ch: 0,
          },
        },
        speedRates: {
          speed: 0,
          speedMod: 0,
          flying: 0,
          swimming: 0,
          climbing: 0,
          digging: 0,
        },
        evadingMod: {
          ref: {
            magic: 0,
            sons: 0,
            temp: 0,
          },
          wil: {
            magic: 0,
            sons: 0,
            temp: 0,
          },
          zah: {
            magic: 0,
            sons: 0,
            temp: 0,
          },
        },
        rkMod: {
          armor: 0,
          shield: 0,
          natural: 0,
          evade: 0,
          sons: 0,
          mod: 0,
        },
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
          zr: 0,
        },
        skills: {},
        skillsMod: {
          test: 0,
        },
        talents: [],
        language: [],
        items: {},
      },
    };
  },
  components: {
    CustomButton,
    InfoBox,
    Intro,
    Name,
    Attributes,
    Race,
    Class,
    Skills,
    Talents,
    Equipment,
    Sum,
    StepsProgressBar,
    NewCharacterModal,
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      charactertoolData: "charactertoolData",
    }),
  },
  methods: {
    stepUp() {
      this.step += 1;
      this.$refs.progress.next();
      this.$el.scrollTop = 0;
    },
    stepDown() {
      this.step -= 1;
      this.$refs.progress.prev();
      this.$el.scrollTop = 0;
    },
    getName(name) {
      this.character.name = name;
    },
    getGender(gender) {
      this.character.gender = gender;
    },
    getRace(race) {
      this.character.race = race.name;
      this.character.attributes.raceBonusAttributes = race.bonusAttributes;
      this.character.sizeMod = race.sizeMod;
      this.character.speed = race.speed;
    },
    getAttributes(attributes) {
      this.character.attributes.st = attributes.st;
      this.character.attributes.ge = attributes.ge;
      this.character.attributes.kon = attributes.kon;
      this.character.attributes.int = attributes.int;
      this.character.attributes.wei = attributes.wei;
      this.character.attributes.ch = attributes.ch;
    },
    getClass(classInfo) {
      this.character.classAttributes.classname = classInfo.classname;
      this.character.classAttributes.favoredBonus = classInfo.favoredBonus;
      this.character.classAttributes.hp = classInfo.hp;
      this.character.classAttributes.bonusHp = classInfo.bonusHp;
      this.character.classAttributes.bonusSkill = classInfo.bonusSkill;
      this.character.classAttributes.skillPoints = classInfo.skillPoints;
      this.character.classAttributes.ref = classInfo.ref;
      this.character.classAttributes.wil = classInfo.wil;
      this.character.classAttributes.zah = classInfo.zah;
      this.character.classAttributes.gab = classInfo.gab;
      this.character.money = classInfo.money;
    },
    getSkills(skills) {
      this.character.skills = skills;
      console.log(this.character.skills);
    },
    getTalents(talents) {
      this.character.talents = talents;
    },
    getItems(items) {
      this.character.items = items;
    },
    async saveCharacter() {
      const toast = useToast();
      this.$store.state.isLoading = true;
      const config = {
        headers: {
          headers: {
            Authorization: AuthService.getFullToken(),
          },
        },
      };
      const character = {
        character: this.character,
      };
      try {
        const response = await CharacterService.saveCharacter(
          this.$config.apiUrl,
          character,
          config
        );
        if (response.success) {
          this.$router.replace({ name: "CharacterOverview" });
          toast.success(response.success);
        } else if (response.error) {
          toast.error(response.error);
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.$store.state.isLoading = false;
      }
    },
    ...mapActions({
      setCharactertoolData: "setCharactertoolData",
      clearCharactertoolData: "clearCharactertoolData",
    }),
    newCharacter() {
      this.clearCharactertoolData();
    },
    loadCharacter() {
      this.character = this.charactertoolData;
    },
  },
  mounted() {
    if (Object.keys(this.charactertoolData).length !== 0) {
      this.newCharacterModal = true;
    }
  },
  beforeUnmount() {
    if (this.step !== 0) {
      this.setCharactertoolData(this.character);
    }
  },
};
</script>

<style></style>
