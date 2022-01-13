<template>
  <div
    class="w-12 h-7 sm:w-16 sm:h-8 flex justify-center items-center bg-bg"
    v-bind:class="{ main: main, mod: !main }"
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  props: ["value", "main"],
};
</script>

<style scoped>
div {
  border: 3px outset #565d66;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
