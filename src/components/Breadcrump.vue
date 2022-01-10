<template>
  <div class="border-b border-opacity-25 mb-6">
    <span v-for="crump in crumps" v-bind:key="crump.id">
      <router-link :to="{}" class="text-xl hover:text-orange">{{
        crump
      }}</router-link>
      <span> > </span>
    </span>
  </div>
</template>

<script>
export default {
  props: ["crumps"],
};
</script>

<style></style>
