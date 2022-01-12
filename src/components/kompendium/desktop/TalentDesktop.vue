<template>
  <tr>
    <td class="hidden md:table-cell">{{ this.item.name }}</td>
    <td class="hidden md:table-cell">{{ this.item.art }}</td>
    <td class="hidden md:table-cell">{{ this.item.beschreibung }}</td>
    <td class="hidden md:table-cell">{{ this.item.voraussetzung }}</td>
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
