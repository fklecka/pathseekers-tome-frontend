<template>
  <input
    inputmode="tel"
    pattern="[0-9]*"
    class="
      w-12
      h-7
      sm:w-16 sm:h-8
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

<style scoped>
.main {
  border-width: 2px;
}

input {
  border: 3px inset #565d66;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
