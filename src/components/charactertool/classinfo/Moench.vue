<template>
  <div>
    <h2 class="text-2xl">Mönch</h2>
    <p class="py-6">
      Mönche sind höchst beweglich und können selbst die größten Gefahren
      überwinden. Sie schlagen zu, wo man es am Wenigsten erwartet und wissen
      die Schwächen ihrer Feinde zu nutzen. Mönche sind flinke und gewandte
      Kämpfer und finden sich problemlos auf jedem Schlachtfeld zurecht, wo sie
      ihren Verbündeten stets zur Seite stehen.
    </p>
    <div>
      <table>
        <tr>
          <td><strong>Trefferpunkte:</strong></td>
          <td>8 + Konstitution-Modifikator</td>
        </tr>
        <tr>
          <td><strong>Startgold:</strong></td>
          <td>35 GM</td>
        </tr>
        <tr>
          <td><strong>Gesinnung:</strong></td>
          <td>Jede rechtschaffene</td>
        </tr>
      </table>
    </div>
    <div class="py-6">
      <h3 class="text-xl">Klassenfertigkeiten</h3>
      <hr />
      <p class="py-3">
        Akrobatik (GE), Auftreten (CH), Beruf (WE), Einschüchtern (CH),
        Entfesselungskunst (GE), Handwerk (IN), Heimlichkeit (GE), Klettern
        (ST), Motiv erkennen (WE), Reiten (GE), Schwimmen (ST), Wahrnehmung
        (WE), Wissen (Geschichte) (IN), Wissen (Religion) (IN)
      </p>
      <p>
        <strong>Fertigkeiten pro Stufe: </strong>4 + Intelligenz-Modifikator
      </p>
    </div>
    <div class="pb-6">
      <h3 class="text-xl">Klassenmerkmale</h3>
      <hr />
      <p class="py-3">
        <strong>Umgang mit Waffen und Rüstungen:</strong> Der Mönch ist im
        Umgang mit Armbrüsten (leicht oder schwer), Beilen, Dolchen, Kamas,
        Kampfstäben, Keulen, Kurzspeeren, Kurzschwertern, Nunchakus, Sais,
        Schleudern, Shuriken, Sianghams, Speeren und Wurfspeeren geübt. Er ist
        mit keinerlei Rüstungen oder Schilden vertraut. Sollte der Mönch Rüstung
        tragen, ein Schild benutzen oder mit mehr als einer leichten Traglast
        belastet sein, verliert er seinen Rüstungsklassenbonus, seine Schnelle
        Bewegung und den Schlaghagel.
      </p>
      <p>
        <strong>Rüstungsklassenbonus (AF):</strong> Wenn der Mönch nicht
        gerüstet oder belastet ist, kann er seinen Weisheitsbonus (wenn er einen
        hat) zu seiner Rüstungsklasse und seiner Kampfmanöververteidigung
        addieren. Zusätzlich erhält er auf der 4. Stufe einen RK- und KMV-Bonus
        von +1. Dieser Bonus erhöht sich alle weiteren vier Stufen um eins, bis
        zu einem Maximum von +5 auf der 20. Stufe. Dieser Bonus hilft dem Mönch
        auch gegen Berührungsangriffe und wenn er auf dem falschen Fuß erwischt
        wird. Er verliert den Bonus jedoch, wenn er bewegungsunfähig ist, wenn
        er hilflos ist, wenn er eine Rüstung trägt, wenn er einen Schild
        einsetzt, oder wenn er eine mittlere oder schwere Last trägt.
      </p>
      <p class="py-3">
        <strong>Schlaghagel (AF):</strong> Ab der 1. Stufe kann ein Mönch mit
        einer Vollen Aktion einen Schlaghagel austeilen. Wenn er dies möchte,
        erhält er einen zusätzlichen Angriff mit einem Malus von -2 auf alle
        Angriffswürfe, als würde er das Talent Kampf mit zwei Waffen einsetzen.
        Diese Angriffe können jede beliebige Kombination aus Unbewaffneten
        Angriffen oder Angriffen mit einer speziellen Mönchswaffe (Kama,
        Kampfstab, Nunchaku, Sai, Siangham und Shuriken) nehmen kann, als würde
        er das Talent Kampf mit zwei Waffen einsetzen (unabhängig davon, ob er
        die Voraussetzungen dafür erfüllt oder nicht). Für den Zweck dieses
        Angriffes entspricht der Grund-Angriffsbonus des Mönchs seiner
        Klassenstufe. Für alle anderen Einsatzmöglichkeiten verwendet der Mönch
        seinen normalen Grund-Angriffsbonus.
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
