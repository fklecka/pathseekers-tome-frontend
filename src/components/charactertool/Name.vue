<template>
  <div class="w-full bg-bg overflow-y-scroll text-font">
    <h2 class="font-headline text-4xl text-center">
      Beschreibe deinen Charakter
    </h2>
    <p class="py-6">
      Wir beginnen damit dem Charakter einen Namen zu geben und sein Geschlecht
      zu bestimmen.
    </p>
    <div class="bg-white bg-opacity-5 py-6 px-24 my-6">
      <div class="pb-12">
        <p class="pb-6 text-center text-xl">
          Wie lautet der Name deines Charakters?
        </p>
        <input
          type="text"
          class="
            w-full
            h-10
            px-5
            text-xl
            border
            email
            bg-bg
            rounded-2xl
            text-center
          "
          name="name"
          id="name"
          @input="passName"
          v-model="name"
        />
      </div>
      <div>
        <p class="pb-6 text-center text-xl">
          Welchem Geschlecht gehört dein Charakter an?
        </p>
        <div class="flex justify-between">
          <custom-button
            class="bg-card border border-card hover:bg-bg"
            @click="setAndPassGender('Männlich')"
            v-bind:class="{ active: gender === 'Männlich' }"
            >Männlich</custom-button
          >
          <custom-button
            class="bg-card border border-card hover:bg-bg"
            @click="setAndPassGender('Weiblich')"
            v-bind:class="{ active: gender === 'Weiblich' }"
            >Weiblich</custom-button
          >
          <custom-button
            class="bg-card border border-card hover:bg-bg"
            @click="setAndPassGender('Sonstige')"
            v-bind:class="{ active: gender === 'Sonstige' }"
            >Sonstige</custom-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../CustomButton.vue";
export default {
  components: { CustomButton },
  data: () => {
    return {
      name: "",
      gender: "",
    };
  },
  methods: {
    passName() {
      this.$emit("passName", this.name);
    },
    setAndPassGender(value) {
      this.gender = value;
      this.$emit("setAndPassGender", this.gender);
    },
  },
};
</script>

<style scoped>
.active {
  background: #2c3540;
}
</style>
