<template>
  <div class="flex flex-wrap gap-6 justify-center sm:justify-start">
    <router-link :to="{ name: 'Elfen' }">
      <category-card class="flex-grow-0" title="Elfen" />
    </router-link>
    <router-link :to="{ name: 'Gnome' }">
      <category-card class="flex-grow-0" title="Gnome" />
    </router-link>
    <router-link :to="{ name: 'HalbElfen' }">
      <category-card class="flex-grow-0" title="Halb-Elfen" />
    </router-link>
    <router-link :to="{ name: 'HalbOrks' }">
      <category-card class="flex-grow-0" title="Halb-Orks" />
    </router-link>
    <router-link :to="{ name: 'Menschen' }">
      <category-card class="flex-grow-0" title="Menschen" />
    </router-link>
    <router-link :to="{ name: 'Halblinge' }">
      <category-card class="flex-grow-0" title="Halblinge" />
    </router-link>
    <router-link :to="{ name: 'Zwerge' }">
      <category-card class="flex-grow-0" title="Zwerge" />
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
