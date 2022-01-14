<template>
  <div>
    <h2 class="text-2xl">Halb-Elfen</h2>
    <p class="py-6">
      Elfen haben schon immer die begehrlichen Blicke der anderen Völker auf
      sich gezogen. Ihre lange Lebensdauer, ihre Affinität zur Magie und ihre
      angeborene Eleganz haben ihnen sowohl die Bewunderung als auch den Neid
      ihrer Nachbarn eingebracht. Doch keine ihrer Eigenschaften hat die
      Menschen mehr fasziniert als ihre unergründliche Schönheit. Seit die
      beiden Völker sich zum ersten Mal begegnet sind, halten die Menschen die
      Elfen für den Inbegriff körperlicher Schönheit und sehen in ihnen eine
      idealisierte Version ihrer selbst. Die Elfen wiederum sind von den
      Menschen fasziniert, weil sie deren ungestüme und impulsive Art - trotz
      ihrer Neigung zur Barbarei und Grobheit - ziemlich erfrischend finden.
    </p>
    <h3 class="text-xl py-6">Volksmerkmale</h3>
    <p class="pb-6">
      <strong>+2 auf einen Attributswert:</strong> Um ihren verschiedenartigen
      Naturen gerecht zu werden, erhalten halb-elfische Charaktere bei ihrer
      Erschaffung einen Bonus von +2 auf einen Attributswert ihrer Wahl.
    </p>
    <bonus-attribute @setAndPassAttribute="getAndPassBonusAttributes($event)" />
    <p class="pb-6">
      <strong>Mittelgroß:</strong> Halb-Elfen sind mittelgroße Kreaturen und
      erhalten keinerlei Bonus oder Malus aufgrund ihrer Größe.
    </p>
    <p class="pb-6">
      <strong>Normale Bewegungsrate:</strong> Halb-Elfen haben eine
      Grundbewegungsrate von 9 m.
    </p>
    <p class="pb-6">
      <strong>Dämmersicht:</strong> Halb-Elfen können bei schlechter Beleuchtung
      doppelt so weit sehen wie Menschen.
    </p>
    <p class="pb-6">
      <strong>Geschärfte Sinne:</strong> Halb-Elfen erhalten einen Volksbonus
      von +2 auf Fertigkeitswürfe für Wahrnehmung.
    </p>
    <p class="pb-6">
      <strong>Elfische Immunität: </strong>Halb-Elfen sind immun gegen magische
      Schlaf-Effekte und erhalten einen Volksbonus von +2 auf Rettungswürfe
      gegen Zauber oder magische Effekte aus der Schule der Verzauberung.
    </p>
    <p class="pb-6">
      <strong>Anpassungsfähig:</strong> Als Bonustalent erhalten Halb-Elfen auf
      der 1. Stufe das Talent Fertigkeitsfokus.
    </p>
    <p class="pb-6">
      <strong>Elfenblut:</strong> Für jeden auf das Volk bezogenen Effekt werden
      Halb-Elfen sowohl als Elfen als auch als Menschen behandelt.
    </p>
    <p class="pb-6">
      <strong>Multitalente:</strong> Halb-Elfen dürfen sich auf der 1. Stufe
      zwei bevorzugte Klassen aussuchen und erhalten entweder +1 Trefferpunkte
      oder +1 Fertigkeitspunkte, wenn sie in einer dieser Klassen eine Stufe
      aufsteigen.
    </p>
    <p class="pb-6">
      <strong>Sprachen:</strong> Zu Spielbeginn sprechen Halb-Elfen die
      Gemeinsprache und Elfisch. Halb-Elfen mit hohen Intelligenzwerten können
      jede andere Sprache zusätzlich auswählen (mit Ausnahme geheimer Sprachen
      wie Druidisch).
    </p>
  </div>
</template>

<script>
import BonusAttribute from "../BonusAttribute.vue";
export default {
  components: { BonusAttribute },
  data: () => {
    return {
      bonusAttributes: {
        st: 0,
        ge: 0,
        kon: 0,
        int: 0,
        wei: 0,
        ch: 0,
      },
    };
  },
  methods: {
    getAndPassBonusAttributes(attributes) {
      this.bonusAttributes = attributes;
      this.$emit("passBonusAttributes", this.bonusAttributes);
    },
  },
};
</script>

<style scoped>
.active {
  background: #2c3540;
}
</style>
