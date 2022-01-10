<template>
  <div class="bg-white bg-opacity-5 py-6 px-24 my-6">
    <p class="pb-6 text-center text-xl">
      Wähle einen Bonus für deine Bevorzugte Klasse
    </p>
    <div class="flex justify-evenly">
      <custom-button
        class="bg-card border border-card hover:bg-bg text-center"
        @click="setAndPassBonus('hp')"
        v-bind:class="{ active: bonus === 'hp' }"
        >Bonus Trefferpunkt</custom-button
      >
      <custom-button
        class="bg-card border border-card hover:bg-bg text-center"
        @click="setAndPassBonus('skill')"
        v-bind:class="{ active: bonus === 'skill' }"
        >Bonus Fertigkeitspunkt</custom-button
      >
    </div>
  </div>
</template>

<script>
import CustomButton from "../CustomButton.vue";
export default {
  components: { CustomButton },
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
};
</script>

<style scoped>
.active {
  background: #2c3540;
}
</style>
