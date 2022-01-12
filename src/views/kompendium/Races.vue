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
    <div class="border-b border-opacity-25 pl-3 md:pl-0 mb-6">
      <router-link to="/kompendium" class="text-xl hover:text-orange"
        >Kompendium</router-link
      >
      <span> > </span>
      <router-link to="/kompendium/races" class="text-lg hover:text-orange"
        >Völker</router-link
      >
      <span> > </span>
      <span>{{ $route.name }}</span>
    </div>
    <router-view />
  </div>
</template>

<script></script>

<style></style>
