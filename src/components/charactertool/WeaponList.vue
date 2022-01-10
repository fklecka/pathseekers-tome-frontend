<template>
  <div class="w-full">
    <table class="w-full">
      <tr v-if="lightWeaponsfilteredData != ''">
        <p class="font-bold col text-center border py-2">Einfache Waffen</p>
      </tr>
      <waffen-listen-component
        v-for="item in lightWeaponsfilteredData"
        :key="item.id"
        :item="item"
        class="w-full"
        @passItem="getAndPassWeapon($event)"
      />
      <tr v-if="warWeaponsfilteredData != ''">
        <p class="font-bold col text-center border py-2">Kriegswaffen</p>
      </tr>
      <waffen-listen-component
        v-for="item in warWeaponsfilteredData"
        :key="item.id"
        :item="item"
        class="w-full"
        @passItem="getAndPassWeapon($event)"
      />
      <tr v-if="exoticWeaponsfilteredData != ''">
        <p class="font-bold col text-center border py-2">Exotische Waffen</p>
      </tr>
      <waffen-listen-component
        v-for="item in exoticWeaponsfilteredData"
        :key="item.id"
        :item="item"
        class="w-full"
        @passItem="getAndPassWeapon($event)"
      />
    </table>
    <table class="w-full">
      <tr v-if="lightArmorfilteredData != ''">
        <p class="font-bold col text-center border py-2">Leichte Rüstung</p>
      </tr>
      <ruestung-listen-component
        v-for="item in lightArmorfilteredData"
        :key="item.id"
        :item="item"
        class="w-full"
        @passItem="getAndPassArmor($event)"
      />

      <tr v-if="middleArmorfilteredData != ''">
        <p class="font-bold col text-center border py-2">
          Mittelschwere Rüstungen
        </p>
      </tr>
      <ruestung-listen-component
        v-for="item in middleArmorfilteredData"
        :key="item.id"
        :item="item"
        class="w-full"
        @passItem="getAndPassArmor($event)"
      />
      <tr v-if="heavyArmorfilteredData != ''">
        <p class="font-bold col text-center border py-2">Schwere Rüstungen</p>
      </tr>
      <ruestung-listen-component
        v-for="item in heavyArmorfilteredData"
        :key="item.id"
        :item="item"
        class="w-full"
        @passItem="getAndPassArmor($event)"
      />
      <tr v-if="armorExtrafilteredData != ''">
        <p class="font-bold col text-center border py-2">Rüstungen Extra</p>
      </tr>
      <ruestung-listen-component
        v-for="item in armorExtrafilteredData"
        :key="item.id"
        :item="item"
        class="w-full"
        @passItem="getAndPassArmor($event)"
      />
    </table>
  </div>
</template>

<script>
import WaffenListenComponent from "./WaffenListenComponent.vue";
import RuestungListenComponent from "./RuestungListenComponent.vue";
export default {
  components: { WaffenListenComponent, RuestungListenComponent },
  props: [
    "lightWeapons",
    "exoticWeapons",
    "warWeapons",
    "lightArmor",
    "middleArmor",
    "heavyArmor",
    "armorExtra",
    "searchKey",
  ],
  data() {
    return {};
  },
  methods: {
    getAndPassWeapon(item) {
      this.$emit("passWeapon", item);
    },
    getAndPassArmor(item) {
      this.$emit("passArmor", item);
    },
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
  },
};
</script>

<style scoped>
th,
td {
  padding: 10px;
}

table {
  table-layout: fixed;
}
</style>
