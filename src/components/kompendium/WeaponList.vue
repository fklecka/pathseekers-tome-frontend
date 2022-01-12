<template>
  <div>
    <table class="w-full">
      <tr class="text-left">
        <th class="md:table-cell">Waffe</th>
        <th class="hidden xl:table-cell">Preis</th>
        <th class="hidden xl:table-cell">Schaden (K)</th>
        <th class="hidden xl:table-cell">Schaden (M)</th>
        <th class="hidden xl:table-cell">Kritischer Treffer</th>
        <th class="hidden xl:table-cell">Grundreichweite</th>
        <th class="hidden xl:table-cell">Gewicht</th>
        <th class="hidden xl:table-cell">Art</th>
        <th class="hidden xl:table-cell">Speziell</th>
      </tr>
      <tr>
        <td class="font-bold col text-center border" colspan="9">
          Einfache Waffen
        </td>
      </tr>
      <waffe-desktop
        v-for="item in lightWeaponsfilteredData"
        :key="item.id"
        :item="item"
      />
      <waffe-mobile
        v-for="item in lightWeaponsfilteredData"
        :key="item.id"
        :item="item"
      />
      <tr>
        <td class="font-bold col text-center border" colspan="9">
          Kriegswaffen
        </td>
      </tr>
      <waffe-desktop
        v-for="item in warWeaponsfilteredData"
        :key="item.id"
        :item="item"
      />
      <waffe-mobile
        v-for="item in warWeaponsfilteredData"
        :key="item.id"
        :item="item"
      />
      <tr>
        <td class="font-bold col text-center border" colspan="9">
          Exotische Waffen
        </td>
      </tr>
      <waffe-desktop
        v-for="item in exoticWeaponsfilteredData"
        :key="item.id"
        :item="item"
      />
      <waffe-mobile
        v-for="item in exoticWeaponsfilteredData"
        :key="item.id"
        :item="item"
      />
    </table>
  </div>
</template>

<script>
import WaffeDesktop from "./desktop/WaffeDesktop.vue";
import WaffeMobile from "./mobile/WaffeMobile.vue";

export default {
  components: { WaffeDesktop, WaffeMobile },
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
