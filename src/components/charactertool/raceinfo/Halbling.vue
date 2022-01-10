<template>
  <div>
    <h2 class="text-2xl">Halblinge</h2>
    <p class="py-6">
      Halblinge sind von Natur aus optimistisch und fröhlich. Sie haben ein
      schon fast unheimliches Glück und werden von einer starken Wanderlust
      angetrieben. Ihre geringe Größe machen sie mit einem Überschuss an Wagemut
      und Neugier wett. Halblinge sind zugleich schnell erregbar, aber auch
      gelassen. Sie haben ein ausgeglichenes Gemüt und stets ein Auge für die
      nächste Möglichkeit, die sich bieten könnte. Sie neigen viel weniger zu
      Gewalt- oder Wutausbrüchen als andere, jähzornigere Völker. Ja selbst in
      der größten Not verliert ein Halbling seinen Humor nicht.
    </p>
    <h3 class="text-xl py-6">Volksmerkmale</h3>
    <p class="pb-6">
      <strong>+2 Geschicklichkeit, +2 Charisma, – 2 Stärke:</strong> Halblinge
      sind gewandt und willensstark, aber ihre kleine Statur macht sie schwächer
      als andere Völker.
    </p>
    <p class="pb-6">
      <strong>Klein:</strong> Halblinge sind kleine Kreaturen, so dass sie einen
      Größenbonus von +1 auf ihre RK, einen Größenbonus von +1 auf Angriffswürfe
      und einen Größenbonus von +4 auf Fertigkeitswürfe für Heimlichkeit
      erhalten. Allerdings erhalten sie einen Malus von-1 auf ihren KMB und ihre
      KMV.
    </p>
    <p class="pb-6">
      <strong>Geringe Bewegungsrate:</strong> Halblinge haben eine
      Grundbewegungsrate von 6 m.
    </p>
    <p class="pb-6">
      <strong>Geschärfte Sinne:</strong> Halblinge erhalten einen Volksbonus von
      +2 auf Fertigkeitswürfe für Wahrnehmung.
    </p>
    <p class="pb-6">
      <strong>Wendig:</strong> Halblinge erhalten einen Volksbonus von +2 auf
      Fertigkeitswürfe für Akrobatik und Klettern.
    </p>
    <p class="pb-6">
      <strong>Halblingsglück:</strong> Halblinge erhalten eine Volksbonus von +1
      auf alle Rettungswürfe.
    </p>
    <p class="pb-6">
      <strong>Furchtlos:</strong> Halblinge erhalten einen Volksbonus von +2 auf
      alle Rettungswürfe gegen Furcht. Dieser Bonus addiert sich mit dem Bonus
      für Halblingsglück.
    </p>
    <p class="pb-6">
      <strong>Waffenvertrautheit:</strong> Halblinge sind geübt im Umgang mit
      Schleudern und behandeln alle Waffen, die das Wort „Halbling“ im Namen
      tragen, als Kriegswaffen.
    </p>
    <p class="pb-6">
      <strong>Sprachen:</strong> Zu Spielbeginn sprechen Halblinge die
      Gemeinsprache und Halblingisch. Halblinge mit hohen Intelligenzwerten
      können sich noch weitere aus den folgenden Sprachen aussuchen: Elfisch,
      Gnomisch, Goblinisch und Zwergisch.
    </p>
    <custom-button />
  </div>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      attribute: "",
    };
  },
};
</script>

<style scoped>
.active {
  background: #2c3540;
}
</style>
