<template>
  <div class="flex fertigkeiten m-1 sm:m-3 px-1 sm:px-3">
    <div class="text-white">
      <h2 class="text-xl text-center">Fertigkeiten</h2>
      <hr class="opacity-20 mb-3" />
      <p class="m-3">
        Fertigkeiten welche mit * gekennzeichnet sind, sind geübte Fertigkeiten
      </p>
      <table>
        <tr class="text-sheetHeader md:text-xs">
          <th></th>
          <th>Gesamt</th>
          <th>Att. Mod</th>
          <th>Ränge</th>
          <th>Sonstige</th>
        </tr>
        <skill
          v-for="skill in fertigkeiten"
          v-bind:key="skill.id"
          :skill="skill"
        />
      </table>
    </div>
  </div>
</template>

<script>
import Skill from "./Skill.vue";
import fertigkeiten from "../../assets/lists/fertigkeiten.json";
export default {
  components: { Skill },
  data: () => {
    return {
      fertigkeiten: fertigkeiten,
      countSpent: 0,
      skills: {},
    };
  },
};
</script>

<style scoped>
tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}
.fertigkeiten {
  border: 3px inset #565d66;
  background-color: #232a33;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
