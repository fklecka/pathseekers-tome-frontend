<template>
  <tr
    class="w-full cursor-pointer select-none flex flex-col xl:hidden"
    @click="openCard()"
  >
    <td class="w-full flex justify-between">
      {{ this.item.name }}
      <span class="transition" v-bind:class="{ open: !hidden }">></span>
    </td>

    <div
      class="overflow-hidden max-h-80 w-full bg-dark info"
      v-bind:class="{ active: hidden }"
    >
      <table class="w-full hidden md:block">
        <tr>
          <td class="w-2/4">Grad:</td>
          <td>{{ this.item.grad }}</td>
          <td class="w-2/4">Schule:</td>
          <td>{{ this.item.schule }}</td>
        </tr>
        <tr>
          <td class="w-2/4">Unterschule:</td>
          <td>{{ this.item.unterschule }}</td>
          <td class="w-2/4">Kategorie:</td>
          <td>{{ this.item.kategorie }}</td>
        </tr>
        <tr>
          <td class="w-2/4">Beschreibung:</td>
          <td>{{ this.item.beschreibung }}</td>
        </tr>
      </table>
      <table class="w-full md:hidden">
        <tr>
          <td>Grad:</td>
          <td>{{ this.item.grad }}</td>
        </tr>
        <tr>
          <td>Schule:</td>
          <td>{{ this.item.schule }}</td>
        </tr>
        <tr>
          <td>Unterschule:</td>
          <td>{{ this.item.unterschule }}</td>
        </tr>
        <tr>
          <td>Kategorie:</td>
          <td>{{ this.item.kategorie }}</td>
        </tr>
        <tr>
          <td>Beschreibung:</td>
          <td>{{ this.item.beschreibung }}</td>
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
