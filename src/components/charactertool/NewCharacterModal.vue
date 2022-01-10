<template>
  <div
    class="
      w-full
      h-full
      bg-black bg-opacity-30
      flex
      justify-center
      items-center
      select-none
      absolute
      top-0
      z-50
    "
  >
    <div class="bg-bg rounded-md text-white">
      <div class="p-12 text-center">
        Es ist noch ein unfertiger Charakter vorhanden.<br />
        Möchten Sie mit diesem Charakter fortfahren oder einen neuen erstellen?
      </div>
      <div class="flex border-t">
        <button
          class="w-2/4 py-3 bg-bg border-r hover:bg-card text-center"
          @click="confirm"
        >
          Fortfahren
        </button>
        <button
          class="w-2/4 py-3 bg-bg hover:bg-card text-center"
          @click="close"
        >
          Neuer Charakter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    close() {
      this.$emit("close");
    },
    confirm() {
      this.$emit("confirm");
    },
  },
};
</script>

<style></style>
