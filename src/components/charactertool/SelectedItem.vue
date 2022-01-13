<template>
  <tr class="flex flex-col cursor-pointer select-none">
    <div
      class="flex justify-between w-full items-center p-2 hover:bg-highlight"
    >
      <table>
        <tr>
          <td v-if="this.item.waffe">{{ this.item.waffe }}</td>
          <td v-if="this.item.rüstung">{{ this.item.rüstung }}</td>
          <td>{{ this.item.preis }}</td>
        </tr>
      </table>

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
          sub
        "
        @click="deleteItem()"
      >
        -
      </div>
    </div>
  </tr>
</template>

<script>
export default {
  props: ["item"],
  data: () => {
    return {};
  },
  methods: {
    deleteItem() {
      this.$emit("deleteItem", this.item);
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
.sub {
  outline: 5px outset #00000033;
}
.sub:hover {
  outline: 5px inset #00000033;
}
</style>
