<template>
  <tr>
    <td class="hidden md:table-cell">
      <div
        class="
          rounded-full
          px-4
          py-1
          text-2xl
          bg-card
          border border-card
          hover:bg-bg
          cursor-pointer
          select-none
        "
        @click="passTalent()"
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
</style>
