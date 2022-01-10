<template>
  <div>
    <table class="overflow-x-scroll">
      <tr class="text-left">
        <th class="w-3/12">Name</th>
        <th class="w-1/12">Typ</th>
        <th class="w-4/12">Beschreibung</th>
        <th class="w-4/12">Voraussetzung</th>
      </tr>
      <tr v-for="item in filteredData" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.art }}</td>
        <td>{{ item.beschreibung }}</td>
        <td>{{ item.voraussetzung }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["listData", "searchKey"],
  data() {
    return {};
  },
  computed: {
    filteredData() {
      return this.listData.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
        );
      });
    },
  },
  methods: {},
};
</script>

<style scoped>
th,
td {
  padding: 10px;
}
tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}
table {
  table-layout: fixed;
}
</style>
