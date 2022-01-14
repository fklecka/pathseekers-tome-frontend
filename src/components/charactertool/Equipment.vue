<template>
  <div class="w-full bg-bg overflow-y-scroll text-font">
    <h2 class="font-headline text-4xl text-center">Ausrüstung erwerben</h2>
    <p class="pt-6">
      Nun gilt es deinen Charakter auszurüsten. Zu Beginn steht dir abhängig von
      der Klasse deines Charakters eine Gewisse Menge an Goldmünzen zur
      Verfügung.
    </p>
    <p class="py-3">
      Du kannst anfangs nur ein Talent wählen. Menschen und Kämpfer erhalten ein
      zusätzliches Talent.
    </p>
    <p>Klicke auf den Namen des Talents um es hinzuzufügen!</p>
    <p class="pt-3">
      <strong
        >Beachte dass du hier jedes Talent wählen kannst auch wenn dein
        Charakter die Voraussetzungen nicht erfüllt!</strong
      >
    </p>
    <div class="bg-white bg-opacity-5 pt-6 my-6 inputhighlight">
      <p class="pb-6 text-center text-xl">Wähle deine Ausrüstung</p>
      <p class="text-center text-2xl">{{ countSpent }} GM / {{ money }}GM</p>
      <searchBar
        @passKeyword="getKeyword($event)"
        class="sticky -top-6 md:-top-12"
      />

      <weapon-list
        :lightWeapons="lightWeapons"
        :warWeapons="warWeapons"
        :exoticWeapons="exoticWeapons"
        :searchKey="searchKeyword"
        :lightArmor="lightArmor"
        :middleArmor="middleArmor"
        :heavyArmor="heavyArmor"
        :armorExtra="armorExtra"
        :shields="shields"
        class="overflow-y-scroll h-96 overflow-x-scroll"
        @passWeapon="getAndPassWeapon($event)"
        @passArmor="getAndPassArmor($event)"
      />
    </div>
    <div class="my-6 inputhighlight">
      <table class="w-full">
        <tr>
          <p class="font-bold col text-center border py-2">
            Ausgewählte Ausrüstung
          </p>
        </tr>
        <selected-item
          v-for="item in this.selectedItems.weapons"
          :key="item.id"
          :item="item"
          @deleteItem="getDeleteItem($event)"
        />
        <selected-item
          v-for="item in this.selectedItems.armor"
          :key="item.id"
          :item="item"
          @deleteItem="getDeleteItem($event)"
        />
      </table>
    </div>
  </div>
</template>

<script>
import searchBar from "../kompendium/SearchBar.vue";
import weaponList from "./WeaponList.vue";
import axios from "axios";
import SelectedItem from "./SelectedItem.vue";
import { mapGetters } from "vuex";

export default {
  components: { searchBar, weaponList, SelectedItem },
  props: ["money"],
  data() {
    return {
      searchKeyword: "",
      lightWeapons: [],
      warWeapons: [],
      exoticWeapons: [],
      lightArmor: [],
      middleArmor: [],
      heavyArmor: [],
      armorExtra: [],
      shields: [],
      errors: [],
      selectedItems: {
        weapons: [],
        armor: [],
      },
    };
  },
  methods: {
    getKeyword(keyword) {
      this.searchKeyword = keyword;
    },
    getAndPassWeapon(item) {
      this.selectedItems.weapons.push(item);
      this.passItems();
    },
    getAndPassArmor(item) {
      this.selectedItems.armor.push(item);
      this.passItems();
      console.log(this.selectedItems);
    },
    getDeleteItem(item) {
      if (item.waffe) {
        for (let i = 0; i < this.selectedItems.weapons.length; i++) {
          if (this.selectedItems.weapons[i] === item) {
            this.selectedItems.weapons.splice(i, 1);
          }
        }
      } else {
        for (let i = 0; i < this.selectedItems.armor.length; i++) {
          if (this.selectedItems.armor[i] === item) {
            this.selectedItems.armor.splice(i, 1);
          }
        }
      }
    },
    passItems() {
      this.$emit("passItems", this.selectedItems);
    },
  },
  computed: {
    ...mapGetters({
      charactertoolData: "charactertoolData",
    }),
    countSpent() {
      let sum = 0;
      for (let i = 0; i < this.selectedItems.weapons.length; i++) {
        if (
          this.selectedItems.weapons[i].preis !== "Speziell" &&
          this.selectedItems.weapons[i].preis !== "-"
        ) {
          sum += parseInt(
            this.selectedItems.weapons[i].preis.replace(" GM", "")
          );
        }
      }
      for (let i = 0; i < this.selectedItems.armor.length; i++) {
        if (
          this.selectedItems.armor[i].preis !== "Speziell" &&
          this.selectedItems.armor[i].preis !== "-"
        ) {
          sum += parseInt(this.selectedItems.armor[i].preis.replace(" GM", ""));
        }
      }
      return sum;
    },
  },
  async created() {
    try {
      const response = await axios.get(this.$config.apiUrl + "/einfachewaffen");
      this.lightWeapons = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(this.$config.apiUrl + "/kriegswaffen");
      this.warWeapons = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(
        this.$config.apiUrl + "/exotischewaffen"
      );
      this.exoticWeapons = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(
        this.$config.apiUrl + "/leichteruestung"
      );
      this.lightArmor = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(
        this.$config.apiUrl + "/mittelschwereruestung"
      );
      this.middleArmor = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(
        this.$config.apiUrl + "/schwereruestung"
      );
      this.heavyArmor = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(this.$config.apiUrl + "/ruestungextra");
      this.armorExtra = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(this.$config.apiUrl + "/schilde");
      this.shields = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  },
  mounted() {
    if (this.charactertoolData.items) {
      this.selectedItems = this.charactertoolData.items;
    }
  },
};
</script>

<style scoped>
a:hover {
  color: #f28241;
}
</style>
