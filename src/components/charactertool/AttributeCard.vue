<template>
  <div
    class="flex justify-center items-center w-48 h-20 bg-card cursor-pointer"
  >
    <h3 class="text-xl">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
div {
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  box-shadow: 5px 10px 5px #00000020;
  border: 5px outset #00000033;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
div:hover {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #00000020;
}
div:active {
  border: 5px inset #00000033;
}
</style>
