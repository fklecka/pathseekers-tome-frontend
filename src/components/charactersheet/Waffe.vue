<template>
  <!-- <tr class="text-md">
    <td colspan="2">
      <value-field-long :value="this.waffeInfo.waffe" :main="true" />
    </td>
    <td colspan="2"><value-field-long :value="0" :main="false" /></td>
    <td colspan="2"><value-field-long :value="0" :main="false" /></td>
    <td><value-field :value="0" :main="false" /></td>
    <td><value-field :value="0" :main="false" /></td>
    <td colspan="2"><value-field-long :value="0" :main="false" /></td>
  </tr> -->
  <tr class="flex flex-col cursor-pointer select-none">
    <div
      class="flex justify-between w-full items-center p-2 hover:bg-highlight"
      v-bind:class="{ active: !hidden }"
      @click="openCard()"
    >
      <table>
        <tr>
          <td>{{ this.item.waffe }}</td>
        </tr>
      </table>
    </div>
    <div class="flex overflow-hidden p-2 justify-between bg-bg" v-if="!hidden">
      <table class="border-opacity-10 border-font border-t w-full">
        <tr>
          <td>Schaden (K):</td>
          <td>{{ this.item.schaden_k }}</td>
          <td>Schaden (M):</td>
          <td>{{ this.item.schaden_m }}</td>
        </tr>
        <tr>
          <td>Kritischer Treffer:</td>
          <td>{{ this.item.kritischer_treffer }}</td>
          <td>Grundreichweite:</td>
          <td>{{ this.item.grundreichweite }}</td>
        </tr>
        <tr>
          <td>Gewicht:</td>
          <td>{{ this.item.gewicht }}</td>
          <td>Art:</td>
          <td>{{ this.item.art }}</td>
        </tr>
        <tr>
          <td>Speziell:</td>
          <td>{{ this.item.speziell }}</td>
          <td>Wert:</td>
          <td>{{ this.item.preis }}</td>
        </tr>
      </table>
    </div>
  </tr>
</template>

<script>
// import ValueFieldLong from "./ValueFieldLong.vue";
// import ValueField from "./ValueField.vue";
export default {
  props: ["item"],
  components: {
    // ValueFieldLong,
    // ValueField,
  },
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
