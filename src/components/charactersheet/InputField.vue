<template>
  <input
    type="text"
    class="
      border
      rounded-md
      w-16
      h-8
      flex
      justify-center
      items-center
      bg-bg
      text-center
    "
    v-bind:class="{ main: main, mod: !main }"
    v-model="this.value"
    @input="passValue"
    @focus="$event.target.select()"
  />
</template>

<script>
export default {
  props: ["main", "dataValue"],
  data: () => {
    return {
      value: 0,
    };
  },
  methods: {
    passValue() {
      this.$emit("passValue", this.value);
    },
  },
  mounted() {
    this.value = this.dataValue;
  },
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
