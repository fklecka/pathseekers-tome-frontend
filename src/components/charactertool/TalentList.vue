<template>
  <div>
    <table>
      <tr class="text-left">
        <th class="text-center hidden md:table-cell">+</th>
        <th>Name</th>
        <th class="hidden md:table-cell">Typ</th>
        <th class="hidden md:table-cell">Beschreibung</th>
        <th class="hidden md:table-cell">Voraussetzung</th>
      </tr>
      <talent-desktop
        v-for="item in filteredData"
        :key="item.id"
        :item="item"
        @passTalent="selectTalent($event)"
      />
      <talent-mobile
        v-for="item in filteredData"
        :key="item.id"
        class="md:hidden"
        :item="item"
        @passTalent="selectTalent($event)"
      />
    </table>
  </div>
</template>

<script>
import TalentMobile from "./mobile/TalentMobile.vue";
import TalentDesktop from "./desktop/TalentDesktop.vue";
export default {
  props: ["listData", "searchKey"],
  components: { TalentMobile, TalentDesktop },
  data() {
    return {
      talents: [],
    };
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
  methods: {
    selectTalent(talent) {
      if (this.talents.includes(talent)) {
        for (let i = 0; i < this.talents.length; i++) {
          if (this.talents[i] === talent) {
            this.talents.splice(i, 1);
          }
        }
      } else {
        this.talents.push(talent);
      }
      this.passTalents();
    },
    passTalents() {
      this.$emit("passTalents", this.talents);
    },
  },
};
</script>

<style scoped>
th,
td {
  padding: 10px;
}
.active {
  background-color: #f28241;
}
tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}
tr:hover {
  background-color: #2c3540;
}
table {
  table-layout: fixed;
}
</style>
