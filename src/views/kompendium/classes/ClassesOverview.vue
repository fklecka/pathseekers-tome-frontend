<template>
  <div class="flex flex-wrap gap-6 justify-center sm:justify-start">
    <router-link to="/kompendium/classes/barbar">
      <category-card
        class="flex-grow-0"
        title="Barbar"
        :url="require('../../../assets/classicons/barbarian.svg')"
      />
    </router-link>
    <router-link to="/kompendium/classes/barde">
      <category-card
        class="flex-grow-0"
        title="Barde"
        :url="require('../../../assets/classicons/bard.svg')"
      />
    </router-link>
    <router-link to="/">
      <category-card
        class="flex-grow-0"
        title="Druide"
        :url="require('../../../assets/classicons/druid.svg')"
      />
    </router-link>
    <router-link to="/">
      <category-card
        class="flex-grow-0"
        title="Hexenmeister"
        :url="require('../../../assets/classicons/warlock.svg')"
      />
    </router-link>
    <router-link to="/">
      <category-card
        class="flex-grow-0"
        title="Kämpfer"
        :url="require('../../../assets/classicons/fighter.svg')"
      />
    </router-link>
    <router-link to="/">
      <category-card
        class="flex-grow-0"
        title="Kleriker"
        :url="require('../../../assets/classicons/cleric.svg')"
      />
    </router-link>
    <router-link to="/">
      <category-card
        class="flex-grow-0"
        title="Magier"
        :url="require('../../../assets/classicons/wizard.svg')"
      />
    </router-link>
    <router-link to="/">
      <category-card
        class="flex-grow-0"
        title="Mönch"
        :url="require('../../../assets/classicons/monk.svg')"
      />
    </router-link>
    <router-link to="/">
      <category-card
        class="flex-grow-0"
        title="Paladin"
        :url="require('../../../assets/classicons/paladin.svg')"
      />
    </router-link>
    <router-link to="/">
      <category-card
        class="flex-grow-0"
        title="Schurke"
        :url="require('../../../assets/classicons/rogue.svg')"
      />
    </router-link>
    <router-link to="/">
      <category-card
        class="flex-grow-0"
        title="Waldläufer"
        :url="require('../../../assets/classicons/ranger.svg')"
      />
    </router-link>
  </div>
</template>

<script>
import CategoryCard from "../../../components/kompendium/CategoryCard.vue";
export default {
  components: { CategoryCard },
};
</script>

<style></style>
