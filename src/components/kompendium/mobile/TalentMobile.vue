<template>
  <tr
    class="w-full cursor-pointer select-none flex flex-col"
    @click="openCard()"
  >
    <td class="w-full flex justify-between">
      {{ this.item.name }}
      <span class="transition" v-bind:class="{ open: !hidden }">></span>
    </td>

    <div
      class="overflow-hidden max-h-64 w-full bg-dark info"
      v-bind:class="{ active: hidden }"
    >
      <table class="border-opacity-10 border-font">
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
    };
  },
  methods: {
    openCard() {
      this.hidden = !this.hidden;
    },
  },
};
</script>

<style scoped>
td:first-child {
  padding-right: 1rem;
}
td {
  padding: 0.5rem 0.75rem;
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
</style>
