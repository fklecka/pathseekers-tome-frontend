<template>
  <div>
    <h2 class="text-2xl">Schurke</h2>
    <p class="py-6">
      Schurken vermeiden es wenn möglich, sich direkt ins Kampfgetümmel zu
      stürzen. Sie sind viel besser darin, sich ungesehen zu bewegen und ihre
      Feinde zu überraschen. Ihre vielen verschiedenen Fähigkeiten ermöglichen
      es ihnen, extrem wandelbar zu sein. Und so kennen unterschiedliche
      Schurken sich mit den unterschiedlichsten Dingen aus. Die meisten jedoch
      wissen ganz genau, wie sie Hindernisse aller Art umgehen können –
      angefangen bei Schlössern, die geknackt, über Fallen, die entschärft, bis
      zu magischen Gefahren, die überwunden, und Gegnern, die überlistet werden
      müssen.
    </p>
    <div>
      <table>
        <tr>
          <td><strong>Trefferpunkte:</strong></td>
          <td>8 + Konstitution-Modifikator</td>
        </tr>
        <tr>
          <td><strong>Startgold:</strong></td>
          <td>140 GM</td>
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
        Akrobatik (GE), Auftreten (CH), Beruf (WE), Bluffen (CH), Diplomatie
        (CH), Einschüchtern (CH), Entfesselungskunst (GE), Fingerfertigkeit
        (GE), Handwerk (IN), Heimlichkeit (GE), Klettern (ST), Magischen
        Gegenstand benutzen (CH), Mechanismus ausschalten (GE), Motiv erkennen
        (WE), Schätzen (IN), Schwimmen (ST), Sprachenkunde (IN), Verkleiden
        (CH), Wahrnehmung (WE), Wissen (Gewölbekunde) (IN), Wissen (Lokales)
        (IN)
      </p>
      <p>
        <strong>Fertigkeiten pro Stufe: </strong>8 + Intelligenz-Modifikator
      </p>
    </div>
    <div class="pb-6">
      <h3 class="text-xl">Klassenmerkmale</h3>
      <hr />
      <p class="py-3">
        <strong>Umgang mit Waffen und Rüstungen:</strong> Der Schurke ist im
        Umgang mit allen einfachen Waffen, der Handarmbrust, dem Rapier, dem
        Totschläger, dem Kurzbogen und dem Kurzschwert geübt. Der Schurke ist im
        Umgang mit leichten Rüstungen, nicht aber im Umgang mit Schilden, geübt.
      </p>
      <p>
        <strong>Hinterhältiger Angriff:</strong> Wenn der Schurke einen Gegner
        angreift, der sich nicht effektiv verteidigen kann, kann er mit einen
        gezielten Angriff auf eine Schwachstelle mehr Schaden verursachen.
      </p>
      <p class="py-3">
        Die Angriffe des Schurken richten immer dann zusätzlichen Schaden an,
        wenn der Gegner seinen Geschicklichkeitsbonus auf die Rüstungsklasse
        verliert (unabhängig davon, ob er einen GE-Bonus hat) oder wenn der
        Schurke seinen Gegner in die Zange nimmt. Auf der 1. Stufe verursacht er
        1W6 Punkte zusätzlichen Schaden. Für jeweils zwei weitere Stufen als
        Schurke erhöht sich der Schaden um 1W6. Sollte der Schurke einen
        kritischen Treffer erzielen, wird der zusätzliche Schaden nicht
        multipliziert. Fernkampfangriffe zählen nur dann als Hinterhältige
        Angriffe, wenn das Ziel maximal 9 m von dem Schurken entfernt ist.
      </p>
      <p>
        Mit einer Waffe, die nicht-tödlichen Schaden verursacht (wie z.B. ein
        Totschläger oder ein waffenloser Schlag), kann der Schurke einen Hinter
        hältigen Angriff ausführen, der nicht-tödlichen Schaden anstelle von
        tödlichem Schaden verursacht. Mit einer Waffe, die tödlichen Schaden
        verursacht, ist dies nicht möglich, selbst wenn er den üblichen Malus
        von – 4 hinnimmt.
      </p>
      <p class="py-3">
        Um einen Hinterhältigen Angriff auszuführen, muss der Schurke sein Ziel
        genau sehen können, um Schwachstellen auszumachen, und in der Lage sein,
        diese zu erreichen. Er kann keine Hinterhältigen Angriffe ausführen,
        wenn sein Ziel von Tarnung profitiert.
      </p>
      <p>
        <strong>Fallen finden:</strong> Ein Schurke addiert seine halbe
        Schurkenstufe zu seinen Fertigkeitswürfen in Wahrnehmung, um Fallen zu
        finden, und in Mechanismus ausschalten (Minimum +1). Ein Schurke kann
        die Fertigkeit Mechanismus ausschalten benutzen, um magische Fallen zu
        entschärfen.
      </p>
      <div class="pt-6">
        <h3 class="text-xl">Bevorzugte Klasse</h3>
        <hr />
        <bevorzugte-klasse @setAndPassBonus="getAndPassFavoredBonus($event)" />
      </div>
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
