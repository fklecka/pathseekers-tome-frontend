<template>
  <tr>
    <td class="hidden xl:table-cell">{{ this.item.name }}</td>
    <td class="hidden xl:table-cell">{{ this.item.grad }}</td>
    <td class="hidden xl:table-cell">{{ this.item.schule }}</td>
    <td class="hidden xl:table-cell">{{ this.item.unterschule }}</td>
    <td class="hidden xl:table-cell">{{ this.item.kategorie }}</td>
    <td class="hidden xl:table-cell">{{ this.item.beschreibung }}</td>
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
