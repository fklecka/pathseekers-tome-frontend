<template>
  <div class="bg-bg text-white">
    <top-nav class="px-3 lg:px-6" />
    <div class="w-full fixed pointer-events-none">
      <img
        src="../assets/drache.svg"
        alt=""
        class="pointer-events-none w-full"
      />
    </div>
    <div class="px-3 lg:px-6">
      <div class="pt-8 md:pt-16 pb-80 h-full">
        <div class="flex justify-center">
          <img src="../assets/tome_logo_white.svg" alt="" class="pb-16 w-512" />
        </div>
        <h1 class="text-4xl md:text-7xl text-center font-headline">
          Das digitale Toolset
        </h1>
        <h2 class="text-xl md:text-4xl text-center font-headline pt-4">
          Für Pathfinder First Edition
        </h2>
        <p class="pt-12 text-sm md:text-lg text-center">
          Erstelle und verwalte deine Charaktere schnell und einfach.
        </p>
        <p class="text-sm md:text-lg text-center">
          Oder schlage Zauber und Gegenstände nach.
        </p>

        <div class="flex justify-center">
          <router-link to="/characters"
            ><custom-button class="bg-orange mt-16 mb-6">
              Jetzt Account registrieren
            </custom-button></router-link
          >
        </div>
      </div>
      <div class="pb-64">
        <div class="flex flex-col lg:flex-row justify-center items-center">
          <div class="w-full lg:w-2/4 rounded-xl bg-bg flex-shrink-0">
            <img src="../assets/tutorial.png" alt="" class="object-cover" />
          </div>
          <div
            class="
              w-full
              lg:w-2/4
              flex-shrink-0
              lg:pl-6
              text-center
              lg:text-left
            "
          >
            <h2 class="font-headline text-5xl py-8">
              Erstelle deinen Charakter
            </h2>
            <p>
              Mit Pathseeker's Tome erstellt du ohne Vorkenntnisse zu Pathfinder
              First Edition schnell und einfach deinen Charakter.
            </p>
            <br />
            <p>
              Unser Tutorial führt dich Schritt für Schritt durch die
              Charaktererstellung damit du so schnell wie möglich in dein neues
              Abenteuer aufbrechen kannst.
            </p>
          </div>
        </div>
      </div>
      <div class="pb-64">
        <div
          class="flex flex-col-reverse lg:flex-row justify-center items-center"
        >
          <div
            class="
              w-full
              lg:w-2/4
              flex-shrink-0
              lg:pr-6
              text-center
              lg:text-left
            "
          >
            <h2 class="font-headline text-5xl py-8">Alles auf einem Blick</h2>
            <p>
              Die optimierte Benutzeroberfläche von Tome bietet dir alle
              wichtigen Informationen die du zum Spielen brauchst.
            </p>
            <br />
            <p>Konfiguriere deinen Charakterbogen wie es dir beliebt!</p>
          </div>
          <div class="w-full lg:w-2/4 rounded-xl bg-bg flex-shrink-0">
            <img src="../assets/sheet.png" alt="" class="object-cover" />
          </div>
        </div>
      </div>
      <div class="pb-64">
        <div class="flex flex-col lg:flex-row justify-center items-center">
          <div class="w-full lg:w-2/4 rounded-xl bg-bg flex-shrink-0">
            <img src="../assets/sheet.png" alt="" class="object-cover" />
          </div>
          <div
            class="
              w-full
              lg:w-2/4
              flex-shrink-0
              lg:pl-6
              text-center
              lg:text-left
            "
          >
            <h2 class="font-headline text-5xl py-8">Dein Kompendium</h2>
            <p>Tome beinhaltet alle Zauber und Fähigkeiten jeder Klasse.</p>
            <br />
            <p>
              Füge sie deinem Charakter hinzu und rufe sie über das
              Schnellauswahlmenü wieder auf.
            </p>
          </div>
        </div>
      </div>
      <div class="pb-64">
        <div
          class="flex flex-col-reverse lg:flex-row justify-center items-center"
        >
          <div
            class="
              w-full
              lg:w-2/4
              flex-shrink-0
              lg:pr-6
              text-center
              lg:text-left
            "
          >
            <h2 class="font-headline text-5xl py-8">
              Optimiert für alle Geräte
            </h2>
            <p>
              Ob auf dem PC, Laptop, Tablet oder Smartphone: Tome ist für alle
              Geräte optimiert und von überall verfügbar.
            </p>
            <br />
            <p>So bist du jederzeit bereit für dein Abenteuer.</p>
          </div>
          <div class="w-full lg:w-2/4 rounded-xl bg-bg flex-shrink-0">
            <img src="../assets/sheet.png" alt="" class="object-cover" />
          </div>
        </div>
      </div>
      <div class="text-center pb-64">
        <h2 class="font-headline text-5xl pb-8">
          Beginne jetzt dein neues Abenteuer!
        </h2>
        <p>Registriere dich jetzt und erstelle deinen neuen Charakter!</p>
        <router-link to="/characters"
          ><custom-button class="bg-orange mt-12 mb-6">
            Jetzt registrieren
          </custom-button></router-link
        >
        <p class="text-xs">
          Ohne Account hast du nur Zugriff auf das Kompendium. <br />
          Um einen Charakter zu erstellen benötigst du einen Account!
        </p>
      </div>
    </div>
    <div
      class="
        flex flex-col
        md:flex-row
        items-center
        justify-between
        px-6
        2xl:px-32
        border-t
        py-8
        border-opacity-50
      "
    >
      <img
        class="w-96 pb-8 md:pb-0"
        src="../assets/tome_logo_white.svg"
        alt="Tome Logo"
      />
      <div class="text-sm flex space-x-8">
        <ul class="space-y-3">
          <li class="opacity-50">Quicklinks</li>
          <li>
            <router-link to="/characters/new">Charakter erstellen</router-link>
          </li>
          <li><router-link to="/characters">Charaktere</router-link></li>
          <li><router-link to="/kompendium">Kompendium</router-link></li>
        </ul>
        <ul class="space-y-3">
          <li class="opacity-50">Legal</li>
          <li><router-link to="/imprint">Impressum</router-link></li>
          <li><router-link to="/privacy">Datenschutz</router-link></li>
          <li><router-link to="/cookies">Cookie Richtlinien</router-link></li>
        </ul>
        <ul class="space-y-3">
          <li class="opacity-50">Folge uns</li>
          <li><router-link to="">Facebook</router-link></li>
          <li><router-link to="">Twitter</router-link></li>
          <li><router-link to="">Instagram</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/nav/TopNav.vue";
import CustomButton from "../components/CustomButton.vue";
export default {
  components: { TopNav, CustomButton },
  methods: {},
};
</script>

<style></style>
