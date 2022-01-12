<template>
  <div>
    <table>
      <tr class="text-left">
        <th class="md:table-cell">Name</th>
        <th class="hidden md:table-cell">Typ</th>
        <th class="hidden md:table-cell">Beschreibung</th>
        <th class="hidden md:table-cell">Voraussetzung</th>
      </tr>
      <talent-desktop
        v-for="item in filteredData"
        :key="item.id"
        :item="item"
      />
      <talent-mobile
        v-for="item in filteredData"
        :key="item.id"
        class="md:hidden"
        :item="item"
      />
    </table>
  </div>
</template>

<script>
import TalentDesktop from "./desktop/TalentDesktop.vue";
import TalentMobile from "./mobile/TalentMobile.vue";
export default {
  components: { TalentMobile, TalentDesktop },
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
th {
  padding: 10px 0px 10px 0.75rem;
}
tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
