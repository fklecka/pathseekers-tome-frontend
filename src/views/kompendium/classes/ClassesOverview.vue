<template>
  <div class="flex flex-wrap gap-6 justify-center sm:justify-start">
    <router-link to="/kompendium/classes/barbar">
      <category-card class="flex-grow-0" title="Barbar" />
    </router-link>
    <router-link to="/">
      <category-card class="flex-grow-0" title="Barde" />
    </router-link>
    <router-link to="/">
      <category-card class="flex-grow-0" title="Druide" />
    </router-link>
    <router-link to="/">
      <category-card class="flex-grow-0" title="Hexenmeister" />
    </router-link>
    <router-link to="/">
      <category-card class="flex-grow-0" title="Kämpfer" />
    </router-link>
    <router-link to="/">
      <category-card class="flex-grow-0" title="Kleriker" />
    </router-link>
    <router-link to="/">
      <category-card class="flex-grow-0" title="Magier" />
    </router-link>
    <router-link to="/">
      <category-card class="flex-grow-0" title="Mönch" />
    </router-link>
    <router-link to="/">
      <category-card class="flex-grow-0" title="Paladin" />
    </router-link>
    <router-link to="/">
      <category-card class="flex-grow-0" title="Schurke" />
    </router-link>
    <router-link to="/">
      <category-card class="flex-grow-0" title="Waldläufer" />
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
