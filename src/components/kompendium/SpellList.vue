<template>
  <div>
    <table class="w-full">
      <tr class="text-left">
        <th>Name</th>
        <th class="hidden xl:table-cell">Grad</th>
        <th class="hidden xl:table-cell">Schule</th>
        <th class="hidden xl:table-cell">Unterschule</th>
        <th class="hidden xl:table-cell">Kategorie</th>
        <th class="hidden xl:table-cell">Beschreibung</th>
      </tr>
      <zauber-desktop
        v-for="item in filteredData"
        :key="item.id"
        :item="item"
      />
      <zauber-mobile v-for="item in filteredData" :key="item.id" :item="item" />
    </table>
  </div>
</template>

<script>
import ZauberDesktop from "./desktop/ZauberDesktop.vue";
import ZauberMobile from "./mobile/ZauberMobile.vue";
export default {
  components: { ZauberDesktop, ZauberMobile },
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
