<template>
  <div class="p-3 bg-card opacity-80 text-white w-full shadow-card">
    <h3 class="text-3xl font-semibold">{{ title }}</h3>
    <p class="text-base my-3">{{ text }}</p>
    <div class="flex justify-between">
      <p class="text-2xl font-semibold flex-shrink">{{ price }}</p>
      <custom-button
        v-if="button === true"
        class="bg-cardlight"
        @click="confirm"
        >Abonnement wechseln</custom-button
      >
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  props: {
    title: String,
    text: String,
    price: String,
    button: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
  },
};
</script>

<style></style>
