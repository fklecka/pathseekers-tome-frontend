<template>
  <div class="py-2 px-3 md:py-2 md:px-6 text-white inline-block">
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
}
div:hover {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #00000020;
}
</style>
