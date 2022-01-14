<template>
  <div>
    <h2 class="text-2xl">Menschen</h2>
    <p class="py-6">
      Menschen besitzen einen außergewöhnlichen Tatendrang und den ausgeprägten
      Willen, sich auszubreiten und so manches auszuhalten. Aus diesem Grund
      sind sie das vorherrschende Volk der Welt. Ihre Imperien und Nationen sind
      riesige, ausufernde Gebilde und die Bürger dieser Länder machen sich
      sowohl mit Waffenstärke als auch Zauberkraft einen Namen. Am besten
      charakterisiert man die Menschheit, wenn man sie als umtriebig und
      vielfältig beschreibt. Die menschlichen Kulturen reichen von wilden, aber
      ehrenhaften Stämmen bis hin zu dekadenten, diabolistischen Adelsfamilien,
      die in den Metropolen der Welt leben. Neugier und Ehrgeiz triumphieren
      nicht selten über die Neigung zu einem sesshaften Leben und viele
      verlassen ihre Heimat, um die unzähligen vergessenen Winkel der Welt zu
      erkunden oder mächtige Armeen gegen ihre Nachbarn zu führen, einfach weil
      sie es können.
    </p>
    <h3 class="text-xl py-6">Volksmerkmale</h3>
    <p>
      <strong>+2 auf einen Attributswert:</strong> Um ihrer Natur gerecht zu
      werden, erhalten Menschen bei der Charaktererschaffung einen Bonus von +2
      auf einen Attributswert ihrer Wahl.
    </p>
    <bonus-attribute @setAndPassAttribute="getAndPassBonusAttributes($event)" />
    <p class="pb-6">
      <strong>Mittelgroß:</strong> Menschen sind mittelgroße Kreaturen und
      erhalten keinerlei Bonus oder Malus aufgrund ihrer Größe.
    </p>
    <p class="pb-6">
      <strong>Normale Bewegungsrate:</strong> Menschen haben eine
      Grundbewegungsrate von 9 m.
    </p>
    <p class="pb-6">
      <strong>Bonustalent:</strong> Menschen wählen ein zusätzliches Talent auf
      der 1. Stufe.
    </p>
    <p class="pb-6">
      <strong>Geschult:</strong> Menschen erhalten einen zusätzlichen
      Fertigkeitsrang auf der 1. Stufe und einen weiteren zusätzlichen
      Fertigkeitsrang bei jedem Stufenaufstieg.
    </p>
    <p class="pb-6">
      <strong>Sprachen:</strong> Zu Spielbeginn sprechen Menschen die
      Gemeinsprache. Menschen mit hohen Intelligenzwerten können jede andere
      Sprache zusätzlich auswählen (mit Ausnahme geheimer Sprachen wie
      Druidisch).
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
