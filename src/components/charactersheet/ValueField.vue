<template>
  <div
    class="border rounded-md w-16 h-8 flex justify-center items-center"
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

<style>
.main {
  border-color: rgba(256, 256, 256, 0.87);
  border-width: 2px;
}
.mod {
  border-color: rgba(256, 256, 256, 0.45);
}
</style>
