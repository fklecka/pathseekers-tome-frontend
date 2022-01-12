<template>
  <tr
    class="w-full cursor-pointer select-none flex flex-col xl:hidden"
    @click="openCard()"
  >
    <td class="w-full flex justify-between">
      {{ this.item.rüstung }}
      <span class="transition" v-bind:class="{ open: !hidden }">></span>
    </td>

    <div
      class="overflow-hidden max-h-80 w-full bg-dark info"
      v-bind:class="{ active: hidden }"
    >
      <table class="w-full hidden md:block">
        <tr>
          <td class="w-2/4">Preis:</td>
          <td>{{ this.item.preis }}</td>
          <td class="w-2/4">Rüstungsbonus:</td>
          <td>{{ this.item.rüstungsbonus }}</td>
        </tr>
        <tr>
          <td class="w-2/4">GE-Bonus:</td>
          <td>{{ this.item.ge_bonus }}</td>
          <td class="w-2/4">Rüstungsmalus:</td>
          <td>{{ this.item.rüstungsmalus }}</td>
        </tr>
        <tr>
          <td class="w-2/4">Zauberpatzer:</td>
          <td>{{ this.item.zauberpatzer }}</td>
          <td class="w-2/4">Bewegungsrate 9m:</td>
          <td>{{ this.item.bewegungsrate9 }}</td>
        </tr>
        <tr>
          <td class="w-2/4">Bewegungsrate 6m:</td>
          <td>{{ this.item.bewegungsrate6 }}</td>
          <td class="w-2/4">Gewicht:</td>
          <td>{{ this.item.Gewicht }}</td>
        </tr>
      </table>
      <table class="w-full md:hidden">
        <tr>
          <td>Preis:</td>
          <td>{{ this.item.preis }}</td>
        </tr>
        <tr>
          <td>Rüstungsbonus:</td>
          <td>{{ this.item.rüstungsbonus }}</td>
        </tr>
        <tr>
          <td>GE-Bonus:</td>
          <td>{{ this.item.ge_bonus }}</td>
        </tr>
        <tr>
          <td>Rüstungsmalus:</td>
          <td>{{ this.item.rüstungsmalus }}</td>
        </tr>
        <tr>
          <td>Zauberpatzer:</td>
          <td>{{ this.item.zauberpatzer }}</td>
        </tr>
        <tr>
          <td>Bewegungsrate 9m:</td>
          <td>{{ this.item.bewegungsrate9 }}</td>
        </tr>
        <tr>
          <td>Bewegungsrate 6m:</td>
          <td>{{ this.item.bewegungsrate6 }}</td>
        </tr>
        <tr>
          <td>Gewicht:</td>
          <td>{{ this.item.Gewicht }}</td>
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
