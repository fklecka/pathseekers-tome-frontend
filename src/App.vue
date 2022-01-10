<template>
  <div>
    <loading
      :active="loading"
      :color="'#F28241'"
      :background-color="'#000000'"
      :lock-scroll="true"
    />
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Goudy Bookletter 1911";
  src: local("Goudy Bookletter 1911"),
    url(./fonts/GoudyBookletter1911-Regular.ttf), format(truetype);
}
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Raleway";
  background-color: #2c3540;
}
</style>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  components: { Loading },
  computed: {
    loading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
