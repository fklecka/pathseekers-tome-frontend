<template>
  <div>
    <h2 class="text-2xl">Zwerge</h2>
    <p class="py-6">
      Die Zwerge sind ein stoisches und ernstes Volk, das sich in seine
      Bergstädte zurückgezogen hat und fest entschlossen ist, sich den
      Plünderungen der wilden Völker, wie etwa Orks und Goblins, zu erwehren.
      Mehr als alle anderen haben die Zwerge sich den Ruf verdient, mürrische
      und humorlose Bergarbeiter zu sein. Man kann wohl davon ausgehen, dass es
      ihre Geschichte ist, die für ihr düsteres Gemüt verantwortlich ist. Sie
      leben in den hohen Bergen und in den gefährlichen Reichen, die unter der
      Erde liegen, und bekriegen sich ohne Unterlass mit Riesen, Goblins und
      anderen Schrecken.
    </p>
    <h3 class="text-xl py-6">Volksmerkmale</h3>
    <p class="pb-6">
      <strong>+2 Konstitution, +2 Weisheit, – 2 Charisma: </strong>Zwerge sind
      ebenso zäh wie weise, allerdings etwas schroff im Umgang mit anderen.
    </p>
    <p class="pb-6">
      <strong>Mittelgroß:</strong> Zwerge sind mittelgroße Kreaturen und
      erhalten keinerlei Bonus oder Malus aufgrund ihrer Größe.
    </p>
    <p class="pb-6">
      <strong>Ruhig und sicher:</strong> Zwerge haben eine Grundbewegungsrate
      von 6 m, aber ihre Bewegungsrate wird nie durch Belastung oder Rüstung
      verändert.
    </p>
    <p class="pb-6">
      <strong>Dunkelsicht:</strong> Zwerge können im Dunkeln bis zu 18 m weit
      sehen.
    </p>
    <p class="pb-6">
      <strong>Steingespür:</strong> Zwerge erhalten einen Bonus von +2 auf
      Fertigkeitswürfe für Wahrnehmung, um ungewöhnliches Stein- oder Mauerwerk
      zu bemerken – wie etwa Fallen oder Geheimtüren, die sich in steinernen
      Wänden oder Böden befinden. Sie dürfen einen Fertigkeitswurf machen, um
      solche Eigenarten zu bemerken, wann immer sie diese innerhalb von 3 m
      Entfernung passieren, unabhängig davon, ob sie bewusst danach suchen oder
      nicht.
    </p>
    <p class="pb-6">
      <strong>Gier:</strong> Zwerge erhalten einen Volksbonus von +2 auf Würfe
      für Schätzen, um den Preis nicht-magischer Güter zu ermitteln, die
      wertvolle Metalle oder Edelsteine beinhalten.
    </p>
    <p class="pb-6">
      <strong>Abgehärtet:</strong> Zwerge erhalten einen Volksbonus von +2 für
      Rettungswürfe gegen Gifte, Zauber und Zauberähnliche Fähigkeiten.
    </p>
    <p class="pb-6">
      <strong>Waffenvertrautheit:</strong> Zwerge sind geübt im Umgang mit
      Streitäxten, schweren Streithämmern und Kriegshämmern, und sie behandeln
      jede Waffe, die als „zwergisch“ bezeichnet wird, als eine Kriegswaffe.
    </p>
    <p class="pb-6">
      <strong>Hass:</strong> Aufgrund einer speziellen Ausbildung erhalten
      Zwerge einen Bonus von +1 auf Angriffswürfe gegen humanoide Kreaturen,
      welche der Ork- oder Goblin-Unterart angehören.
    </p>
    <p class="pb-6">
      <strong>Verteidigungsschulung:</strong> Gegen Angriffe von Monstern der
      Unterart Riese erhalten Zwerge einen Ausweichbonus von +4 auf ihre RK.
    </p>
    <p class="pb-6">
      <strong>Standfestigkeit:</strong> Zwerge erhalten einen Volksbonus von +4
      auf ihre Kampfmanöververteidigung, wenn sie einem Ansturm oder einem
      Versuch widerstehen wollen, sie zu Fall zu bringen, wenn sie auf einem
      festen Untergrund stehen.
    </p>
    <p class="pb-6">
      <strong>Sprachen:</strong> Zu Spielbeginn sprechen Zwerge die
      Gemeinsprache und Zwergisch. Zwerge mit hohen Intelligenzwerten können
      sich noch weitere aus den folgenden Sprachen aussuchen: Riesisch,
      Gnomisch, Goblinisch, Orkisch, Terral und Finsterländisch.
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
