<template>
  <div class="flex">
    <div class="text-white">
      <h2 class="text-xl text-center">Fertigkeiten</h2>
      <hr class="opacity-20 pb-3" />
      <p class="m-3">
        Fertigkeiten welche mit * gekennzeichnet sind, sind geübte Fertigkeiten
      </p>
      <table class="mx-3">
        <tr class="text-xs">
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
</style>
