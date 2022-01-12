<template>
  <tr class="w-full cursor-pointer select-none" @click="openCard()">
    <td class="w-full flex justify-between items-center">
      <div class="flex items-center">
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
            w-12
            h-12
            mr-3
            flex
            justify-center
            items-center
          "
          @click="passTalent()"
        >
          {{ this.add }}
        </div>
        {{ this.item.name }}
      </div>

      <span class="transition" v-bind:class="{ open: !hidden }">></span>
    </td>

    <div
      class="overflow-hidden max-h-64 w-full bg-dark info"
      v-bind:class="{ active: hidden }"
    >
      <table class="border-opacity-10 border-font w-full">
        <tr class="w-full">
          <td>Typ:</td>
          <td>{{ this.item.typ }}</td>
        </tr>
        <tr>
          <td>Beschreibung:</td>
          <td>{{ this.item.beschreibung }}</td>
        </tr>
        <tr>
          <td>Voraussetzung:</td>
          <td>{{ this.item.voraussetzung }}</td>
        </tr>
      </table>
    </div>
  </tr>
</template>

<script>
export default {
  props: ["item"],
  data: () => {
    return {
      hidden: true,
      add: "+",
    };
  },
  methods: {
    openCard() {
      this.hidden = !this.hidden;
    },
    passTalent() {
      this.$emit("passTalent", this.item.name);
      if (this.add === "-") {
        this.add = "+";
      } else {
        this.add = "-";
      }
    },
  },
};
</script>

<style scoped>
td:first-child {
  padding-right: 1rem;
}
td {
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  text-align: left;
  vertical-align: top;
}
.info {
  transition: all 0.2s;
}
.active {
  max-height: 0;
  background-color: #2c3540;
}
.open {
  transform: rotate(90deg);
}
tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.01);
}
</style>
