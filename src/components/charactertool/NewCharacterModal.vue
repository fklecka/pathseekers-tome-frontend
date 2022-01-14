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
    <div class="bg-card text-white newCharacterModal w-full md:w-auto m-3">
      <div class="py-6 px-3 text-center">
        Es ist noch ein unfertiger Charakter vorhanden.<br />
        Möchten Sie mit diesem Charakter fortfahren oder einen neuen erstellen?
      </div>
      <div class="flex justify-between px-3 pb-3">
        <custom-button
          class="py-3 bg-card text-sm hover:bg-highlight text-center w-56"
          @click="confirm"
        >
          Fortfahren
        </custom-button>
        <custom-button
          class="py-3 bg-card text-sm hover:bg-highlight text-center w-56 ml-3"
          @click="close"
        >
          Neuer Charakter
        </custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../CustomButton.vue";
export default {
  components: { CustomButton },
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

<style scoped>
.newCharacterModal {
  box-shadow: 5px 10px 5px #00000020;
  border: 10px outset #35353542;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
