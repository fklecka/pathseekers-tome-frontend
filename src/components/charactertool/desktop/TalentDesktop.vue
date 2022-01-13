<template>
  <tr>
    <td class="hidden md:table-cell">
      <div
        class="
          px-4
          py-1
          text-2xl
          bg-card
          hover:bg-bg
          cursor-pointer
          select-none
          add
        "
        @click="passTalent()"
        v-bind:class="{ active: this.add === '-' }"
      >
        {{ this.add }}
      </div>
    </td>
    <td class="hidden md:table-cell">{{ this.item.name }}</td>
    <td class="hidden md:table-cell">{{ this.item.art }}</td>
    <td class="hidden md:table-cell">{{ this.item.beschreibung }}</td>
    <td class="hidden md:table-cell">{{ this.item.voraussetzung }}</td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    passTalent() {
      this.$emit("passTalent", this.item.name);
      if (this.add === "-") {
        this.add = "+";
      } else {
        this.add = "-";
      }
    },
  },
  data: () => {
    return {
      add: "+",
    };
  },
};
</script>

<style scoped>
td {
  padding: 10px;
}
.add {
  outline: 5px outset #00000033;
}
.active {
  border: none;
  box-sizing: content-box;
  background: #2c3540;
  outline: 5px inset #00000033;
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #00000020;
}
</style>
