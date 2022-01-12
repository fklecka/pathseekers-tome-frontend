<template>
  <div class="py-2 px-3 md:py-2 md:px-6 rounded-md text-white inline-block">
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
}
</style>
