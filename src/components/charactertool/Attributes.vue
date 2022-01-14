<template>
  <div class="w-full bg-bg overflow-y-scroll text-font">
    <h2 class="font-headline text-4xl text-center">Attributswerte zuweisen</h2>
    <p class="py-6">
      Nun weisen wir deine Charakter seine Attributswerte zu. Diese Werte
      repräsentieren die Talente und das Können deines Charakters und wirken
      sich auf alle Fähigkeiten aus.
    </p>
    <p class="pb-6">
      Du bekommst eine bestimmte Anzahl an Punkten um damit die Attributswerte
      deines Charakters zu erhöhen. Du kannst auch ein Attribut verringern um
      Punkte zu erhalten. Ein Attribut kann nicht unter 7 verringert und über 18
      erhöht werden.
    </p>
    <p class="pb-6">
      Der Kampagnentyp entscheidet wie viele Punkte dir anfangs zur Verfügung
      stehen. Frage dafür deinen Spieleleiter welcher Kampagnentyp gespielt
      wird.
    </p>
    <div class="bg-white bg-opacity-5 p-3 md:p-6 my-6 inputhighlight">
      <p class="pb-6 text-center text-xl">Wähle einen Kampagnentyp</p>
      <div class="gap-3">
        <div class="flex flex-col md:flex-row gap-3 mb-3">
          <custom-button
            class="
              bg-card
              border border-card
              hover:bg-bg
              text-center
              md:w-1/2
              w-full
            "
            @click="setCampaignType('low')"
            v-bind:class="{ active: sum.campaignType === 'low' }"
            >Low Fantasy <br />
            <strong>10 Punkte</strong></custom-button
          >
          <custom-button
            class="
              bg-card
              border border-card
              hover:bg-bg
              text-center
              md:w-1/2
              w-full
            "
            @click="setCampaignType('standard')"
            v-bind:class="{ active: sum.campaignType === 'standard' }"
            >Standard Fantasy <br />
            <strong>15 Punkte</strong></custom-button
          >
        </div>
        <div class="flex flex-col md:flex-row gap-3 mb-3">
          <custom-button
            class="
              bg-card
              border border-card
              hover:bg-bg
              text-center
              md:w-1/2
              w-full
            "
            @click="setCampaignType('high')"
            v-bind:class="{ active: sum.campaignType === 'high' }"
            >High Fantasy <br />
            <strong>20 Punkte</strong></custom-button
          >
          <custom-button
            class="
              bg-card
              border border-card
              hover:bg-bg
              text-center
              md:w-1/2
              w-full
            "
            @click="setCampaignType('epic')"
            v-bind:class="{ active: sum.campaignType === 'epic' }"
            >Epic Fantasy <br />
            <strong>25 Punkte</strong></custom-button
          >
        </div>
      </div>
      <div class="pt-12">
        <p class="pb-6 text-center text-xl">Verteile die Attributspunkte</p>
        <p
          class="text-center text-2xl pb-6"
          v-bind:class="{ red: countSpent >= points.sum }"
        >
          Punkte: {{ countSpent }}/{{ points.sum }}
        </p>
        <div class="flex justify-center">
          <table class="w-full">
            <tr>
              <th>Attributswert</th>
              <th>Punkte</th>
              <th>Mod</th>
              <th>Kosten</th>
            </tr>
            <tr>
              <td class="text-xs md:text-base"><strong>Stärke</strong></td>
              <td>{{ sum.st }}</td>
              <td>{{ Math.floor((sum.st - 10) / 2) }}</td>
              <td>{{ sum.costs.st }}</td>
              <td>
                <custom-button
                  class="
                    bg-card
                    border border-card
                    hover:bg-bg
                    text-center
                    mr-2
                  "
                  @click="subSum('st')"
                  >-</custom-button
                >
                <custom-button
                  class="bg-card border border-card hover:bg-bg text-center"
                  @click="addSum('st')"
                  >+</custom-button
                >
              </td>
            </tr>
            <tr>
              <td class="text-xs md:text-base">
                <strong>Geschicklichkeit</strong>
              </td>
              <td>{{ sum.ge }}</td>
              <td>{{ Math.floor((sum.ge - 10) / 2) }}</td>
              <td>{{ sum.costs.ge }}</td>
              <td>
                <custom-button
                  class="
                    bg-card
                    border border-card
                    hover:bg-bg
                    text-center
                    mr-2
                  "
                  @click="subSum('ge')"
                  >-</custom-button
                >
                <custom-button
                  class="bg-card border border-card hover:bg-bg text-center"
                  @click="addSum('ge')"
                  >+</custom-button
                >
              </td>
            </tr>
            <tr>
              <td class="text-xs md:text-base">
                <strong>Konstitution</strong>
              </td>
              <td>{{ sum.kon }}</td>
              <td>{{ Math.floor((sum.kon - 10) / 2) }}</td>
              <td>{{ sum.costs.kon }}</td>
              <td>
                <custom-button
                  class="
                    bg-card
                    border border-card
                    hover:bg-bg
                    text-center
                    mr-2
                  "
                  @click="subSum('kon')"
                  >-</custom-button
                >
                <custom-button
                  class="bg-card border border-card hover:bg-bg text-center"
                  @click="addSum('kon')"
                  >+</custom-button
                >
              </td>
            </tr>
            <tr>
              <td class="text-xs md:text-base"><strong>Intelligenz</strong></td>
              <td>{{ sum.int }}</td>
              <td>{{ Math.floor((sum.int - 10) / 2) }}</td>
              <td>{{ sum.costs.int }}</td>
              <td>
                <custom-button
                  class="
                    bg-card
                    border border-card
                    hover:bg-bg
                    text-center
                    mr-2
                  "
                  @click="subSum('int')"
                  >-</custom-button
                >
                <custom-button
                  class="bg-card border border-card hover:bg-bg text-center"
                  @click="addSum('int')"
                  >+</custom-button
                >
              </td>
            </tr>
            <tr>
              <td class="text-xs md:text-base"><strong>Weisheit</strong></td>
              <td>{{ sum.wei }}</td>
              <td>{{ Math.floor((sum.wei - 10) / 2) }}</td>
              <td>{{ sum.costs.wei }}</td>
              <td>
                <custom-button
                  class="
                    bg-card
                    border border-card
                    hover:bg-bg
                    text-center
                    mr-2
                  "
                  @click="subSum('wei')"
                  >-</custom-button
                >
                <custom-button
                  class="bg-card border border-card hover:bg-bg text-center"
                  @click="addSum('wei')"
                  >+</custom-button
                >
              </td>
            </tr>
            <tr>
              <td class="text-xs md:text-base"><strong>Charisma</strong></td>
              <td>{{ sum.ch }}</td>
              <td>{{ Math.floor((sum.ch - 10) / 2) }}</td>
              <td>{{ sum.costs.ch }}</td>
              <td>
                <custom-button
                  class="
                    bg-card
                    border border-card
                    hover:bg-bg
                    text-center
                    mr-2
                  "
                  @click="subSum('ch')"
                  >-</custom-button
                >
                <custom-button
                  class="bg-card border border-card hover:bg-bg text-center"
                  @click="addSum('ch')"
                  >+</custom-button
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../CustomButton.vue";
import { mapGetters } from "vuex";

export default {
  components: { CustomButton },
  data: () => {
    return {
      points: {
        sum: 15,
      },
      sum: {
        campaignType: "standard",
        st: 10,
        ge: 10,
        kon: 10,
        int: 10,
        wei: 10,
        ch: 10,
        costs: {
          st: 0,
          ge: 0,
          kon: 0,
          int: 0,
          wei: 0,
          ch: 0,
        },
      },
    };
  },
  methods: {
    setCampaignType(value) {
      if (this.sum.campaignType === value) {
        this.sum.campaignType = "";
      } else {
        this.sum.campaignType = value;
      }
      this.setPointsToSpend();
      this.passAttributes();
    },
    setPointsToSpend() {
      if (this.sum.campaignType === "low") {
        this.points.sum = 10;
      } else if (this.sum.campaignType === "standard") {
        this.points.sum = 15;
      } else if (this.sum.campaignType === "high") {
        this.points.sum = 20;
      } else if (this.sum.campaignType === "epic") {
        this.points.sum = 25;
      }
    },
    addSum(key) {
      if (this.countSpent < this.points.sum) {
        if (this.sum[key] < 18) {
          if (this.sum[key] < 8) {
            this.sum.costs[key] += 2;
          } else if (this.sum[key] < 13) {
            this.sum.costs[key] += 1;
          } else if (this.sum[key] < 15) {
            this.sum.costs[key] += 2;
          } else if (this.sum[key] < 17) {
            this.sum.costs[key] += 3;
          } else if (this.sum[key] < 18) {
            this.sum.costs[key] += 4;
          }
          this.sum[key] += 1;
          this.passAttributes();
        }
      }
    },
    subSum(key) {
      if (this.sum[key] > 7) {
        if (this.sum[key] === 8) {
          this.sum.costs[key] -= 2;
        } else if (this.sum[key] <= 13) {
          this.sum.costs[key] -= 1;
        } else if (this.sum[key] <= 15) {
          this.sum.costs[key] -= 2;
        } else if (this.sum[key] <= 17) {
          this.sum.costs[key] -= 3;
        } else if (this.sum[key] <= 18) {
          this.sum.costs[key] -= 4;
        }
        this.sum[key] -= 1;
        this.passAttributes();
      }
    },

    passAttributes() {
      this.$emit("passAttributes", this.sum);
    },
  },
  computed: {
    countSpent() {
      let spent = 0;
      Object.values(this.sum.costs).forEach((val) => (spent += val));
      return spent;
    },
    ...mapGetters({
      charactertoolData: "charactertoolData",
    }),
  },
  mounted() {
    if (this.charactertoolData.attributes)
      this.sum = this.charactertoolData.attributes;
    this.setPointsToSpend();
  },
};
</script>

<style scoped>
.active {
  background: #2c3540;
  border: 5px inset #00000033;
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #00000020;
}
.red {
  color: #f28241;
}
th,
td {
  padding: 5px;
  text-align: left;
}
@media screen and (min-width: 768px) {
  th,
  td {
    padding: 15px;
    text-align: left;
  }
}
th {
  font-size: 0.6rem;
  padding-bottom: 0;
}
</style>
