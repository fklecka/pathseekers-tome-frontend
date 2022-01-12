<template>
  <div
    class="
      w-full
      h-app
      bg-bg
      pt-6
      md:pt-12
      pb-36
      md:pb-16 md:px-12
      overflow-y-scroll
      text-font
    "
  >
    <div class="border-b border-opacity-25 mb-6 hover:text-orange px-3 md:px-0">
      <router-link to="/kompendium" class="text-xl">Kompendium</router-link>
    </div>
    <div>
      <div
        class="
          flex flex-wrap
          gap-6
          justify-center
          sm:justify-start
          px-3
          md:px-0
        "
      >
        <router-link to="spells">
          <category-card
            class="flex-grow-0"
            title="Zauber"
            :url="require('../../assets/icons/spell-book.svg')"
          />
        </router-link>
        <router-link to="weapons">
          <category-card
            class="flex-grow-0"
            title="Waffen"
            :url="require('../../assets/icons/crossed-swords.svg')"
          />
        </router-link>
        <router-link to="talents">
          <category-card
            class="flex-grow-0"
            title="Talente"
            :url="require('../../assets/icons/scroll-unfurled.svg')"
          />
        </router-link>
        <router-link to="races">
          <category-card
            class="flex-grow-0"
            title="Völker"
            :url="require('../../assets/icons/dwarf-face.svg')"
          />
        </router-link>
        <router-link to="classes">
          <category-card
            title="Klassen"
            :url="require('../../assets/icons/archer.svg')"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../../components/kompendium/CategoryCard.vue";
export default {
  components: { CategoryCard },
};
</script>

<style scoped></style>
