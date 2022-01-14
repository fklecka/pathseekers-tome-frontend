<template>
  <div class="bg-white bg-opacity-5 py-6 px-10 my-6">
    <p class="pb-6 text-center text-xl">Wähle ein Bonusattribut</p>
    <div class="flex flex-wrap gap-3 justify-center">
      <attribute-card
        :title="'Stärke'"
        class="bg-card border border-card hover:bg-bg text-center"
        @click="setAndPassAttribute('Stärke')"
        v-bind:class="{ active: attribute === 'Stärke' }"
      />
      <attribute-card
        :title="'Geschicklichkeit'"
        class="bg-card border border-card hover:bg-bg text-center"
        @click="setAndPassAttribute('Geschicklichkeit')"
        v-bind:class="{ active: attribute === 'Geschicklichkeit' }"
      />
      <attribute-card
        :title="'Konstitution'"
        class="bg-card border border-card hover:bg-bg text-center"
        @click="setAndPassAttribute('Konstitution')"
        v-bind:class="{ active: attribute === 'Konstitution' }"
      />
      <attribute-card
        :title="'Intelligenz'"
        class="bg-card border border-card hover:bg-bg text-center"
        @click="setAndPassAttribute('Intelligenz')"
        v-bind:class="{ active: attribute === 'Intelligenz' }"
      />
      <attribute-card
        :title="'Weisheit'"
        class="bg-card border border-card hover:bg-bg text-center"
        @click="setAndPassAttribute('Weisheit')"
        v-bind:class="{ active: attribute === 'Weisheit' }"
      />
      <attribute-card
        :title="'Charisma'"
        class="bg-card border border-card hover:bg-bg text-center"
        @click="setAndPassAttribute('Charisma')"
        v-bind:class="{ active: attribute === 'Charisma' }"
      />
    </div>
  </div>
</template>

<script>
import AttributeCard from "../charactertool/AttributeCard.vue";
export default {
  data: () => {
    return {
      attribute: "",
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
  components: { AttributeCard },
  methods: {
    setAndPassAttribute(value) {
      this.attribute = value;
      if (value === "Stärke") {
        this.clearAttributes();
        this.bonusAttributes.st = 2;
      } else if (value === "Geschicklichkeit") {
        this.clearAttributes();
        this.bonusAttributes.ge = 2;
      } else if (value === "Konstitution") {
        this.clearAttributes();
        this.bonusAttributes.kon = 2;
      } else if (value === "Intelligenz") {
        this.clearAttributes();
        this.bonusAttributes.int = 2;
      } else if (value === "Weisheit") {
        this.clearAttributes();
        this.bonusAttributes.wei = 2;
      } else if (value === "Charisma") {
        this.clearAttributes();
        this.bonusAttributes.ch = 2;
      }
      this.$emit("setAndPassAttribute", this.bonusAttributes);
    },
    clearAttributes() {
      this.bonusAttributes = {
        st: 0,
        ge: 0,
        kon: 0,
        int: 0,
        wei: 0,
        ch: 0,
      };
    },
  },
};
</script>

<style scoped>
.active {
  background: #2c3540;
  border: 5px inset #00000033;
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px #00000020;
}
</style>
