<template>
  <tr>
    <td class="hidden xl:table-cell">{{ this.item.rüstung }}</td>
    <td class="hidden xl:table-cell">{{ this.item.preis }}</td>
    <td class="hidden xl:table-cell">{{ this.item.rüstungsbonus }}</td>
    <td class="hidden xl:table-cell">{{ this.item.ge_bonus }}</td>
    <td class="hidden xl:table-cell">{{ this.item.rüstungsmalus }}</td>
    <td class="hidden xl:table-cell">{{ this.item.zauberpatzer }}</td>
    <td class="hidden xl:table-cell">{{ this.item.bewegungsrate9 }}</td>
    <td class="hidden xl:table-cell">{{ this.item.bewegungsrate6 }}</td>
    <td class="hidden xl:table-cell">{{ this.item.gewicht }}</td>
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
