<template>
  <tr class="flex flex-col cursor-pointer select-none">
    <div
      class="flex justify-between w-full items-center p-2 hover:bg-highlight"
      v-bind:class="{ active: !hidden }"
    >
      <table class="w-full">
        <tr @click="openCard()" class="w-full">
          <td>
            <span class="transition mr-3" v-bind:class="{ open: !hidden }"
              >></span
            >{{ this.item.rüstung }}
          </td>
          <td>
            <div class="flex justify-between items-center">
              {{ this.item.preis }}
              <div
                class="
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
          </td>
        </tr>
      </table>
    </div>
    <div
      class="flex overflow-hidden p-2 justify-between bg-dark"
      v-if="!hidden"
    >
      <table class="w-full">
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
