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

<style scoped>
div {
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  box-shadow: 5px 10px 5px #00000020;
  border: 10px outset #35353542;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
div:hover {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #00000020;
}
div:active {
  border: 10px inset #35353542;
}
</style>
