<template>
  <tr class="w-full cursor-pointer select-none">
    <td class="w-full flex justify-between items-center">
      <div class="flex items-center" @click="openCard()">
        <span class="transition mr-3" v-bind:class="{ open: !hidden }">></span>
        {{ this.item.name }}
      </div>
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
          w-12
          h-12
          mr-3
          flex
          justify-center
          items-center
        "
        @click="passTalent()"
      >
        {{ button }}
      </div>
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
import { mapGetters } from "vuex";
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
    passTalent() {
      this.$emit("passTalent", this.item.name);
    },
  },
  computed: {
    ...mapGetters({
      charactertoolData: "charactertoolData",
    }),
    button() {
      if (this.charactertoolData.talents.includes(this.item.name)) {
        return "-";
      } else {
        return "+";
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
  background: #2c3540;
  border: 5px inset #00000033;
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #00000020;
}
.open {
  transform: rotate(90deg);
}
tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.01);
}
</style>
