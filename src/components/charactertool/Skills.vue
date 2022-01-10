<template>
  <div class="w-full bg-bg overflow-y-scroll text-font">
    <h2 class="font-headline text-4xl text-center">Fertigkeiten erwerben</h2>
    <p class="pt-6">
      Nun kannst du Fertigkeiten für deinen Charakter erwerben. Dieser Schritt
      könnte für einen Anfänger anhand der vielen vorhandenen Fertigkeiten etwas
      überwältigend sein. Denke an die Hintergrundgeschichte deines Charakters.
      Wie sah sein bisheriges Lebens aus und welche Fertigkeiten könnte er
      dadurch gewonnen haben? Im Kompendium kannst du Informationen zu den
      Fertigkeiten nachlesen.
    </p>
    <p class="py-3">
      Wie viele Fertigkeiten du erwerben kannst hängt von der Klasse , dem Volk
      und dem Intelligenzwert deines Charakters ab.
    </p>
    <p>
      KF steht für Klassenfertigkeit. Hierbei muss der Rüstungsmalus
      einberechnet werden. Ungeübte Fertigkeiten können auch dann eingesetzt
      werden wenn deren Rang 0 ist.
    </p>
    <div class="bg-white bg-opacity-5 py-6 my-6">
      <p class="pb-6 text-center text-xl">Erwerbe Fertigkeiten</p>
      <p
        class="text-center text-2xl pb-6"
        v-bind:class="{ red: countSpent === this.calcSkillPoints }"
      >
        Fertigkeitspunkte: {{ this.countSpent }} /
        {{ this.calcSkillPoints }}
      </p>
      <div class="flex justify-center">
        <table>
          <tr>
            <th>Fertigkeit</th>
            <th>KF</th>
            <th>Ungeübt</th>
            <th>Rang</th>
            <th>Gesamt</th>
          </tr>
          <tr v-for="fertigkeit in fertigkeiten" :key="fertigkeit.id">
            <td>{{ fertigkeit.name }}</td>
            <td v-if="checkClassSkill(fertigkeit.kf)">&check;</td>
            <td v-if="!checkClassSkill(fertigkeit.kf)">&cross;</td>
            <td v-if="fertigkeit.trained">&check;</td>
            <td v-else>&cross;</td>
            <td v-if="this.skills[fertigkeit.name]">
              {{ this.skills[fertigkeit.name] }}
            </td>
            <td v-else>0</td>
            <td
              v-if="
                checkClassSkill(fertigkeit.kf) && this.skills[fertigkeit.name]
              "
            >
              {{ this.skills[fertigkeit.name] + 3 }}
            </td>
            <td v-else-if="this.skills[fertigkeit.name]">
              {{ this.skills[fertigkeit.name] }}
            </td>
            <td v-else>0</td>
            <td>
              <custom-button
                class="bg-card border border-card hover:bg-bg text-center mr-2"
                @click="subSkillRank(fertigkeit.name)"
                >-</custom-button
              >
              <custom-button
                class="bg-card border border-card hover:bg-bg text-center"
                @click="addSkillRank(fertigkeit.name)"
                >+</custom-button
              >
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../CustomButton.vue";
import fertigkeiten from "../../assets/lists/fertigkeiten.json";
export default {
  props: ["class", "character"],
  components: { CustomButton },
  data: () => {
    return {
      fertigkeiten: fertigkeiten,
      countSpent: 0,
      skills: {},
    };
  },
  methods: {
    checkClassSkill(classes) {
      if (classes.includes(this.class)) {
        return true;
      } else {
        return false;
      }
    },
    addSkillRank(id) {
      if (this.countSpent < this.calcSkillPoints) {
        if (!this.skills[id]) {
          this.skills[id] = 1;
        } else {
          this.skills[id] += 1;
        }
        this.countSpent += 1;
        this.passSkills();
      }
    },
    subSkillRank(id) {
      if (this.skills[id] > 0) {
        this.skills[id] -= 1;
        if (this.skills[id] === 0) {
          delete this.skills[id];
        }
      }
      if (this.countSpent > 0) {
        this.countSpent -= 1;
      }
      this.passSkills();
    },
    passSkills() {
      this.$emit("passSkills", this.skills);
    },
  },
  computed: {
    calcSkillPoints() {
      const sum = Math.floor(
        parseInt(
          (this.character.attributes.int +
            this.character.attributes.raceBonusAttributes.int -
            10) /
            2
        ) +
          this.character.classAttributes.bonusSkill +
          this.character.classAttributes.skillPoints
      );
      return sum;
    },
  },
};
</script>

<style scoped>
th,
td {
  padding: 10px;
  text-align: center;
}
td:first-child {
  text-align: left;
}
th:first-child {
  text-align: left;
}
th {
  font-size: 0.8rem;
  padding-bottom: 0;
  text-align: center;
}
.red {
  color: #f28241;
}
</style>
