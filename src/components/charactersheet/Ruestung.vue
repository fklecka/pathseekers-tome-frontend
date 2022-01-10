<template>
  <tr class="flex flex-col cursor-pointer select-none">
    <div
      class="flex justify-between w-full items-center p-2 hover:bg-highlight"
      v-bind:class="{ active: !hidden }"
      @click="openCard"
    >
      <table>
        <tr>
          <td>{{ this.item.rüstung }}</td>
        </tr>
      </table>
    </div>
    <div class="flex overflow-hidden p-2 justify-between bg-bg" v-if="!hidden">
      <table class="border-opacity-10 border-font border-t w-full">
        <tr>
          <td>Rüstungsbonus:</td>
          <td>{{ this.item.rüstungsbonus }}</td>
          <td>GE-Bonus:</td>
          <td>{{ this.item.ge_bonus }}</td>
        </tr>
        <tr>
          <td>Rüstungsmalus</td>
          <td>{{ this.item.rüstungsmalus }}</td>
          <td>Zauberpatzer:</td>
          <td>{{ this.item.zauberpatzer }}</td>
        </tr>
        <tr>
          <td>Bewegungsrate 6m:</td>
          <td>{{ this.item.bewegungsrate_6 }}</td>
          <td>Bewegungsrate 9m:</td>
          <td>{{ this.item.bewegungsrate_9 }}</td>
        </tr>
        <tr>
          <td>Gewicht:</td>
          <td>{{ this.item.gewicht }}</td>
          <td>Wert:</td>
          <td>{{ this.item.preis }}</td>
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

<style></style>
