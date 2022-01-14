<template>
  <div
    class="
      w-full
      bg-white bg-opacity-5
      overflow-y-scroll
      text-font
      p-6
      mb-6
      inputhighlight
    "
  >
    <h2 class="font-headline text-4xl text-center">Zusammenfassung</h2>
    <div class="flex flex-col md:flex-row items-center gap-12 pt-12">
      <div class="md:w-2/4 w-full">
        <div>
          <div class="flex justify-between">
            <p>Name:</p>
            <p>{{ character.name }}</p>
          </div>
          <div class="flex justify-between">
            <p>Geschlecht:</p>
            <p>{{ character.gender }}</p>
          </div>
          <div class="flex justify-between">
            <p>Volk:</p>
            <p>{{ character.race }}</p>
          </div>
          <div class="flex justify-between">
            <p>Klasse:</p>
            <p>{{ character.classAttributes.classname }}</p>
          </div>
        </div>
        <div class="pt-6">
          <h3 class="text-2xl">Attributswerte</h3>
          <hr class="mb-3" />
          <div class="flex justify-between">
            <p>Stärke:</p>
            <p>
              {{
                character.attributes.st +
                character.attributes.raceBonusAttributes.st
              }}
              ({{ calcStMod }})
            </p>
          </div>
          <div class="flex justify-between">
            <p>Geschicklichkeit:</p>
            <p>
              {{
                character.attributes.ge +
                character.attributes.raceBonusAttributes.ge
              }}
              ({{ calcGeMod }})
            </p>
          </div>
          <div class="flex justify-between">
            <p>Konstitution:</p>
            <p>
              {{
                character.attributes.kon +
                character.attributes.raceBonusAttributes.kon
              }}
              ({{ calcKonMod }})
            </p>
          </div>
          <div class="flex justify-between">
            <p>Intelligenz:</p>
            <p>
              {{
                character.attributes.int +
                character.attributes.raceBonusAttributes.int
              }}
              ({{ calcIntMod }})
            </p>
          </div>
          <div class="flex justify-between">
            <p>Weisheit:</p>
            <p>
              {{
                character.attributes.wei +
                character.attributes.raceBonusAttributes.wei
              }}
              ({{ calcWeiMod }})
            </p>
          </div>
          <div class="flex justify-between">
            <p>Charisma:</p>
            <p>
              {{
                character.attributes.ch +
                character.attributes.raceBonusAttributes.ch
              }}
              ({{ calcChaMod }})
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-2/4 w-full">
        <h3 class="text-2xl">Erworbene Fähigkeiten</h3>
        <hr class="mb-3" />
        <ul class="pb-6">
          <li v-for="(skill, key) in this.character.skills" :key="skill.id">
            <p>{{ key }}: {{ skill }}</p>
          </li>
        </ul>
        <h3 class="text-2xl">Erworbene Talente</h3>
        <hr class="mb-3" />
        <ul class="pb-6">
          <li v-for="talent in this.character.talents" :key="talent.id">
            <p>{{ talent }}</p>
          </li>
        </ul>
        <h3 class="text-2xl">Erworbene Ausrüstung</h3>
        <hr class="mb-3" />
        <ul class="pb-6">
          <li
            v-for="item in this.character.items.weapons"
            :key="item.id"
            class="list-none"
          >
            <p v-if="item.waffe">{{ item.waffe }}</p>
          </li>
          <li
            v-for="item in this.character.items.armor"
            :key="item.id"
            class="list-none"
          >
            <p v-if="item.rüstung">{{ item.rüstung }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
  computed: {
    calcStMod() {
      return Math.floor(
        (this.character.attributes.st +
          this.character.attributes.raceBonusAttributes.st -
          10) /
          2
      );
    },
    calcGeMod() {
      return Math.floor(
        (this.character.attributes.ge +
          this.character.attributes.raceBonusAttributes.ge -
          10) /
          2
      );
    },
    calcKonMod() {
      return Math.floor(
        (this.character.attributes.kon +
          this.character.attributes.raceBonusAttributes.kon -
          10) /
          2
      );
    },
    calcIntMod() {
      return Math.floor(
        (this.character.attributes.int +
          this.character.attributes.raceBonusAttributes.int -
          10) /
          2
      );
    },
    calcWeiMod() {
      return Math.floor(
        (this.character.attributes.wei +
          this.character.attributes.raceBonusAttributes.wei -
          10) /
          2
      );
    },
    calcChaMod() {
      return Math.floor(
        (this.character.attributes.ch +
          this.character.attributes.raceBonusAttributes.ch -
          10) /
          2
      );
    },
  },
};
</script>

<style scoped>
hr {
  border: 1px inset #a7a7a7;
}
</style>
