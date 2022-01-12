<template>
  <div
    class="
      h-56
      w-80
      sm:w-56
      bg-card
      flex flex-col
      justify-center
      items-center
      hover:bg-cardlight
      cursor-pointer
      shadow-card
    "
  >
    <img :src="url" class="w-24 opacity-80" />
    <h3 class="text-3xl mt-3">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    url: String,
  },
};
</script>

<style scoped></style>
