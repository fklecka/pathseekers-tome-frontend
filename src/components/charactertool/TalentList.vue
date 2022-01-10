<template>
  <div>
    <table class="overflow-x-scroll">
      <tr class="text-left">
        <th>Name</th>
        <th>Typ</th>
        <th>Beschreibung</th>
        <th>Voraussetzung</th>
      </tr>
      <tr
        v-for="item in filteredData"
        :key="item.id"
        @click="selectTalent(item.name)"
        class="cursor-pointer"
      >
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
      console.log(this.talents);
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
