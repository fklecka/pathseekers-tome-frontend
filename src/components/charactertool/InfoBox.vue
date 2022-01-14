<template>
  <div class="w-72 h-full p-6 text-white bg-dark infobox">
    <div class="pb-3">
      <p class="text-3xl">{{ character.name }}</p>
      <div class="text-xl">
        <p>{{ character.race }} {{ character.classname }}</p>
      </div>
      <p>{{ character.gender }}</p>
    </div>
    <hr />
    <p>Attribute</p>
    <hr />
    <div class="flex justify-between pt-2">
      <p>
        STÄ:
        {{
          character.attributes.st + character.attributes.raceBonusAttributes.st
        }}
        ({{ calcStMod }})
      </p>
      <p>
        GES:
        {{
          character.attributes.ge + character.attributes.raceBonusAttributes.ge
        }}
        ({{ calcGeMod }})
      </p>
    </div>
    <div class="flex justify-between pt-2">
      <p>
        KON:
        {{
          character.attributes.kon +
          character.attributes.raceBonusAttributes.kon
        }}
        ({{ calcKonMod }})
      </p>
      <p>
        INT:
        {{
          character.attributes.int +
          character.attributes.raceBonusAttributes.int
        }}
        ({{ calcIntMod }})
      </p>
    </div>
    <div class="flex justify-between py-2">
      <p>
        WEI:
        {{
          character.attributes.wei +
          character.attributes.raceBonusAttributes.wei
        }}
        ({{ calcWeiMod }})
      </p>
      <p>
        CHA:
        {{
          character.attributes.ch + character.attributes.raceBonusAttributes.ch
        }}
        ({{ calcChaMod }})
      </p>
    </div>
    <hr />
    <p>Verteidigung</p>
    <hr />
    <div class="py-2">
      <p>
        TP:
        {{
          character.classAttributes.hp +
          character.classAttributes.bonusHp +
          calcKonMod
        }}
      </p>
      <div class="flex justify-between py-2">
        <p>
          RK:
          {{ 10 + calcGeMod + character.sizeMod }}
        </p>
        <p>
          BE:
          {{ 10 + calcGeMod + character.sizeMod }}
        </p>
        <p>ADFF: {{ 10 + character.sizeMod }}</p>
      </div>
      <div class="flex justify-between">
        <p>
          REF:
          {{ character.classAttributes.ref + calcGeMod }}
        </p>
        <p>
          WIL:
          {{ character.classAttributes.wil + calcWeiMod }}
        </p>
        <p>
          ZÄH:
          {{ character.classAttributes.zah + calcKonMod }}
        </p>
      </div>
    </div>
    <hr />
    <p>Angriff</p>
    <hr />
    <div class="py-2">
      <p>Bewegungsrate: {{ character.speed }}m</p>
      <p>GAB: {{ character.classAttributes.gab }}</p>
      <p>
        Nahkampf:
        {{ character.classAttributes.gab + calcStMod + character.sizeMod }}
      </p>
      <p>
        Fernkampf:
        {{ character.classAttributes.gab + calcGeMod + character.sizeMod }}
      </p>
      <p>
        KMB: {{ character.classAttributes.gab + calcStMod + character.sizeMod }}
      </p>
    </div>
    <hr />
    <p>Talente</p>
    <hr />
    <ul class="py-3">
      <li v-for="talent in this.character.talents" :key="talent.id">
        {{ talent }}
      </li>
    </ul>
    <hr />
    <p>Ausrüstung</p>
    <hr />
    <ul class="py-3">
      <li v-for="item in this.character.items" :key="item.id">
        <p v-if="item.waffe">{{ item.waffe }}</p>
        <p v-if="item.rüstung">{{ item.rüstung }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InfoBox",
  props: {
    character: Object,
  },
  data: () => {
    return {};
  },
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
.infobox {
  border: 3px inset #565d66;
  background-image: url("../../assets/asfalt-dark.png");
  background-repeat: repeat;
}
</style>
