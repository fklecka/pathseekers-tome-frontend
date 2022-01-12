<template>
  <tr
    class="w-full cursor-pointer select-none flex flex-col xl:hidden"
    @click="openCard()"
  >
    <td class="w-full flex justify-between">
      {{ this.item.waffe }}
      <span class="transition" v-bind:class="{ open: !hidden }">></span>
    </td>

    <div
      class="overflow-hidden max-h-80 w-full bg-dark info"
      v-bind:class="{ active: hidden }"
    >
      <table class="w-full hidden md:block">
        <tr>
          <td class="w-2/4">Schaden (K):</td>
          <td>{{ this.item.schaden_k }}</td>
          <td class="w-2/4">Schaden (M):</td>
          <td>{{ this.item.schaden_m }}</td>
        </tr>
        <tr>
          <td class="w-2/4">Kritischer Treffer:</td>
          <td>{{ this.item.kritischer_treffer }}</td>
          <td class="w-2/4">Grundreichweite:</td>
          <td>{{ this.item.grundreichweite }}</td>
        </tr>
        <tr>
          <td class="w-2/4">Gewicht:</td>
          <td>{{ this.item.gewicht }}</td>
          <td class="w-2/4">Art:</td>
          <td>{{ this.item.art }}</td>
        </tr>
        <tr>
          <td class="w-2/4">Speziell:</td>
          <td>{{ this.item.speziell }}</td>
        </tr>
      </table>
      <table class="w-full md:hidden">
        <tr>
          <td>Schaden (K):</td>
          <td>{{ this.item.schaden_k }}</td>
        </tr>
        <tr>
          <td>Schaden (M):</td>
          <td>{{ this.item.schaden_m }}</td>
        </tr>
        <tr>
          <td>Kritischer Treffer:</td>
          <td>{{ this.item.kritischer_treffer }}</td>
        </tr>
        <tr>
          <td>Grundreichweite:</td>
          <td>{{ this.item.grundreichweite }}</td>
        </tr>
        <tr>
          <td>Gewicht:</td>
          <td>{{ this.item.gewicht }}</td>
        </tr>
        <tr>
          <td>Art:</td>
          <td>{{ this.item.art }}</td>
        </tr>
        <tr>
          <td>Speziell:</td>
          <td>{{ this.item.speziell }}</td>
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
