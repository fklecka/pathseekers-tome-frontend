<template>
  <div>
    <table class="w-full">
      <tr class="text-left">
        <th class="md:table-cell">Rüstung</th>
        <th class="hidden xl:table-cell">Preis</th>
        <th class="hidden xl:table-cell">Rüstungsbonus</th>
        <th class="hidden xl:table-cell">GE-Bonus</th>
        <th class="hidden xl:table-cell">Rüstungsmalus</th>
        <th class="hidden xl:table-cell">Bewegungsrate 9m</th>
        <th class="hidden xl:table-cell">Bewegungsrate 6m</th>
        <th class="hidden xl:table-cell">Gewicht</th>
      </tr>
      <tr v-if="lightArmorfilteredData != ''">
        <td class="font-bold col text-center border" colspan="9">
          Leichte Rüstung
        </td>
      </tr>
      <ruestung-desktop
        v-for="item in lightArmorfilteredData"
        :key="item.id"
        :item="item"
      />
      <ruestung-mobile
        v-for="item in lightArmorfilteredData"
        :key="item.id"
        :item="item"
      />
      <tr v-if="middleArmorfilteredData != ''">
        <td class="font-bold col text-center border" colspan="9">
          Mittelschwere Rüstung
        </td>
      </tr>
      <ruestung-desktop
        v-for="item in middleArmorfilteredData"
        :key="item.id"
        :item="item"
      />
      <ruestung-mobile
        v-for="item in middleArmorfilteredData"
        :key="item.id"
        :item="item"
      />
      <tr v-if="heavyArmorfilteredData != ''">
        <td class="font-bold col text-center border" colspan="9">
          Schwere Rüstung
        </td>
      </tr>
      <ruestung-desktop
        v-for="item in heavyArmorfilteredData"
        :key="item.id"
        :item="item"
      />
      <ruestung-mobile
        v-for="item in heavyArmorfilteredData"
        :key="item.id"
        :item="item"
      />
      <tr v-if="armorExtrafilteredData != ''">
        <td class="font-bold col text-center border" colspan="9">
          Rüstung Extra
        </td>
      </tr>
      <ruestung-desktop
        v-for="item in armorExtrafilteredData"
        :key="item.id"
        :item="item"
      />
      <ruestung-mobile
        v-for="item in armorExtrafilteredData"
        :key="item.id"
        :item="item"
      />
      <tr v-if="shieldsfilteredData != ''">
        <td class="font-bold col text-center border" colspan="9">Schilde</td>
      </tr>
      <ruestung-desktop
        v-for="item in shieldsfilteredData"
        :key="item.id"
        :item="item"
      />
      <ruestung-mobile
        v-for="item in shieldsfilteredData"
        :key="item.id"
        :item="item"
      />
    </table>
  </div>
</template>

<script>
import RuestungDesktop from "./desktop/RuestungDesktop.vue";
import RuestungMobile from "./mobile/RuestungMobile.vue";

export default {
  components: { RuestungDesktop, RuestungMobile },
  props: [
    "lightArmor",
    "middleArmor",
    "heavyArmor",
    "armorExtra",
    "shields",
    "searchKey",
  ],
  data() {
    return {};
  },
  computed: {
    lightArmorfilteredData() {
      return this.lightArmor.filter((item) => {
        return (
          item.rüstung.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
        );
      });
    },
    middleArmorfilteredData() {
      return this.middleArmor.filter((item) => {
        return (
          item.rüstung.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
        );
      });
    },
    heavyArmorfilteredData() {
      return this.heavyArmor.filter((item) => {
        return (
          item.rüstung.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
        );
      });
    },
    armorExtrafilteredData() {
      return this.armorExtra.filter((item) => {
        return (
          item.rüstung.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
        );
      });
    },
    shieldsfilteredData() {
      return this.shields.filter((item) => {
        return (
          item.rüstung.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
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
