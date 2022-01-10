<template>
  <tr class="flex flex-col cursor-pointer select-none">
    <div
      class="flex justify-between w-full items-center p-2 hover:bg-highlight"
      v-bind:class="{ active: !hidden }"
    >
      <table>
        <tr>
          <td @click="openCard()">{{ this.item.rüstung }}</td>
          <td>{{ this.item.preis }}</td>
        </tr>
      </table>

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
        @click="passItem()"
      >
        +
      </div>
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
    passItem() {
      this.$emit("passItem", this.item);
    },
  },
};
</script>

<style scoped>
td:first-child {
  width: 12rem;
}
td:nth-child(2) {
  padding-right: 10rem;
}
td:nth-child(3) {
  width: 12rem;
}
td {
  padding: 0.5rem 0rem;
  text-align: left;
}
.active {
  background-color: #2c3540;
}
</style>
