<template>
  <div>
    <h2 class="text-2xl">Paladin</h2>
    <p class="py-6">
      Paladine dienen ihren Verbündeten als Leuchtfeuer im Chaos der Schlacht.
      Sie können tödliche Widersacher des Bösen sein, aber auch guten Seelen die
      Macht verleihen, ihnen in ihren Kreuzzügen zu helfen. Ihre magischen und
      kriegerischen Fähigkeiten machen sie aber auch zu geeigneten Verteidigern
      und wer fällt, dem verleihen sie die Kraft, wieder aufzustehen und weiter
      zu kämpfen.
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
          <td>Rechtschaffen Gut</td>
        </tr>
      </table>
    </div>
    <div class="py-6">
      <h3 class="text-xl">Klassenfertigkeiten</h3>
      <hr />
      <p class="py-3">
        Beruf (WE), Diplomatie (CH), Handwerk (IN), Heilkunde (WE), Mit Tieren
        umgehen (CH), Motiv erkennen (WE), Reiten (GE), Wissen (Adel) (IN),
        Wissen (Religion) (IN), Zauberkunde (IN)
      </p>
      <p>
        <strong>Fertigkeiten pro Stufe: </strong>2 + Intelligenz-Modifikator
      </p>
    </div>
    <div class="pb-6">
      <h3 class="text-xl">Klassenmerkmale</h3>
      <hr />
      <p class="py-3">
        <strong>Umgang mit Waffen und Rüstungen:</strong> Der Paladin ist im
        Umgang mit allen einfachen Waffen und Kriegswaffen sowie mit allen
        Rüstungen und mit allen Schilden (außer mit Turmschilden) geübt.
      </p>
      <p>
        <strong>Aura des Guten (AF):</strong> Die Macht der Aura des Guten
        (siehe den Zauber Gutes entdecken) des Paladins entspricht seiner Stufe
        in dieser Klasse.
      </p>
      <p class="py-3">
        <strong>Böses entdecken (ZF):</strong> Ein Paladin kann diese Fähigkeit
        nach Belieben wie den Zauber Böses entdecken nutzen. Er kann sich im
        Rahmen einer Bewegungsaktion auf einen einzelnen Gegenstand oder ein
        Individuum innerhalb von 18 m konzentrieren und damit herausfinden, ob
        das Ziel böse ist und die Stärke seiner Aura erkennen, als hätte er das
        Ziel 3 Runden lang studiert. Während er sich auf ein Ziel konzentriert,
        kann der Paladin nicht die böse Gesinnung in anderen Wesen oder Objekten
        entdecken.
      </p>
      <p>
        <strong>Böses niederstrecken (ÜF):</strong> Ein Mal pro Tag kann der
        Paladin die Mächte des Guten anrufen, um ihm in seinem Kampf gegen das
        Böse zur Seite zu stehen. Als Schnelle Aktion wählt er ein sichtbares
        Ziel zum Niederstrecken aus. Wenn das Ziel von böser Gesinnung ist, dann
        addiert er seinen CH-Bonus (wenn er einen hat) zu allen Angriffswürfen
        hinzu und addiert seine Paladinstufe zum Schaden, die er seinem Ziel
        durch Böses niederstrecken zufügt. Ist das Ziel der Fähigkeit Böses
        niederstrecken gar ein Externar der Unterkategorie böse, ein böse
        gesinnter Drache oder ein Untoter, erhöht sich der Bonusschaden auf den
        ersten erfolgreichen Angriff auf 2 Punkte je Paladinstufe. Unabhängig
        vom Ziel umgehen Angriffe zum Niederstrecken eines bösen Ziels jedwede
        Schadensreduzierung, die die Kreatur haben mag.
      </p>
      <p class="py-3">
        Außerdem erhält der Paladin einen Ablenkungsbonus in Höhe seines
        CH-Bonus (wenn er einen hat) zu seiner Rüstungsklasse gegen Angriffe,
        die das Ziel seines Niederstreckens macht. Sollte der Paladin einen
        Gegner als Ziel aussuchen, der nicht böse ist, verpufft das
        Niederstrecken ohne jegliche Wirkung.
      </p>
      <p>
        Die Effekte des Niederstreckens bleiben so lange aktiv, bis das Ziel tot
        ist oder bis der Paladin eine ausgiebige Rast einlegt und die Fähigkeit
        zum Niederstrecken von Bösem wieder erlangt. Auf der 4. Stufe und dann
        alle drei weiteren Stufen kann der Paladin die Fähigkeit ein weiteres
        Mal pro Tag bis zu einem Maximum von sieben Mal täglich auf der 19.
        Stufe einsetzen, wie es in der Tabelle angegeben ist.
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
