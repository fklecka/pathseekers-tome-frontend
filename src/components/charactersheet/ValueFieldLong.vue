<template>
  <div
    class="
      border
      w-28
      h-7
      sm:w-40 sm:h-8
      flex
      justify-center
      items-center
      bg-bg
      text-center
    "
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
