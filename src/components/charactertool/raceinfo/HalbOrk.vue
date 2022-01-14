<template>
  <div>
    <h2 class="text-2xl">Halb-Orks</h2>
    <p class="py-6">
      Halb-Orks sind Monster und die bedauerliche Konsequenz von Perversion und
      Gewalt - so zumindest werden sie von den anderen Völkern gesehen. Es
      stimmt, dass nur die wenigsten Halb-Orks das Ergebnis einer liebevollen
      Beziehung sind. Dementsprechend haben sie eine harte Kindheit in der sie
      schnell erwachsen werden müssen und in der sie stets um Schutz und
      Anerkennung kämpfen. Halb-Orks sind gefürchtet, man misstraut ihnen und
      verachtet sie und dennoch gelingt es ihnen immer wieder, ihre Gegner mit
      großen Taten und unerwarteter Weisheit zu überraschen - auch wenn es
      manchmal leichter ist, einfach nur ein paar Schädel einzuschlagen.
    </p>
    <h3 class="text-xl py-6">Volksmerkmale</h3>
    <p class="pb-6">
      <strong>+2 auf einen Attributswert:</strong> Halb-Orks erhalten bei der
      Charaktererschaffung einen Bonus von +2 auf ein Attribut ihrer Wahl. Dies
      soll die Verschiedenartigkeit dieses Volkes hervorheben.
    </p>
    <bonus-attribute @setAndPassAttribute="getAndPassBonusAttributes($event)" />
    <p class="pb-6">
      <strong>Mittelgroß:</strong> Halb-Orks sind mittelgroße Kreaturen und
      erhalten keinerlei Bonus oder Malus aufgrund ihrer Größe.
    </p>
    <p class="pb-6">
      <strong>Normale Bewegungsrate:</strong> Halb-Orks haben eine
      Grundbewegungsrate von 9 m.
    </p>
    <p class="pb-6">
      <strong>Dunkelsicht:</strong> Halb-Orks können im Dunkeln bis zu 18 m weit
      sehen.
    </p>
    <p class="pb-6">
      <strong>Waffenvertrautheit:</strong> Halb-Orks sind geübt im Umgang mit
      dem Krummschwert und der Zweihändigen Axt und behandeln alle Waffen, die
      als „orkisch“ bezeichnet werden, als Kriegswaffen.
    </p>
    <p class="pb-6">
      <strong>Orkische Wildheit:</strong> Ein Mal pro Tag, wenn ein Halb-Ork auf
      weniger als 0 Trefferpunkte reduziert wurde, ohne dabei zu Tode zu kommen,
      kann er für eine Runde weiterkämpfen, als ob er nur kampfunfähig wäre.
      Sollte er dann nicht wieder auf über 0 Trefferpunkte gebracht worden sein,
      so wird er am Ende seines nächsten Zuges sofort bewusstlos und beginnt zu
      sterben.
    </p>
    <p class="pb-6">
      <strong>Orkblut:</strong> Für jeden auf das Volk bezogenen Effekt werden
      Halb-Orks sowohl als Orks als auch als Menschen behandelt.
    </p>
    <p class="pb-6">
      <strong>Einschüchternd: </strong>Halb-Orks erhalten einen Volksbonus von
      +2 auf Würfe für Einschüchtern, da sie eben einen furchterregenden
      Eindruck machen.
    </p>
    <p class="pb-6">
      <strong>Sprachen:</strong> Zu Spielbeginn sprechen Halb-Orks die
      Gemeinsprache und Orkisch. Halb-Orks mit hohen Intelligenzwerten können
      sich noch weitere aus den folgenden Sprachen aussuchen: Drakonisch,
      Riesisch, Gnollisch, Goblinisch und Abyssisch.
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
      console.log(this.bonusAttributes, "Mensch Component");
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
