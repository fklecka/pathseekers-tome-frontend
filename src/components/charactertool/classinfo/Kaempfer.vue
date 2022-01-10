<template>
  <div>
    <h2 class="text-2xl">Kämpfer</h2>
    <p class="py-6">
      Kämpfer sind, wie es der Name ja schon sagt, hervorragende Kämpfer –
      besiegen ihre Feinde, beherrschen die Schlacht und überleben so manch eine
      Widrigkeit. Auch anderen Leuten mögen durch ihre besonderen Waffen und
      Methoden vielfältige Taktiken zur Verfügung stehen, doch nur die wenigsten
      von ihnen kommen der Kampfkraft von Kämpfern gleich.
    </p>
    <div>
      <table>
        <tr>
          <td><strong>Trefferpunkte:</strong></td>
          <td>10 + Konstitution-Modifikator</td>
        </tr>
        <tr>
          <td><strong>Startgold:</strong></td>
          <td>175 GM</td>
        </tr>
        <tr>
          <td><strong>Gesinnung:</strong></td>
          <td>Jede</td>
        </tr>
      </table>
    </div>
    <div class="py-6">
      <h3 class="text-xl">Klassenfertigkeiten</h3>
      <hr />
      <p class="py-3">
        Beruf (WE), Einschüchtern (CH), Handwerk (IN), Klettern (ST), Mit Tieren
        umgehen (CH), Reiten (GE), Schwimmen (ST), Überlebenskunst (WE), Wissen
        (Baukunst) (IN), Wissen (Gewölbekunde) (IN).
      </p>
      <p>
        <strong>Fertigkeiten pro Stufe: </strong>2 + Intelligenz-Modifikator
      </p>
    </div>
    <div class="pb-6">
      <h3 class="text-xl">Klassenmerkmale</h3>
      <hr />
      <p class="py-3">
        <strong>Umgang mit Waffen und Rüstungen:</strong> Der Kämpfer ist im
        Umgang mit allen einfachen Waffen und Kriegswaffen sowie mit allen
        Rüstungen und mit allen Schilden (inklusive Turmschilden) geübt.
      </p>
      <p>
        <strong>Bonustalent:</strong> Auf der 1. Stufe und dann auf jeder
        geraden Stufe erhält der Kämpfer ein Bonustalent, zusätzlich zu denen,
        die er ohnehin durch den Stufenaufstieg erhält. (So bekommt der Kämpfer
        jede Stufe ein Talent.) Diese Talente müssen aus einer Liste von
        Kampftalenten ausgewählt werden, die manchmal auch als „Bonustalente für
        Kämpfer“ bezeichnet werden.
      </p>
    </div>
    <div>
      <h3 class="text-xl">Bevorzugte Klasse</h3>
      <hr />
      <bevorzugte-klasse @setAndPassBonus="getAndPassFavoredBonus($event)" />
    </div>
  </div>
</template>

<script>
import BevorzugteKlasse from "../BevorzugteKlasse.vue";
export default {
  components: { BevorzugteKlasse },
  data: () => {
    return {
      favoredBonus: "",
    };
  },
  methods: {
    getAndPassFavoredBonus(bonus) {
      this.favoredBonus = bonus;
      this.$emit("passFavoredBonus", this.favoredBonus);
    },
  },
};
</script>

<style scoped>
tr,
td {
  padding-right: 15px;
}
</style>
