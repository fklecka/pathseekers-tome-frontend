<template>
  <tr>
    <td class="hidden xl:table-cell">{{ this.item.waffe }}</td>
    <td class="hidden xl:table-cell">{{ this.item.preis }}</td>
    <td class="hidden xl:table-cell">{{ this.item.schaden_k }}</td>
    <td class="hidden xl:table-cell">{{ this.item.schaden_m }}</td>
    <td class="hidden xl:table-cell">{{ this.item.kritischer_treffer }}</td>
    <td class="hidden xl:table-cell">{{ this.item.grundreichweite }}</td>
    <td class="hidden xl:table-cell">{{ this.item.gewicht }}</td>
    <td class="hidden xl:table-cell">{{ this.item.art }}</td>
    <td class="hidden xl:table-cell">{{ this.item.speziell }}</td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
td {
  padding: 10px;
}
</style>
