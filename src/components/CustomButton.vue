<template>
  <div class="py-1 px-3 md:px-6 text-white inline-block">
    <slot />
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div {
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  box-shadow: 5px 10px 5px #00000020;
  border: 5px outset #ffffff1a;
  background-image: url("../assets/asfalt-dark.png");
  background-repeat: repeat;
}
div:hover {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #00000020;
}
div:active {
  border: 5px inset #ffffff1a;
}
</style>
