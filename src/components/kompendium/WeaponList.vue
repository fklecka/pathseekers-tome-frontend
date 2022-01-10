<template>
  <div>
    <table class="overflow-x-scroll">
      <tr class="text-left">
        <th>Waffe</th>
        <th>Preis</th>
        <th>Schaden (K)</th>
        <th>Schaden (M)</th>
        <th>Kritischer Treffer</th>
        <th>Grundreichweite</th>
        <th>Gewicht</th>
        <th>Art</th>
        <th>Speziell</th>
      </tr>
      <tr>
        <td class="font-bold col text-center border" colspan="9">
          Einfache Waffen
        </td>
      </tr>
      <tr v-for="item in lightWeaponsfilteredData" :key="item.id">
        <td>{{ item.waffe }}</td>
        <td>{{ item.preis }}</td>
        <td>{{ item.schaden_k }}</td>
        <td>{{ item.schaden_m }}</td>
        <td>{{ item.kritischer_treffer }}</td>
        <td>{{ item.grundreichweite }}</td>
        <td>{{ item.gewicht }}</td>
        <td>{{ item.art }}</td>
        <td>{{ item.speziell }}</td>
      </tr>
      <tr>
        <td class="font-bold col text-center border" colspan="9">
          Kriegswaffen
        </td>
      </tr>
      <tr v-for="item in warWeaponsfilteredData" :key="item.id">
        <td>{{ item.waffe }}</td>
        <td>{{ item.preis }}</td>
        <td>{{ item.schaden_k }}</td>
        <td>{{ item.schaden_m }}</td>
        <td>{{ item.kritischer_treffer }}</td>
        <td>{{ item.grundreichweite }}</td>
        <td>{{ item.gewicht }}</td>
        <td>{{ item.art }}</td>
        <td>{{ item.speziell }}</td>
      </tr>
      <tr>
        <td class="font-bold col text-center border" colspan="9">
          Exotische Waffen
        </td>
      </tr>
      <tr v-for="item in exoticWeaponsfilteredData" :key="item.id">
        <td>{{ item.waffe }}</td>
        <td>{{ item.preis }}</td>
        <td>{{ item.schaden_k }}</td>
        <td>{{ item.schaden_m }}</td>
        <td>{{ item.kritischer_treffer }}</td>
        <td>{{ item.grundreichweite }}</td>
        <td>{{ item.gewicht }}</td>
        <td>{{ item.art }}</td>
        <td>{{ item.speziell }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["lightWeapons", "exoticWeapons", "warWeapons", "searchKey"],
  data() {
    return {};
  },
  computed: {
    lightWeaponsfilteredData() {
      return this.lightWeapons.filter((item) => {
        return (
          item.waffe.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
        );
      });
    },
    warWeaponsfilteredData() {
      return this.warWeapons.filter((item) => {
        return (
          item.waffe.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
        );
      });
    },
    exoticWeaponsfilteredData() {
      return this.exoticWeapons.filter((item) => {
        return (
          item.waffe.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
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
