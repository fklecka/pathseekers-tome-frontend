<template>
  <div class="bg-white bg-opacity-5 py-6 px-3 md:px-24 my-6">
    <p class="pb-6 text-center text-xl">
      Wähle einen Bonus für deine Bevorzugte Klasse
    </p>
    <div
      class="
        flex flex-col
        md:flex-row
        justify-evenly
        space-y-0
        items-center
        space-y-3
        md:space-y-0
      "
    >
      <class-card
        :url="require('../../assets/icons/heart-shield.svg')"
        :title="'Trefferpunkt'"
        class="text-center"
        @click="setAndPassBonus('hp')"
        v-bind:class="{ active: bonus === 'hp' }"
      />
      <class-card
        :url="require('../../assets/icons/scroll-unfurled.svg')"
        :title="'Fertigkeitspunkt'"
        class="text-center"
        @click="setAndPassBonus('skill')"
        v-bind:class="{ active: bonus === 'skill' }"
      />
    </div>
  </div>
</template>

<script>
import ClassCard from "./ClassCard.vue";
import { mapGetters } from "vuex";
export default {
  components: { ClassCard },
  data: () => {
    return {
      bonus: "",
    };
  },
  methods: {
    setAndPassBonus(value) {
      this.bonus = value;
      this.$emit("setAndPassBonus", this.bonus);
    },
  },
  computed: {
    ...mapGetters({
      charactertoolData: "charactertoolData",
    }),
  },
  created() {
    if (this.charactertoolData.classAttributes.favoredBonus) {
      this.bonus = this.charactertoolData.classAttributes.favoredBonus;
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
