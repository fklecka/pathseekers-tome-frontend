<template>
  <div class="overflow-x-scroll">
    <table class="w-full">
      <tr class="text-left">
        <th class="w-2/12">Name</th>
        <th class="w-2/12">Grad</th>
        <th class="w-1/12">Schule</th>
        <th class="w-2/12">Unterschule</th>
        <th class="w-2/12">Kategorie</th>
        <th class="w-3/12">Beschreibung</th>
      </tr>
      <tr v-for="item in filteredData" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.grad }}</td>
        <td>{{ item.schule }}</td>
        <td>{{ item.unterschule }}</td>
        <td>{{ item.kategorie }}</td>
        <td>{{ item.beschreibung }}</td>
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
