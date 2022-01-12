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
            >{{ this.item.waffe }}
          </td>
          <td>
            <div class="flex justify-between items-center">
              {{ this.item.preis }}
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
          </td>
        </tr>
      </table>
    </div>
    <div
      class="flex overflow-hidden p-2 justify-between bg-dark"
      v-if="!hidden"
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
.open {
  transform: rotate(90deg);
}
</style>
